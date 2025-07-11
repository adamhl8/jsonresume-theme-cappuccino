# jsonresume-theme-react-tailwind

This is a [JSON Resume](https://jsonresume.org) theme based on the [Macchiato theme](https://github.com/biosan/jsonresume-theme-macchiato).

It's built using TypeScript/React/Tailwind to provide a more modern and streamlined development experience.

## Why?

Most JSON Resume themes are built using plain old JavaScript + a templating engine such as [Handlebars](https://handlebarsjs.com). Templating engine syntax quickly becomes messy and difficult to maintain, and the lack of type safety makes for a frustrating development experience.

I wanted to use more modern, well-known tools (i.e. TypeScript/React/Tailwind) to get the all the benefits of type safety, IDE autocompletion, etc. There were some interesting technical challenges to solve in doing this which you can read more about in the [technical details](#technical-details) section.

## Usage

> [!IMPORTANT]
> This project is intended to be forked and used as a starting point for building your own theme. As such, it currently only supports a small subset of the JSON Resume schema.

This project includes [resumed](https://github.com/rbardini/resumed) as a dev dependency so there's no need to install it globally.

1. Clone this repository

   ```sh
   git clone https://github.com/adamhl8/jsonresume-theme-react-tailwind.git
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

> [!TIP]
> **Export PDF**
>
> The resumed CLI supports exporting your resume as a PDF via `resumed export`. However, I've found that this doesn't always render correctly.
>
> I recommend opening `resume.html` in your browser and using the native print to PDF feature.

### Watch Mode

For a better development experience, you can run `bun watch` to automatically regenerate the `resume.html` file whenever you make changes to `resume.json` or anything in the `src` directory.

1. Install [watchexec](https://github.com/watchexec/watchexec/tree/main?tab=readme-ov-file#install)
2. Run `bun watch`
3. Open `resume.html` in your browser

> [!IMPORTANT]
> You will need to manually refresh the browser page to see changes.

## Technical Details

You _could_ just manually write your entire resume in one HTML file, but that would be a pain to maintain. Templating engines like Handlebars are used because it allows you to split your HTML multiple files and create reusable components. React of course allows the same. It also allows you to use standard JavaScript features, rather than relying on custom templating engine syntax.

React is usually used in the context of a web app, where the React code is sent to the client along with the HTML to allow the DOM to be manipulated (_🎉reactivity🎉_). In this case, we don't need anything to be interactive, we're just using React as a means to organize our code.

### JSON Resume themes

JSON Resume themes are relatively simple overall. A theme needs to do two things:

1. Define a `render` function
2. Make sure the `render` function returns a valid string of HTML (which is your entire resume)

In other words, the entry point to the theme (i.e. `index.ts`) needs to export a function called `render`. This function takes an object that will contain your `resume.json` data. The theme is responsible for taking this data and turning it into HTML. Finally, the `render` function returns this string of HTML. See `src/index.ts`.

In essence, a tool like `resumed` is just doing this:

- Parse the `resume.json` file
- Call the `render` function from the specified theme, passing in the `resume.json` data
- Write the returned HTML to a file

What does this mean for the theme developer? Well, it means that we can use whatever we want to generate the HTML. As long as we return a valid string of HTML, it should work. In this case, we need to figure out if it's possible to take React/JSX and "convert" it to HTML.

### renderToStaticMarkup()

Fortunately, React provides a function to do just that. [`renderToStaticMarkup`](https://react.dev/reference/react-dom/server/renderToStaticMarkup) (from `react-dom/server`) renders a _non-interactive_ React tree to a string of HTML.

The "non-interactive" part is important. Anything you'd normally do with React to create something interactive/reactive won't work here. Specifically, hooks like `useState` are effectively ignored; you just get the raw markup.

With this, we have pretty much everything we need. We can use TypeScript/React to create the theme and then convert the whole thing to a string of HTML.

### Tailwind/CSS

The Tailwind CLI makes it really easy to generate the final CSS file. e.g. `tailwindcss -i input.css -o output.css` So there's not much that needs to be done for Tailwind specifically.

The real question is how do we get our generated HTML file (i.e. the resume) to include the CSS? We need a way to include it in the React tree before `renderToStaticMarkup` is called. The theme runs locally, not in a browser, so I can use runtime-specific APIs (like `node:fs`) to read files.

In `src/resume/Resume.tsx`, we read in our `global.css` file like so:

```ts
const css = fs.readFileSync(path.join(import.meta.dirname, "global.css"), "utf-8")
```

Now we can pass this string of CSS into a `<style>` tag. In order pass in the raw, unescaped string, we can use the React property `dangerouslySetInnerHTML`:

```tsx
<style dangerouslySetInnerHTML={{ __html: css }} />
```
