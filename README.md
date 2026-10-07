# Kisan Machinery Mart

A lightweight, responsive dealership website built with plain HTML5, CSS3, and vanilla JavaScript. It has no frontend framework, build step, backend, or database and can be opened directly from `index.html`.

## Run locally

Open `index.html` in a browser. To preview it through a local web server instead, run Python from the project directory:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## GitHub Pages deployment

The included GitHub Actions workflow publishes the static website when changes are pushed to `main`.

1. Push the repository to GitHub.
2. In the repository, open **Settings → Pages**.
3. Set **Build and deployment → Source** to **GitHub Actions**.
4. Push to `main` or manually run **Deploy to GitHub Pages** from the **Actions** tab.

For this repository, the site URL is `https://udittriad.github.io/kisan-machinery-mart/`.

## Hostinger deployment

Upload `index.html`, `style.css`, `script.js`, and the complete `images` folder to the site's `public_html` directory. Keep the files and folder structure together, then open the domain in a browser.

## Website files

- `index.html` — page content and SEO metadata
- `style.css` — layout, colors, animation, and responsive styles
- `script.js` — mobile navigation and current-year footer
- `images/` — local dealership and tractor images

Update contact information and page content in `index.html`. Replace images in `images/` while keeping their filenames, or update the matching relative paths in the HTML.
