#!/bin/sh

mv ./dist ./jsonresume-theme-cappuccino
cp -r ./jsonresume-theme-cappuccino ./node_modules
bun resumed render resume.json -t jsonresume-theme-cappuccino
rm -rf ./jsonresume-theme-cappuccino
rm -rf ./node_modules/jsonresume-theme-cappuccino
