---
title: Android TV app
description: Install the Kinora Android TV app on an NVIDIA Shield or other Android TV device, with direct play for HDR and Dolby Vision.
---

The Android TV app direct-plays whatever your TV can decode (HEVC, HDR10, HLG, Dolby Vision, PGS subtitles, Dolby and DTS passthrough) and falls back to the server's transcoding when it can't. It's tested on the NVIDIA Shield.

The app isn't on the Play Store yet, so you sideload it.

## Install with adb over Wi-Fi

1. On the TV: **Settings → Device Preferences → About**, then press OK on **Build** seven times to unlock developer options.
2. **Settings → Device Preferences → Developer options**: turn on **Network debugging** and note the IP address.
3. On your computer, install the Android platform tools (`brew install android-platform-tools` on macOS).
4. `adb connect <tv-ip>:5555`, then press **Allow** on the TV.
5. `adb install -r kinora-tv.apk`

## Without a computer

Install **Send Files to TV** on the TV and your phone, send the APK, then open it with a file manager. Allow that file manager to install unknown apps under **Settings → Device Preferences → Security & restrictions**.

## First run

Enter your server's address, like `192.168.1.20:8420` or `https://media.example.com`, and sign in with your Kinora account.
