<template>
  <div v-if="anchors.length" class="page-anchors">
    <p class="anchor-title">{{ isZh ? '本页导航' : 'On This Page' }}</p>
    <nav class="anchor-list">
      <a
        v-for="a in anchors"
        :key="a.id"
        :href="'#' + a.id"
        :class="['anchor-link', a.level === 'h3' ? 'anchor-sub' : '']"
      >{{ a.text }}</a>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute, useData } from 'vitepress'

const route = useRoute()
const { lang } = useData()
const isZh = computed(() => lang?.value === 'zh-CN')

const anchors = ref([])
let timer = null

async function collect() {
  anchors.value = []
  await nextTick()
  clearTimeout(timer)
  timer = setTimeout(() => {
    const headings = document.querySelectorAll('.vp-doc h2[id], .vp-doc h3[id]')
    anchors.value = Array.from(headings)
      .map(h => ({
        id: h.id,
        text: h.textContent?.replace(/\s*#\s*$/, '').trim() || '',
        level: h.tagName.toLowerCase(),
      }))
      .filter(a => a.id && a.text)
  }, 400)
}

onMounted(collect)
onUnmounted(() => clearTimeout(timer))

watch(() => route.path, collect)
</script>

<style scoped>
.page-anchors {
  padding: 0 24px 16px;
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 8px;
}
.anchor-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  margin: 0 0 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.anchor-list {
  display: flex;
  flex-direction: column;
}
.anchor-link {
  display: block;
  padding: 2px 0;
  font-size: 13px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  line-height: 1.5;
  border-left: 2px solid transparent;
  padding-left: 10px;
  transition: color 0.2s, border-color 0.2s;
}
.anchor-link:hover {
  color: var(--vp-c-brand);
}
.anchor-link.anchor-sub {
  padding-left: 22px;
  font-size: 12.5px;
}
</style>
