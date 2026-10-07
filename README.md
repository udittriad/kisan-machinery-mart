# Kisan Machinery Mart

A static React + Vite + Tailwind website for Kisan Machinery Mart, Bijnor. It has no backend or database and can be hosted on GitHub Pages or any static host such as Hostinger.

## Run locally

```sh
npm install
npm run dev
```

Create and preview a production build:

```sh
npm run build
npm run preview
```

The generated static website is in `dist/`. Upload the contents of that folder to Hostinger's `public_html` directory to deploy there.

## GitHub Pages

The included `.github/workflows/deploy.yml` builds and deploys the site when changes are pushed to `main`. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. The Vite base path is configured for this repository name in `vite.config.js`; update it if the repository is renamed. For a custom domain or a user/organization site, use `/` as the Vite `base` instead.

## Business details and content

Edit `src/data/business.js` to change:

- Phone numbers, WhatsApp number/message, and contact person
- Bijnor and Najibabad addresses and map URLs
- Dealership opening-soon badge, brands, and social links
- Hero, field, tractor, delivery, showroom, and gallery image paths

Edit `src/data/tractors.js` to add inventory models and their confirmed HP values. Leave `horsepower` as `null` until the specification is verified. The current model cards intentionally use general brand/model placeholders rather than claiming exact models or specifications.

Add verified customer names and approved review text in `src/components/Testimonials.jsx` before publishing testimonials. Supplied local assets `messy1.jpeg`, `messy2.jpeg`, `messy3.jpeg`, and `messy5.jpeg` are used for the hero and tractor cards. Gallery locations without real dealership photography still use public Unsplash agriculture photos: replace the corresponding `images` entries in `src/data/business.js` with dealership-owned showroom, delivery, agriculture, and customer photos. The supplied `photo.jpeg` promotional poster is used in the offers section; replace it with an updated poster by changing its import at the top of `src/data/business.js`.

Social icons appear when their URLs are set in `business.socialLinks`. Location cards use Google Maps search directions by default; set a precise `mapUrl` for each location to use a verified pin.

## Image note

Initial agriculture/gallery images are served from Unsplash and should be replaced with owned showroom, delivery, field, and customer photos for the finished dealership site.
