---
title: Hardware transcoding
description: Set up GPU hardware transcoding in Kinora with NVIDIA NVENC, Intel Quick Sync, AMD VAAPI or Apple VideoToolbox, plus HDR and Dolby Vision tone mapping.
---

Kinora only transcodes when it has to. At startup it detects each GPU backend and runs a real test encode, so it only uses ones that actually work.

| GPU | Backend | What to pass to Docker |
| --- | --- | --- |
| Intel | Quick Sync / VAAPI | `--device /dev/dri:/dev/dri` |
| AMD | VAAPI | `--device /dev/dri:/dev/dri` |
| NVIDIA | NVENC | `--runtime=nvidia -e NVIDIA_DRIVER_CAPABILITIES=all` |
| Apple | VideoToolbox | Native install (Docker on macOS has no GPU access) |

If nothing works, Kinora falls back to the CPU.

## HDR and Dolby Vision

- HDR10, HLG and Dolby Vision are detected per file.
- Dolby Vision profile 8.1 plays as HDR10 on HDR screens without transcoding.
- For SDR screens, Kinora tone maps with libplacebo on the GPU (Vulkan, Dolby Vision aware), or zscale on the CPU.

:::tip[NVIDIA tone mapping]
GPU tone mapping needs Vulkan inside the container. `NVIDIA_DRIVER_CAPABILITIES=all` includes the `graphics` capability that provides it. Without it, Kinora falls back to CPU tone mapping.
:::

## Check what's happening

**Admin → Dashboard** shows active streams and whether each one is direct play, remux or transcode, and why.
