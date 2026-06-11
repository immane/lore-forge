---
aside: false
---

<script setup>
import { computed, watchEffect } from 'vue'
import { data as projects } from '../../projects.data.ts'
import { useData, withBase } from 'vitepress'

const { params, page } = useData()
const name = computed(() => params?.value?.name)
const sectionKey = computed(() => params?.value?.section)
const project = computed(() => name.value ? projects.find(p => p.slug === name.value) : undefined)

const sectionLabels = {
  story: 'Story',
  characters: 'Characters',
  locations: 'Locations',
  knowledge: 'Knowledge',
  dialogue: 'Dialogue',
  quests: 'Quests',
  events: 'Events',
  memories: 'Memories',
  novel: 'Novel',
  screenplay: 'Screenplay',
  godot: 'Godot Export',
  json: 'JSON Export',
}

function getFiles(project, section) {
  if (!project || !section) return []
  if (section === 'novel') return project.exports?.novel || []
  if (section === 'screenplay') return project.exports?.screenplay || []
  if (section === 'godot') return project.exports?.godot || []
  if (section === 'json') return project.exports?.json || []
  return project[section] || []
}

const label = computed(() => sectionLabels[sectionKey?.value] || sectionKey?.value || '')
const files = computed(() => project.value ? getFiles(project.value, sectionKey?.value) : [])

watchEffect(() => {
  if (project.value && label.value) page.value.title = project.value.name + ' / ' + label.value
})

function formatName(n) {
  return n.replace(/_/g, ' ').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
</script>

<div v-if="project && sectionKey">

# {{ project.name }} / {{ label }}

<div v-if="files.length === 0" class="empty-state">
  No files in this section.
</div>

<div v-else>
  <div v-for="file in files" :key="file.name" class="file-block">
    <h3>{{ formatName(file.name) }}</h3>
    <ProjectContent :html="file.html" />
  </div>
</div>

<footer class="section-footer">
  <a :href="withBase('/project/' + project.slug)">&larr; Back to {{ project.name }}</a>
</footer>

</div>

<div v-else>

# Section Not Found

The section was not found.

[Back to project list](/projects)

</div>

<style scoped>
.empty-state { padding: 2em 1em; text-align: center; color: var(--vp-c-text-2); }
.file-block { margin-bottom: 2em; padding: 1em 1.2em; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg-soft); }
.file-block h3 { font-size: 1.1em; margin-top: 0; margin-bottom: 0.8em; color: var(--vp-c-brand); }
.section-footer { margin-top: 3em; padding-top: 1.5em; border-top: 1px solid var(--vp-c-divider); }
</style>
