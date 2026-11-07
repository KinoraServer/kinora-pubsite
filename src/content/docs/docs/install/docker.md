---
title: Install with Docker
description: Install the Kinora media server with docker run or Docker Compose, with Intel, AMD or NVIDIA hardware transcoding.
---

Kinora ships as one image for amd64 and arm64: `ghcr.io/lancealthouse/kinora:latest`.

## docker run

```bash
docker run -d --name kinora -p 8420:8420 \
  -v /path/to/config:/config \
  -v /path/to/media:/media:ro \
  --device /dev/dri:/dev/dri \
  ghcr.io/lancealthouse/kinora:latest
```

Then open `http://<server-ip>:8420`, create your account, and add a library from `/media` in **Admin → Libraries**.

- **Intel / AMD GPU**: keep `--device /dev/dri:/dev/dri`. Remove it if the machine has none, such as Docker Desktop on a Mac.
- **NVIDIA GPU**: add `--runtime=nvidia` and `-e NVIDIA_DRIVER_CAPABILITIES=all`. See [hardware transcoding](/docs/guides/hardware-transcoding/).
- **Artwork and descriptions**: add a free TMDB API key in **Admin → Modules**, or pass `-e TMDB_API_KEY=...`.
- **Transcode temp files**: optionally mount fast storage or a RAM disk at `/transcode`.

## Docker Compose

```yaml
services:
  kinora:
    image: ghcr.io/lancealthouse/kinora:latest
    container_name: kinora
    ports:
      - "8420:8420"
    volumes:
      - ./config:/config          # database, settings, themes (back this up)
      - /path/to/media:/media:ro  # your movies and shows
      # - /tmp/kinora:/transcode  # optional: transcode temp files on a RAM disk / fast SSD
    # devices:
    #   - /dev/dri:/dev/dri       # Intel / AMD hardware transcoding
    # runtime: nvidia             # NVIDIA hardware transcoding
    environment:
      - TMDB_API_KEY=             # optional: can also be set in Admin → Modules
    restart: unless-stopped
```

Change the media path, then run `docker compose up -d`.

## Folders

| Path | What it holds |
| --- | --- |
| `/config` | Database, settings and your own themes. Back this up. Keep it on an SSD. |
| `/media` | Your library. Read-only is fine. |
| `/transcode` | Optional. Temporary transcode segments. |

## Updating

```bash
docker pull ghcr.io/lancealthouse/kinora:latest
docker compose up -d   # or remove and re-run the container
```
