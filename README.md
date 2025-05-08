# URL Shortener Demo

This is a simple, frontend-only URL shortener demo built with HTML, CSS, and JavaScript. It's hosted using GitHub Pages.

## Features
- Simulates creating a short link for any long URL
- Stores redirect mappings in localStorage (only works in same browser/device)
- No backend required

## How It Works
1. Enter a long URL
2. A fake short URL is generated like: `...?r=abcde`
3. When the short link is visited, the site redirects to the original long URL (in the same browser)

## Limitations
- Redirects are not stored globally — they only work on the device where the link was created
- GitHub Pages is used, so no server-side logic is involved

## Live Demo
[Click here to try it](https://zainbaig2005.github.io/url-shortener-demo/)
