---
aside: false
---

<script setup>
import { data as projects } from '../projects.data.ts'
import { useRoute } from 'vitepress'

const route = useRoute()
const name = route?.params?.name
const project = name ? projects.find(p => p.slug === name) : undefined

function formatName(n) {
  return n.replace(/_/g, ' ').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
</script>

<div v-if="project">

# {{ project.name }}

<section v-if="project.project" class="content-section">
  <ProjectContent :html="project.project.html" />
</section>

<section v-if="project.story.length" class="content-section">
  <h2>Story</h2>
  <div v-for="file in project.story" :key="file.name" class="file-block">
    <h3>{{ formatName(file.name) }}</h3>
    <ProjectContent :html="file.html" />
  </div>
</section>

<section v-if="project.characters.length" class="content-section">
  <h2>Characters</h2>
  <div v-for="file in project.characters" :key="file.name" class="file-block">
    <h3>{{ formatName(file.name) }}</h3>
    <ProjectContent :html="file.html" />
  </div>
</section>

<section v-if="project.locations.length" class="content-section">
  <h2>Locations</h2>
  <div v-for="file in project.locations" :key="file.name" class="file-block">
    <h3>{{ formatName(file.name) }}</h3>
    <ProjectContent :html="file.html" />
  </div>
</section>

<section v-if="project.knowledge.length" class="content-section">
  <h2>Knowledge</h2>
  <div v-for="file in project.knowledge" :key="file.name" class="file-block">
    <h3>{{ formatName(file.name) }}</h3>
    <ProjectContent :html="file.html" />
  </div>
</section>

<section v-if="project.dialogue.length" class="content-section">
  <h2>Dialogue</h2>
  <div v-for="file in project.dialogue" :key="file.name" class="file-block">
    <h3>{{ formatName(file.name) }}</h3>
    <ProjectContent :html="file.html" />
  </div>
</section>

<section v-if="project.quests.length" class="content-section">
  <h2>Quests</h2>
  <div v-for="file in project.quests" :key="file.name" class="file-block">
    <h3>{{ formatName(file.name) }}</h3>
    <ProjectContent :html="file.html" />
  </div>
</section>

<section v-if="project.events.length" class="content-section">
  <h2>Events</h2>
  <div v-for="file in project.events" :key="file.name" class="file-block">
    <h3>{{ formatName(file.name) }}</h3>
    <ProjectContent :html="file.html" />
  </div>
</section>

<section v-if="project.memories.length" class="content-section">
  <h2>Memories</h2>
  <div v-for="file in project.memories" :key="file.name" class="file-block">
    <h3>{{ formatName(file.name) }}</h3>
    <ProjectContent :html="file.html" />
  </div>
</section>

<section v-if="project.exports.novel.length" class="content-section">
  <h2>Novel</h2>
  <div v-for="file in project.exports.novel" :key="file.name" class="file-block">
    <h3>{{ formatName(file.name) }}</h3>
    <ProjectContent :html="file.html" />
  </div>
</section>

<section v-if="project.exports.screenplay.length" class="content-section">
  <h2>Screenplay</h2>
  <div v-for="file in project.exports.screenplay" :key="file.name" class="file-block">
    <h3>{{ formatName(file.name) }}</h3>
    <ProjectContent :html="file.html" />
  </div>
</section>

<section v-if="project.exports.godot.length" class="content-section">
  <h2>Godot Export</h2>
  <div v-for="file in project.exports.godot" :key="file.name" class="file-block">
    <h3>{{ formatName(file.name) }}</h3>
    <ProjectContent :html="file.html" />
  </div>
</section>

<section v-if="project.exports.json.length" class="content-section">
  <h2>JSON Export</h2>
  <div v-for="file in project.exports.json" :key="file.name" class="file-block">
    <h3>{{ formatName(file.name) }}</h3>
    <ProjectContent :html="file.html" />
  </div>
</section>

<footer class="project-footer">
  <a href="/lore-forge/projects">&larr; Back to projects</a>
</footer>

</div>

<div v-else>

# Project Not Found

The project `{{ name || '' }}` was not found under `projects/active/`.

[Back to project list](/lore-forge/projects)

</div>

<style scoped>
.content-section { margin-top: 2em; padding-top: 1em; border-top: 1px solid var(--vp-c-divider); }
.content-section h2 { font-size: 1.5em; margin-bottom: 0.8em; }
.file-block { margin-bottom: 2em; padding: 1em 1.2em; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg-soft); }
.file-block h3 { font-size: 1.1em; margin-top: 0; margin-bottom: 0.8em; color: var(--vp-c-brand); }
.project-footer { margin-top: 3em; padding-top: 1.5em; border-top: 1px solid var(--vp-c-divider); }
</style>
