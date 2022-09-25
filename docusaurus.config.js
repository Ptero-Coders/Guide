// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ptero Manager',
  tagline: 'Manage You Pterodactyl Panel From Discord',
  url: 'http://localhost:3000',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Ptero Manager',
        logo: {
          alt: 'Ptero Manager',
          src: 'img/ptero-manager.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://pterodactylmarket.com/resource/478',
            label: 'Source Code',
            position: 'right',
          },
        ],
        colorMode: {
          disableSwitch: true,
          defaultMode: "dark",
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Source',
                href: 'https://pterodactylmarket.com/resource/478',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/r5kbMdXVAf',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ptero Manager, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
      },
    }),
};

module.exports = config;
