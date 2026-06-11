---
aside: false
---

<script setup>
import { data as projects } from '../projects.data.ts'
import { withBase } from 'vitepress'
</script>

# 浏览项目

<div v-if="projects.length === 0" class="empty-state">

暂无项目。

将项目放入 `projects/active/` 目录下，然后重新构建站点即可。

</div>

<div v-else class="project-grid">
  <a
    v-for="p in projects"
    :key="p.slug"
    :href="withBase('/zh/project/' + encodeURIComponent(p.slug))"
    class="project-card"
  >
    <h2>{{ p.name }}</h2>
    <p class="project-meta">
      <span v-if="p.story.length">{{ p.story.length }} 个故事文件</span>
      <span v-if="p.characters.length">&middot; {{ p.characters.length }} 个角色</span>
      <span v-if="p.locations.length">&middot; {{ p.locations.length }} 个地点</span>
      <span v-if="p.exports.novel.length">&middot; {{ p.exports.novel.length }} 个小说章节</span>
    </p>
  </a>
</div>

<style scoped>
.empty-state {
  padding: 3em 1em;
  text-align: center;
  color: var(--vp-c-text-2);
  font-size: 1.1em;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5em;
  margin-top: 1.5em;
}

.project-card {
  display: block;
  padding: 1.5em;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  text-decoration: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.project-card:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.project-card h2 {
  margin: 0 0 0.5em;
  font-size: 1.2em;
  color: var(--vp-c-text-1);
}

.project-meta {
  margin: 0;
  font-size: 0.85em;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
</style>
