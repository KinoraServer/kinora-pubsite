---
title: FAQ
description: "Answers to common questions about Kinora, the free self-hosted media server: pricing, GPUs, Dolby Vision, installing, remote access and apps."
head:
  - tag: script
    attrs:
      type: application/ld+json
    content: |
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Kinora?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kinora is a free, open-source, self-hosted media server for movies and TV shows. It scans your files, fetches artwork from TMDB, and streams to browsers and an Android TV app, transcoding on your GPU only when a device can't play a file as-is."
            }
          },
          {
            "@type": "Question",
            "name": "Is Kinora free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Kinora is free and open source under the GPL-2.0 license. Every feature, including hardware transcoding, is free. There is no paid tier."
            }
          },
          {
            "@type": "Question",
            "name": "Is Kinora a Jellyfin or Plex alternative?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, for movies and TV. Kinora covers the core of what people use Jellyfin and Plex for: libraries, metadata, direct play, GPU transcoding and remote viewing. It's younger and has fewer clients and media types today. The comparison page lists the differences honestly."
            }
          },
          {
            "@type": "Question",
            "name": "Does Kinora need a GPU?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. It plays files directly whenever it can, and transcodes on the CPU if there's no GPU. A GPU helps a lot with 4K and HDR transcodes."
            }
          },
          {
            "@type": "Question",
            "name": "Which GPUs does Kinora support for hardware transcoding?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NVIDIA (NVENC), Intel (Quick Sync and VAAPI), AMD (VAAPI) and Apple (VideoToolbox). Kinora runs a real test encode on each at startup and only uses the ones that work, with CPU fallback."
            }
          },
          {
            "@type": "Question",
            "name": "Does Kinora support Dolby Vision and HDR?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. It detects HDR10, HLG and Dolby Vision. Dolby Vision profile 8.1 plays as HDR10 on HDR screens without transcoding, and Kinora tone maps to SDR for screens that need it."
            }
          },
          {
            "@type": "Question",
            "name": "How do I install Kinora?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Run the Docker image ghcr.io/lancealthouse/kinora:latest with Docker or Docker Compose, or use the Unraid template. Then open port 8420 in your browser and create your account."
            }
          },
          {
            "@type": "Question",
            "name": "Which port does Kinora use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "8420 by default."
            }
          },
          {
            "@type": "Question",
            "name": "Where does Kinora store my data?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Everything lives in the /config folder: the SQLite database, settings and your themes. Back up that folder."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use Kinora away from home?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, with Tailscale or your own reverse proxy such as Caddy, Nginx or Traefik. Kinora works at the root or under a sub-path with no extra settings."
            }
          },
          {
            "@type": "Question",
            "name": "Is there an iPhone, Apple TV or Android phone app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not yet. Kinora has a native Android TV app, and any device can use the web app in a browser."
            }
          }
        ]
      }
---

### What is Kinora?

Kinora is a free, open-source, self-hosted media server for movies and TV shows. It scans your files, fetches artwork from TMDB, and streams to browsers and an Android TV app, transcoding on your GPU only when a device can't play a file as-is.

### Is Kinora free?

Yes. Kinora is free and open source under the GPL-2.0 license. Every feature, including hardware transcoding, is free. There is no paid tier.

### Is Kinora a Jellyfin or Plex alternative?

Yes, for movies and TV. Kinora covers the core of what people use Jellyfin and Plex for: libraries, metadata, direct play, GPU transcoding and remote viewing. It's younger and has fewer clients and media types today. The [comparison page](/docs/compare/) lists the differences honestly.

### Does Kinora need a GPU?

No. It plays files directly whenever it can, and transcodes on the CPU if there's no GPU. A GPU helps a lot with 4K and HDR transcodes.

### Which GPUs does Kinora support for hardware transcoding?

NVIDIA (NVENC), Intel (Quick Sync and VAAPI), AMD (VAAPI) and Apple (VideoToolbox). Kinora runs a real test encode on each at startup and only uses the ones that work, with CPU fallback.

### Does Kinora support Dolby Vision and HDR?

Yes. It detects HDR10, HLG and Dolby Vision. Dolby Vision profile 8.1 plays as HDR10 on HDR screens without transcoding, and Kinora tone maps to SDR for screens that need it.

### How do I install Kinora?

Run the Docker image ghcr.io/lancealthouse/kinora:latest with Docker or Docker Compose, or use the Unraid template. Then open port 8420 in your browser and create your account.

### Which port does Kinora use?

8420 by default.

### Where does Kinora store my data?

Everything lives in the /config folder: the SQLite database, settings and your themes. Back up that folder.

### Can I use Kinora away from home?

Yes, with Tailscale or your own reverse proxy such as Caddy, Nginx or Traefik ([guide](/docs/guides/remote-access/)). Kinora works at the root or under a sub-path with no extra settings.

### Is there an iPhone, Apple TV or Android phone app?

Not yet. Kinora has a native Android TV app, and any device can use the web app in a browser.
