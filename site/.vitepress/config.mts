import { defineConfig } from 'vitepress'

const englishSidebar = [
  {
    text: 'Framework',
    items: [
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Architecture', link: '/architecture' },
      { text: 'Workflow', link: '/workflow' },
      { text: 'Project Structure', link: '/project-structure' },
    ],
  },
  {
    text: 'Agents',
    items: [
      { text: 'Lore Architect', link: '/agents/lore-architect' },
      { text: 'Character Therapist', link: '/agents/character-therapist' },
      { text: 'Narrative Designer', link: '/agents/narrative-designer' },
      { text: 'Dialogue Writer', link: '/agents/dialogue-writer' },
      { text: 'Lore Auditor', link: '/agents/lore-auditor' },
    ],
  },
  {
    text: 'Prompts',
    items: [
      { text: 'Interview', link: '/prompts/interview' },
      { text: 'Generate Character', link: '/prompts/generate-character' },
      { text: 'Generate Scene', link: '/prompts/generate-scene' },
      { text: 'Generate Dialogue', link: '/prompts/generate-dialogue' },
      { text: 'Chapter Planning', link: '/prompts/chapter-planning' },
      { text: 'Review Consistency', link: '/prompts/review-consistency' },
    ],
  },
]

const chineseSidebar = [
  {
    text: '框架',
    items: [
      { text: '开始使用', link: '/zh/getting-started' },
      { text: '架构', link: '/zh/architecture' },
      { text: '工作流', link: '/zh/workflow' },
      { text: '项目结构', link: '/zh/project-structure' },
    ],
  },
  {
    text: 'Agents',
    items: [
      { text: 'Lore Architect', link: '/zh/agents/lore-architect' },
      { text: 'Character Therapist', link: '/zh/agents/character-therapist' },
      { text: 'Narrative Designer', link: '/zh/agents/narrative-designer' },
      { text: 'Dialogue Writer', link: '/zh/agents/dialogue-writer' },
      { text: 'Lore Auditor', link: '/zh/agents/lore-auditor' },
    ],
  },
  {
    text: 'Prompts',
    items: [
      { text: 'Interview', link: '/zh/prompts/interview' },
      { text: 'Generate Character', link: '/zh/prompts/generate-character' },
      { text: 'Generate Scene', link: '/zh/prompts/generate-scene' },
      { text: 'Generate Dialogue', link: '/zh/prompts/generate-dialogue' },
      { text: 'Chapter Planning', link: '/zh/prompts/chapter-planning' },
      { text: 'Review Consistency', link: '/zh/prompts/review-consistency' },
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
      description: 'AI-assisted narrative design framework',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Getting Started', link: '/getting-started' },
        ],
        sidebar: englishSidebar,
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Lore Forge',
      description: 'AI 辅助叙事设计框架',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '开始使用', link: '/zh/getting-started' },
        ],
        sidebar: chineseSidebar,
      },
    },
  },
})
