import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "ADA 문서",
  tagline: "동아리 개발 문서 허브",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  // 👉 GitHub Pages 배포 URL
  url: "https://ada-lipsum.github.io",
  baseUrl: "/docu-docs/",

  organizationName: "ADA-LipSum",
  projectName: "docu-docs",
  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/ADA-LipSum/docu-docs/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/ADA-LipSum/docu-docs/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "ADA 문서",
      logo: {
        alt: "ADA Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "문서",
        },
        // { to: "/blog", label: "블로그", position: "left" },
        {
          href: "https://github.com/ADA-LipSum/docu-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
