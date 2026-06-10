<script setup lang="ts">
defineProps<{
  html: string
}>()
</script>

<template>
  <div class="project-content" v-html="html" />
</template>

<style scoped>
.project-content {
  line-height: 1.7;
}

.project-content :deep(h1) {
  font-size: 1.8em;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 0.3em;
}

.project-content :deep(h2) {
  font-size: 1.4em;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 0.3em;
}

.project-content :deep(h3) {
  font-size: 1.2em;
  margin-top: 1.2em;
  margin-bottom: 0.4em;
}

.project-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1em 0;
  font-size: 0.9em;
}

.project-content :deep(th),
.project-content :deep(td) {
  border: 1px solid var(--vp-c-divider);
  padding: 8px 12px;
  text-align: left;
}

.project-content :deep(th) {
  background: var(--vp-c-bg-soft);
  font-weight: 600;
}

.project-content :deep(blockquote) {
  border-left: 3px solid var(--vp-c-brand);
  padding-left: 1em;
  color: var(--vp-c-text-2);
  margin: 1em 0;
}

.project-content :deep(code) {
  background: var(--vp-c-bg-soft);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
}

.project-content :deep(pre) {
  background: var(--vp-c-bg-soft);
  padding: 1em;
  border-radius: 8px;
  overflow-x: auto;
}

.project-content :deep(pre code) {
  background: none;
  padding: 0;
}

.project-content :deep(ul),
.project-content :deep(ol) {
  padding-left: 1.5em;
  margin: 0.5em 0;
}

.project-content :deep(li) {
  margin: 0.25em 0;
}

.project-content :deep(p) {
  margin: 0.8em 0;
}
</style>
