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
          sidebarId: "projectIntroSidebar",
          position: "left",
          label: "프로젝트 개요",
        },
        {
          type: "docSidebar",
          sidebarId: "meetingSidebar",
          position: "left",
          label: "회의록",
        },
        {
          type: "docSidebar",
          sidebarId: "developEnvironmentSidebar",
          position: "left",
          label: "개발 환경",
        },
        {
          type: "docSidebar",
          sidebarId: "technicalDecisionSidebar",
          position: "left",
          label: "기술적 결정 기록",
        },
        {
          type: "docSidebar",
          sidebarId: "mainFeaturesSidebar",
          position: "left",
          label: "주요 화면 및 기능 개요",
        },
        {
          label: "DB 구조",
          to: "/docs/database/db-structure",
          position: "right",
        },
        {
          type: "doc",
          docId: "rules/rules",
          label: "규칙",
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
