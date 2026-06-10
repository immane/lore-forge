import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ProjectContent from './components/ProjectContent.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProjectContent', ProjectContent)
  },
} satisfies Theme
