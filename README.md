# Hisaab — landing site

The landing page and legal pages for Hisaab (by CraftyCrow). Static, self-hosted,
no build step. Dark/light aware, keyboard-friendly.

## Structure

```
docs/               ← the website (GitHub Pages serves from here)
  index.html          landing page
  privacy.html        privacy policy
  terms.html          terms
  refund.html         refunds & cancellation
  legal.css           shared style for the legal pages
  theme.js            shared light/dark toggle for the legal pages
  favicon.svg         browser icon
  og-image.svg        social-share card (source)
  og-image.png        social-share card (1200×630, referenced by the meta tags)
```

## Deploy (GitHub Pages)

1. Settings → Pages → Deploy from a branch → `main` / `/docs`.
2. Add the custom subdomain (e.g. `hisaab.craftycrow.co`) and its CNAME record.
3. Done — `docs/index.html` is served as the site root.

## Before launch — fill these in

- **GA4**: replace `G-XXXXXXXXXX` in `docs/index.html` with your Measurement ID.
- **Pay button**: point the `Get Hisaab — ₹112` link (`href="#"`) at the Dodo checkout URL.
- **Domain**: the OG / canonical tags assume `hisaab.craftycrow.co`. Change if different.
- **Form**: capture posts to CraftyForms; test once live (if it errors, allow the
  site origin + `OPTIONS` on the form server).

Delivery email is built in Dodo directly.
