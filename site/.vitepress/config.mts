import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Lore Forge',
  description: 'AI 辅助叙事设计框架',
  base: '/lore-forge/',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '开始使用', link: '/getting-started' },
    ],
    sidebar: [
      {
        text: '框架',
        items: [
          { text: '开始使用', link: '/getting-started' },
          { text: '架构', link: '/architecture' },
          { text: '工作流', link: '/workflow' },
          { text: '项目结构', link: '/project-structure' },
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
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/immane/lore-forge' },
    ],
  },
})
