import { readdirSync, existsSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'

function slugify(name: string): string {
  return name.trim().replace(/\s+/g, '-').replace(/[\/#?[\]]/g, '')
}

const sections = [
  'story', 'characters', 'locations', 'knowledge',
  'dialogue', 'quests', 'events', 'memories',
  'novel', 'screenplay', 'godot', 'json',
]

export default {
  paths() {
    const projectsRoot = resolve(process.cwd(), 'projects/active')
    if (!existsSync(projectsRoot)) return []

    const dirs = readdirSync(projectsRoot)
      .filter(e => {
        try { return statSync(join(projectsRoot, e)).isDirectory() }
        catch { return false }
      })

    const paths: { params: { name: string; section: string } }[] = []

    for (const dir of dirs) {
      for (const section of sections) {
        paths.push({ params: { name: slugify(dir), section } })
      }
    }

    return paths
  },
}
