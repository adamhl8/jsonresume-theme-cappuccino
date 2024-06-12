# jsonresume-theme-cappuccino

Cappuccino is a [JSON Resume](https://jsonresume.org) theme based on the [Macchiato theme](https://github.com/biosan/jsonresume-theme-macchiato).

It's built using TypeScript/React to provide a more modern and streamlined development experience.

## Why?

Most JSON Resume themes are built using plain old JavaScript + a templating engine such as [Handlebars](https://handlebarsjs.com). Templating engine syntax quickly becomes messy and difficult to maintain, and the lack of type safety makes for a frustrating development experience.

I wanted to use more modern, well-known tools (i.e. TypeScript/React) to get the all the benefits of type safety, IDE autocompletion, etc. There were some interesting technical challenges to solve in doing this which you can read more about in the [technical details](#technical-details) section.

## Usage

*This package is currently unpublished, so the following instructions don't work (yet). See [local usage](#local-usage) instead.*

1. Install [resumed](https://github.com/rbardini/resumed)

```sh
npm install -g resumed
```

2. Install `jsonresume-theme-cappuccino`

```sh
npm install -g jsonresume-theme-cappuccino
```

3. Generate your resume (assuming your `resume.json` is in the current directory)

```sh
resumed render resume.json -t jsonresume-theme-cappuccino
```

## Local Usage

This project includes [resumed](https://github.com/rbardini/resumed) as a dev dependency so there's no need to install anything globally.

1. Clone this repository

```sh
git clone https://github.com/adamhl8/jsonresume-theme-cappuccino.git
```

2. Install dependencies ([install Bun](https://bun.sh) if you need to)

```sh
bun install
```

3. Replace `resume.json` with your own

4. Generate your resume

```sh
bun render
```

Your resume will be saved to `resume.html`.

## Technical Details

You *could* just manually write your entire resume in one HTML file, but that would be a pain to maintain. Templating engines like Handlebars are used because it allows you to split your HTML multiple files and create reusable components. React of course allows the same. It also allows you to use standard JavaScript features, rather than relying on custom templating engine syntax.

React is usually used in the context of a web app, where the React code is sent to the client along with the HTML to allow the DOM to be manipulated (*🎉reactivity🎉*). In this case, we don't need anything to be interactive, we're just using React as a means to organize our code.

### JSON Resume themes

JSON Resume themes are relatively simple overall. A theme needs to do two things:
1. Define a `render` function
2. Make sure the `render` function returns a valid string of HTML (which is your entire resume)

In other words, the entry point to the theme (i.e. `index.ts`) needs to export a function called `render`. This function takes an object that will contain your `resume.json` data. The theme is responsible for taking this data and turning it into HTML. Finally, the `render` function returns this string of HTML. See `src/index.ts`.

In essence, a tool like `resumed` is just doing this:

- Parse the `resume.json` file
- Call the `render` function from the specified theme, passing in the `resume.json` data
- Write the returned HTML to a file

What does this mean for the theme developer? Well, it means that you can use whatever you want to generate the HTML. As long as you return a valid string of HTML, it should work. In my case, I needed to figure out if it was possible to take React/JSX and "convert" it to HTML.

### renderToStaticMarkup()

Fortunately, React provides a function to do just that. [`renderToStaticMarkup`](https://react.dev/reference/react-dom/server/renderToStaticMarkup) (from `react-dom/server`) renders a *non-interactive* React tree to a string of HTML.

The "non-interactive" part is important. Anything you'd normally do with React to create something interactive/reactive won't work here. Specifically, hooks like `useState` are effectively ignored; you just get the raw markup.

With this, I have pretty much everything I need. I can use TypeScript/React to create the theme and then convert the whole thing to a string HTML.

### CSS

The generated HTML file (i.e. the resume) needs to include *everything*, including CSS. If I want to have my CSS as a separate, normal `.css` file, I need a way to include it in the React tree before `renderToStaticMarkup` is called. The theme runs locally, not in a browser, so I can use runtime-specific APIs (like `node:fs`) to read files.

In `src/resume/Resume.tsx`, I read in my `style.css` file like so:

```ts
const css = fs.readFileSync(path.join(import.meta.dirname, "style.css"), "utf-8");
```

Now I can pass this string of CSS into a `<style>` tag. In order pass in the raw, unescaped string, you can use the React property `dangerouslySetInnerHTML`:

```tsx
<style dangerouslySetInnerHTML={{ __html: css }} />
```
