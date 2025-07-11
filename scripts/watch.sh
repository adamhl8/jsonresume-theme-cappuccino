#!/bin/sh

# We use 'watchexec' for watch mode. Install it if you haven't already: https://github.com/watchexec/watchexec

echo "Open 'resume.html' in your browser"
echo ""

watchexec -w ./resume.json -w ./src/ ./scripts/render.sh
