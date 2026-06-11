import { readdirSync, existsSync, statSync } from 'node:fs'
import { resolve } from 'node:path'

export default {
  paths() {
    const projectsRoot = resolve(process.cwd(), 'projects/active')
    if (!existsSync(projectsRoot)) return []

    return readdirSync(projectsRoot)
      .filter(e => {
        try { return statSync(resolve(projectsRoot, e)).isDirectory() }
        catch { return false }
      })
      .map(name => ({
        params: {
          name: name.trim().replace(/\s+/g, '-').replace(/[\/#?[\]]/g, ''),
        },
      }))
  },
}
