import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import 'dotenv/config';

const config: Config = {
  title: 'The Melio Handbook',
  tagline: 'mc.meliosmp.com',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://handbook.meliosmp.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // customFields: {
  //   // Put your custom environment here
  //   umamiWebsiteId: process.env.UMAMI_WEBSITE_ID,
  // },

  scripts: [
    {
      src: '/scripts/script.js',
      async: true,
      defer: true,
      "data-website-id": process.env.UMAMI_WEBSITE_ID,
      // "data-host-url": process.env.UMAMI_HOST_URL || undefined
    }
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'melio', // Usually your GitHub org/user name.
  projectName: 'melio-handbook', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins: [require.resolve('docusaurus-lunr-search')],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'Melio Logo',
        src: 'img/melio.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Handbook',
        },
        {to: 'https://www.meliosmp.com', label: 'Website', position: 'left'},
        {to: 'https://discord.gg/3zNhq8H6ek', label: 'Apply via Discord', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Jump To',
          items: [
            {
              label: 'Introduction',
              to: '/docs/',
            },
            {
              label: 'Getting Started',
              to: '/docs/getting-started'
            },
            {
              label: 'FAQ',
              to: '/docs/faq'
            }
          ],
        },
        {
          title: 'External Links',
          items: [
            {
              label: 'Website',
              href: 'https://www.meliosmp.com',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/3zNhq8H6ek',
            },
            {
              label: 'Store Page',
              href: 'https://melio.tebex.io',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Vote Links',
              href: 'https://meliosmp.com/vote'
            },
            {
              label: 'Ban Appeal',
              href: 'https://meliosmp.com/ban-appeal'
            },
          ]
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Contact Us',
              to: 'https://meliosmp.com/contact',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Melio. Melio is not affiliated with Minecraft, Mojang, and/or Microsoft.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
