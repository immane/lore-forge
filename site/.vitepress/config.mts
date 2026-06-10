import { defineConfig } from 'vitepress'

const englishSidebar = [
  {
    text: 'About',
    items: [
      { text: 'About Lore Forge', link: '/about' },
      { text: 'User Guide', link: '/guide' },
    ],
  },
  {
    text: 'Projects',
    items: [
      { text: 'Browse Projects', link: '/projects' },
    ],
  },
]

const chineseSidebar = [
  {
    text: '关于',
    items: [
      { text: '关于 Lore Forge', link: '/zh/about' },
      { text: '使用指南', link: '/zh/guide' },
    ],
  },
  {
    text: '项目',
    items: [
      { text: '浏览项目', link: '/zh/projects' },
    ],
  },
]

export default defineConfig({
  base: '/lore-forge/',
  ignoreDeadLinks: true,
  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/immane/lore-forge' }],
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'Lore Forge',
      description: 'Story Bible Reader — Browse and read narrative worlds',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide' },
          { text: 'About', link: '/about' },
          { text: 'Projects', link: '/projects' },
        ],
        sidebar: englishSidebar,
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Lore Forge',
      description: '故事圣经阅读器 — 浏览并阅读叙事世界',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide' },
          { text: '关于', link: '/zh/about' },
          { text: '项目', link: '/zh/projects' },
        ],
        sidebar: chineseSidebar,
      },
    },
  },
})
