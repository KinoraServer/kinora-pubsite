---
title: Introduction
description: What Kinora is, what it can do today, and how to get started with this self-hosted media server.
---

Kinora is a lightweight, self-hosted media server. You point it at your movies and TV shows, and it scans them, fetches artwork and descriptions from TMDB, and streams them to any browser or to the Android TV app.

It plays a file as-is whenever the device can handle it. When it can't, Kinora remuxes or transcodes to HLS, using your GPU (Intel, AMD, NVIDIA or Apple) if you have one.

## What's in the box

- One Rust binary with the web app built in
- SQLite for storage, so there's no database server to run
- FFmpeg for video
- Users with roles (owner, admin, editor, viewer)
- Movie and TV libraries with scheduled and on-demand scans
- Resume, watched state, audio and subtitle switching
- An admin dashboard with active streams and an activity log

## Next steps

1. [Install with Docker](/docs/install/docker/), or [on Unraid](/docs/install/unraid/).
2. Set up [hardware transcoding](/docs/guides/hardware-transcoding/) if you have a GPU.
3. Reach it from outside your home with [remote access](/docs/guides/remote-access/).
