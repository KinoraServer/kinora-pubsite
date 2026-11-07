---
title: Remote access
description: Stream from your Kinora server away from home with Tailscale, Caddy, Nginx or Traefik.
---

Kinora uses only relative URLs, so it works behind Nginx, Caddy, Traefik or Tailscale Serve, at the root or under a sub-path like `/kinora/`, with no settings. HTTPS is left to the proxy.

## Tailscale (easiest)

Install Tailscale on the server and on your devices, then open `http://<server-name>:8420`. Nothing is exposed to the internet.

For HTTPS on your tailnet: `tailscale serve --bg 8420`.

## Caddy

```txt
media.example.com {
  reverse_proxy 192.168.1.20:8420
}
```

## Nginx

```nginx
location / {
  proxy_pass http://192.168.1.20:8420;
  proxy_set_header Host $host;
  proxy_set_header X-Forwarded-Proto $scheme;
  proxy_buffering off;
}
```
