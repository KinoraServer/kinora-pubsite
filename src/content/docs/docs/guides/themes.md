---
title: Themes
description: Pick one of Kinora's six built-in themes or make your own with a small JSON file.
---

Kinora ships six themes: **Kinora** and **Kinora Light**, **Midnight** and **Daylight**, **OLED Black** and **Ember**. Kinora and Midnight come as light and dark pairs that follow the Light / Dark / System switch.

- **Your own look**: open **Settings** from the account menu and pick a mode and a theme. It applies to the browser you're using.
- **Default for everyone**: admins pick it in **Admin → Modules & themes** and **Admin → Settings**.

## Make your own

A theme is a small JSON file. Kinora loads extra ones from the `themes` folder in your config directory (`/config/themes` in Docker).

1. Copy `themes/example-ocean.json.sample` to a new file ending in `.json`, for example `themes/sunset.json`.
2. Change `id` (lowercase letters, numbers and dashes), `name`, and the colours.
3. Refresh the web app.

```json
{
  "id": "sunset",
  "name": "Sunset",
  "author": "You",
  "scheme": "dark",
  "tokens": {
    "background": "oklch(0.18 0.03 30)",
    "primary": "#ff7a59",
    "radius": "1rem"
  }
}
```

Tokens you leave out fall back to the Kinora theme.

## Light and dark pairs

Make two files, one with `"scheme": "dark"` and one with `"scheme": "light"`, and add `"pair": "<other id>"` to either of them. The picker then shows them as one card.
