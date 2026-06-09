import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Lore Forge',
  description: 'AI-Assisted Narrative Design Framework',
  base: '/lore-forge/',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: 'Framework',
        items: [
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
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],
  },
})
