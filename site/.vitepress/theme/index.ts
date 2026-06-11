import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ProjectContent from './components/ProjectContent.vue'
import PageAnchors from './components/PageAnchors.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProjectContent', ProjectContent)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'sidebar-nav-after': () => h(PageAnchors),
    })
  },
} satisfies Theme
