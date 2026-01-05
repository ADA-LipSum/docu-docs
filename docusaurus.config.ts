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

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/ADA-LipSum/docu-docs/tree/main/",
          // showLastUpdateTime: true,
          // showLastUpdateAuthor: true,
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

  // 검색 바 플러그인
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
      },
    ],
  ],

  themeConfig: {
    image: "img/social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    // algolia: {
    //   apiKey: "YOUR_API_KEY",
    //   appId: "YOUR_APP_ID",
    //   indexName: "YOUR_INDEX_NAME",
    // },
    navbar: {
      title: "ADA 문서",
      logo: {
        alt: "ADA Logo",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "changelogSidebar",
          position: "left",
          label: "변경 사항",
        },
        {
          type: "docSidebar",
          sidebarId: "meetingSidebar",
          position: "left",
          label: "회의록",
        },
        {
          type: "docSidebar",
          sidebarId: "progressSidebar",
          position: "left",
          label: "진행사항",
        },
        {
          type: "docSidebar",
          sidebarId: "issueSidebar",
          position: "left",
          label: "이슈 및 해결 기록",
        },
        {
          type: "docSidebar",
          sidebarId: "pageSidebar",
          position: "left",
          label: "주요 페이지 소개",
        },
        {
          label: "DB 구조",
          to: "/docs/database/db-structure",
          position: "right",
        },
        {
          label: "규칙",
          to: "/docs/rules/index",
          position: "right",
        },
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
