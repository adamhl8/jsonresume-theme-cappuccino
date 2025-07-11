#!/bin/sh

# The resumed cli resolves the theme from node_modules, so we have to build our theme and copy it into node_modules

bun bundle
rm -rf node_modules/jsonresume-theme-react-tailwind/
mkdir -p node_modules/jsonresume-theme-react-tailwind/
cp -r dist/ package.json node_modules/jsonresume-theme-react-tailwind/

bun resumed render resume.json -t jsonresume-theme-react-tailwind
