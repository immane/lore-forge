---
aside: false
---

<script setup>
import { computed } from 'vue'
import { data as projects } from '../projects.data.ts'
import { useData, withBase } from 'vitepress'

const { params } = useData()
const name = computed(() => params?.value?.name)
const project = computed(() => name.value ? projects.find(p => p.slug === name.value) : undefined)

const sections = [
  { key: 'story', label: 'Story', path: 'story', count: p => p.story.length },
  { key: 'characters', label: 'Characters', path: 'characters', count: p => p.characters.length },
  { key: 'locations', label: 'Locations', path: 'locations', count: p => p.locations.length },
  { key: 'knowledge', label: 'Knowledge', path: 'knowledge', count: p => p.knowledge.length },
  { key: 'dialogue', label: 'Dialogue', path: 'dialogue', count: p => p.dialogue.length },
  { key: 'quests', label: 'Quests', path: 'quests', count: p => p.quests.length },
  { key: 'events', label: 'Events', path: 'events', count: p => p.events.length },
  { key: 'memories', label: 'Memories', path: 'memories', count: p => p.memories.length },
  { key: 'novel', label: 'Novel', path: 'novel', count: p => p.exports.novel.length },
  { key: 'screenplay', label: 'Screenplay', path: 'screenplay', count: p => p.exports.screenplay.length },
  { key: 'godot', label: 'Godot Export', path: 'godot', count: p => p.exports.godot.length },
  { key: 'json', label: 'JSON Export', path: 'json', count: p => p.exports.json.length },
]
</script>

<div v-if="project">

# {{ project.name }}

<section v-if="project.project" class="overview">
  <ProjectContent :html="project.project.html" />
</section>

<h2>Sections</h2>

<div class="section-grid">
  <a
    v-for="s in sections"
    :key="s.key"
    v-show="s.count(project) > 0"
    :href="withBase('/project/' + project.slug + '/' + s.key)"
    class="section-card"
  >
    <h3>{{ s.label }}</h3>
    <p class="count">{{ s.count(project) }} file{{ s.count(project) !== 1 ? 's' : '' }}</p>
  </a>
</div>

<footer class="project-footer">
  <a :href="withBase('/projects')">&larr; Back to projects</a>
</footer>

</div>

<div v-else>

# Project Not Found

The project was not found under `projects/active/`.

[Back to project list](/projects)

</div>

<style scoped>
.overview { margin-bottom: 2em; }
.section-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1em;
  margin-top: 1em;
}
.section-card {
  display: block;
  padding: 1em 1.2em;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  text-decoration: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.section-card:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.section-card h3 { margin: 0 0 0.3em; font-size: 1em; color: var(--vp-c-text-1); }
.section-card .count { margin: 0; font-size: 0.85em; color: var(--vp-c-text-2); }
.project-footer { margin-top: 3em; padding-top: 1.5em; border-top: 1px solid var(--vp-c-divider); }
</style>
