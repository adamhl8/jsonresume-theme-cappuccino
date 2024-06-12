#!/bin/sh

rm -rf ./dist
bun tsc
cp ./src/resume/style.css ./dist/resume/
cp package.json ./dist
