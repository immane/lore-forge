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

function dirExists(root: string, segment: string): boolean {
  try {
    const d = join(root, segment)
    return existsSync(d) && statSync(d).isDirectory() &&
      readdirSync(d).some(f => f.endsWith('.md'))
  } catch { return false }
}

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
      const base = join(projectsRoot, dir)
      for (const section of sections) {
        const subDir = section === 'novel' ? 'exports/novel' :
                       section === 'screenplay' ? 'exports/screenplay' :
                       section === 'godot' ? 'exports/godot' :
                       section === 'json' ? 'exports/json' :
                       section
        if (dirExists(base, subDir)) {
          paths.push({ params: { name: slugify(dir), section } })
        }
      }
    }

    return paths
  },
}
