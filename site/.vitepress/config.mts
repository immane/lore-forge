import { readdirSync, existsSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { defineConfig } from 'vitepress'

function getProjectSlugs(): string[] {
  const root = resolve(process.cwd(), 'projects/active')
  if (!existsSync(root)) return []
  return readdirSync(root)
    .filter(e => {
      try { return statSync(join(root, e)).isDirectory() }
      catch { return false }
    })
    .map(name => name.trim().replace(/\s+/g, '-').replace(/[\/#?[\]]/g, ''))
}

const sectionKeys = ['story', 'characters', 'locations', 'knowledge', 'dialogue', 'quests', 'events', 'memories', 'novel', 'screenplay', 'godot', 'json']

const sectionLabelsEn = ['Story', 'Characters', 'Locations', 'Knowledge', 'Dialogue', 'Quests', 'Events', 'Memories', 'Novel', 'Screenplay', 'Godot Export', 'JSON Export']

function projectSidebarEn(slug: string) {
  return [
    {
      text: 'Project',
      items: [
        { text: 'Overview', link: '/project/' + slug },
        ...sectionLabelsEn.map((label, i) => ({
          text: label,
          link: '/project/' + slug + '/' + sectionKeys[i],
        })),
      ],
    },
    { text: 'All Projects', link: '/projects' },
  ]
}

function projectSidebarZh(slug: string) {
  const zhLabels = ['故事', '角色', '地点', '知识', '对话', '任务', '事件', '记忆', '小说', '剧本', 'Godot 导出', 'JSON 导出']
  return [
    {
      text: '项目',
      items: [
        { text: '概述', link: '/zh/project/' + slug },
        ...zhLabels.map((label, i) => ({
          text: label,
          link: '/zh/project/' + slug + '/' + sectionKeys[i],
        })),
      ],
    },
    { text: '全部项目', link: '/zh/projects' },
  ]
}

const englishSidebar = [
  {
    text: 'About',
    items: [
      { text: 'About Lore Forge', link: '/about' },
      { text: 'User Guide', link: '/guide' },
      { text: 'Requirements', link: '/requirements' },
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
      { text: '运行需求', link: '/zh/requirements' },
    ],
  },
  {
    text: '项目',
    items: [
      { text: '浏览项目', link: '/zh/projects' },
    ],
  },
]

const base = process.env.VITEPRESS_BASE || '/'

const slugs = getProjectSlugs()
const enProjectSidebars: Record<string, any> = {}
const zhProjectSidebars: Record<string, any> = {}
for (const slug of slugs) {
  enProjectSidebars['/project/' + slug] = projectSidebarEn(slug)
  zhProjectSidebars['/project/' + slug] = projectSidebarZh(slug)
}

export default defineConfig({
  base,
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
          { text: 'Requirements', link: '/requirements' },
          { text: 'About', link: '/about' },
          { text: 'Projects', link: '/projects' },
        ],
        sidebar: {
          ...enProjectSidebars,
          '/': englishSidebar,
        },
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
          { text: '运行需求', link: '/zh/requirements' },
          { text: '关于', link: '/zh/about' },
          { text: '项目', link: '/zh/projects' },
        ],
        sidebar: {
          ...zhProjectSidebars,
          '/': chineseSidebar,
        },
      },
    },
  },
})
