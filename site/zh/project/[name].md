---
aside: false
---

<script setup>
import { computed, watchEffect } from 'vue'
import { data as projects } from '../../projects.data.ts'
import { useData, withBase } from 'vitepress'

const { params, page } = useData()
const name = computed(() => params?.value?.name)
const project = computed(() => name.value ? projects.find(p => p.slug === name.value) : undefined)

watchEffect(() => {
  if (project.value) page.value.title = project.value.name
})

const sections = [
  { key: 'story', label: '故事', path: 'story', count: p => p.story.length },
  { key: 'characters', label: '角色', path: 'characters', count: p => p.characters.length },
  { key: 'locations', label: '地点', path: 'locations', count: p => p.locations.length },
  { key: 'knowledge', label: '知识', path: 'knowledge', count: p => p.knowledge.length },
  { key: 'dialogue', label: '对话', path: 'dialogue', count: p => p.dialogue.length },
  { key: 'quests', label: '任务', path: 'quests', count: p => p.quests.length },
  { key: 'events', label: '事件', path: 'events', count: p => p.events.length },
  { key: 'memories', label: '记忆', path: 'memories', count: p => p.memories.length },
  { key: 'novel', label: '小说', path: 'novel', count: p => p.exports.novel.length },
  { key: 'screenplay', label: '剧本', path: 'screenplay', count: p => p.exports.screenplay.length },
  { key: 'godot', label: 'Godot 导出', path: 'godot', count: p => p.exports.godot.length },
  { key: 'json', label: 'JSON 导出', path: 'json', count: p => p.exports.json.length },
]
</script>

<div v-if="project">

# {{ project.name }}

<section v-if="project.project" class="overview">
  <ProjectContent :html="project.project.html" />
</section>

<h2>章节</h2>

<div class="section-grid">
  <a
    v-for="s in sections"
    :key="s.key"
    v-show="s.count(project) > 0"
    :href="withBase('/zh/project/' + project.slug + '/' + s.key)"
    class="section-card"
  >
    <h3>{{ s.label }}</h3>
    <p class="count">{{ s.count(project) }} 个文件</p>
  </a>
</div>

<footer class="project-footer">
  <a :href="withBase('/zh/projects')">&larr; 返回项目列表</a>
</footer>

</div>

<div v-else>

# 项目未找到

在 `projects/active/` 下未找到项目。

[返回项目列表](/zh/projects)

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
