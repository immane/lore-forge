import { defineComponent, h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ProjectContent from './components/ProjectContent.vue'
import PageAnchors from './components/PageAnchors.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProjectContent', ProjectContent)
  },
  Layout: defineComponent({
    setup(_props, { slots }) {
      return () => h(DefaultTheme.Layout, null, {
        ...slots,
        'sidebar-nav-after': () => h(PageAnchors),
      })
    },
  }),
} satisfies Theme
