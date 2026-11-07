---
title: Install on Unraid
description: Install the Kinora media server on Unraid with the Docker template, including recommended appdata paths and GPU setup.
---

1. Download the template from the Kinora repo (`packaging/unraid/kinora.xml`) and copy it to `/boot/config/plugins/dockerMan/templates-user/my-kinora.xml`.
2. In the **Docker** tab, click **Add Container** and pick **kinora** from the template list.
3. Check the media path, then click **Apply**.

## Recommended paths

| Container path | Host path |
| --- | --- |
| `/config` | `/mnt/<your-pool>/appdata/kinora` |
| `/transcode` | `/mnt/<your-pool>/transcode/kinora` |
| `/media` | `/mnt/user/<your media share>` |

Put `/config` on a pool path (an SSD), not `/mnt/user/...`. The database is far slower through Unraid's user share layer.

:::caution
Use the pool where your appdata already lives. If you point `/config` at a different, empty pool, Kinora starts with a fresh database.
:::

## GPU

- **Intel / AMD**: pass `/dev/dri` (the template has it as an option).
- **NVIDIA**: install the **Nvidia Driver** plugin, add `--runtime=nvidia` under **Extra Parameters**, and keep `NVIDIA_DRIVER_CAPABILITIES=all`.
