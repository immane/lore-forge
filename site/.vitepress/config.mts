import { defineConfig } from 'vitepress'

const englishSidebar = [
  {
    text: 'Projects',
    items: [
      { text: 'Browse Projects', link: '/projects' },
    ],
  },
]

const chineseSidebar = [
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
          { text: '项目', link: '/zh/projects' },
        ],
        sidebar: chineseSidebar,
      },
    },
  },
})
