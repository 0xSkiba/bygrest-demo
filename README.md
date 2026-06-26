# Bygrest — web demo

A static, no-build demo website that mirrors the Bygrest iOS app on the same
mock data, so anyone can preview the product in a browser.

> Bygrest **connects buyers and sellers** of reusable surplus building materials.
> It is **not** a shop/checkout/payment/logistics service. Pickup and payment are
> arranged directly between users. This positioning is reflected throughout the
> demo (primary CTA "Contact seller", disclaimers, no Buy/Checkout/Pay/Delivery).

## View it

It's plain HTML/CSS/JS — no build step.

- **Easiest:** open `web/index.html` in any browser.
- **Or serve** (recommended, avoids any file:// quirks):
  ```bash
  cd web && python3 -m http.server 8765
  # open http://localhost:8765
  ```

## What's included (mirrors the app)

- **Onboarding** — 3 slides, shown once (clears via localStorage).
- **Market (feed)** — material photos, price / "Free", area + distance, CO₂ badge,
  "Soon" pre-demolition badge, seller stars, favourites (heart + filter + count),
  grid/list toggle, live search, **DA/EN** language switch.
- **Listing detail** — photo, facts, category, approximate-area map (exact address
  "shared in chat"), seller (Private/Company + CVR + rating → reviews), the required
  legal disclaimer, **Contact seller** (primary) + **Request pickup** (secondary),
  report + save.
- **Sell flow** — pick a demo photo → AI suggestion (editable, "must be reviewed")
  → price / Free, pickup area + deadline → **5-item safety checklist** →
  **Create listing** (disabled until checklist complete).
- **Messages** — inbox + chat with the "not part of the transaction" disclaimer and
  safe quick replies. No payment UI.
- **Profile** — reputation, listings, incoming pickup requests (Confirm / Mark
  picked up / Cancel), favourites, language, About.
- **About** — intermediary disclaimer, **prohibited materials** list, privacy note,
  Terms / Privacy policy placeholders.

## Hosting

Drop the `web/` folder on any static host (GitHub Pages, Netlify, Vercel, S3,
Cloudflare Pages) — no server code required.

## Note

This is a **demo only**: data is in-memory mock data (same listings as the iOS
app), interactions are simulated, there is no backend, no real auth, and no
payments. Legal copy (Terms, Privacy Policy) is placeholder and needs real text.
