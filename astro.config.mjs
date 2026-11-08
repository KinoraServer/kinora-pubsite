// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const REPO = 'https://github.com/LanceAlthouse/kinora';
const DISCORD = 'https://discord.gg/7SpgFvV2xu';
const REDDIT = 'https://www.reddit.com/r/KinoraServer/';

export default defineConfig({
  site: 'https://kinoraserver.com',
  integrations: [
    starlight({
      title: 'Kinora',
      description:
        'Kinora is a free, lightweight, self-hosted media server for movies and TV. One Rust binary, GPU transcoding, HDR and Dolby Vision, Docker and Unraid ready.',
      logo: {
        dark: './src/assets/logo-on-dark.svg',
        light: './src/assets/logo-on-light.svg',
        replacesTitle: true,
      },
      favicon: '/favicon.svg',
      head: [
        { tag: 'link', attrs: { rel: 'icon', href: '/favicon.ico', sizes: '32x32' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#0B1612' } },
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://kinoraserver.com/og.png' } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
        { tag: 'meta', attrs: { property: 'og:image:alt', content: 'Kinora, the lightweight self-hosted media server' } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: 'https://kinoraserver.com/og.png' } },
        { tag: 'link', attrs: { rel: 'alternate', type: 'text/plain', title: 'LLM summary', href: '/llms.txt' } },
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: REPO },
        { icon: 'discord', label: 'Discord', href: DISCORD },
        { icon: 'reddit', label: 'Reddit', href: REDDIT },
      ],
      components: {
        SocialIcons: './src/components/SocialIcons.astro',
      },
      customCss: ['./src/styles/kinora.css'],
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'Introduction', slug: 'docs' },
            { label: 'Install with Docker', slug: 'docs/install/docker' },
            { label: 'Install on Unraid', slug: 'docs/install/unraid' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Hardware transcoding', slug: 'docs/guides/hardware-transcoding' },
            { label: 'Remote access', slug: 'docs/guides/remote-access' },
            { label: 'Themes', slug: 'docs/guides/themes' },
            { label: 'Automatic audio and subtitles', slug: 'docs/guides/auto-tracks' },
            { label: 'Android TV app', slug: 'docs/guides/android-tv' },
          ],
        },
        { label: 'Compare', slug: 'docs/compare' },
        { label: 'FAQ', slug: 'docs/faq' },
      ],
    }),
  ],
});
