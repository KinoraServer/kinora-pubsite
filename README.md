# kinoraserver.com

The website and docs for [Kinora](https://github.com/LanceAlthouse/kinora), built with Astro + Starlight.

## Develop

```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # static site in dist/
pnpm preview   # serve the built site
```

- Landing page: `src/content/docs/index.mdx`
- Docs: `src/content/docs/docs/**` (sidebar in `astro.config.mjs`)
- Brand colours: `src/styles/kinora.css` (Kinora Green theme tokens)
- Logos and screenshots: `src/assets/`, favicons in `public/`
