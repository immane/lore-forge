import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const MarkdownIt = require('markdown-it')
const md = new MarkdownIt({ html: true, linkify: true })

function headingSlug(text: string): string {
  return text.trim().replace(/\s+/g, '-').replace(/[\/#?[\]]/g, '')
}

md.renderer.rules.heading_open = function (tokens: any, idx: number) {
  const token = tokens[idx]
  const content = tokens[idx + 1]
  let slug = ''
  if (content && content.type === 'inline') {
    slug = headingSlug(content.content)
  }
  return `<${token.tag} id="${slug}">`
}

export interface FileInfo {
  name: string
  path: string
  content: string
  html: string
}

export interface ExportsGroup {
  novel: FileInfo[]
  screenplay: FileInfo[]
  json: FileInfo[]
  godot: FileInfo[]
}

export interface ProjectData {
  name: string
  slug: string
  project: FileInfo | null
  story: FileInfo[]
  characters: FileInfo[]
  locations: FileInfo[]
  knowledge: FileInfo[]
  dialogue: FileInfo[]
  quests: FileInfo[]
  events: FileInfo[]
  memories: FileInfo[]
  exports: ExportsGroup
  hasContent: boolean
}

export default {
  load(): ProjectData[] {
    const projectsRoot = resolve(process.cwd(), 'projects/active')
    if (!existsSync(projectsRoot)) return []

    const entries = readdirSync(projectsRoot)
    return entries
      .filter(e => {
        try { return statSync(join(projectsRoot, e)).isDirectory() }
        catch { return false }
      })
      .map(name => readProject(projectsRoot, name))
      .filter(p => p.hasContent)
  }
}

function slugify(name: string): string {
  return name.trim().replace(/\s+/g, '-').replace(/[\/#?[\]]/g, '')
}

function readProject(root: string, name: string): ProjectData {
  const base = join(root, name)

  const project = readFileMd(join(base, 'project.md'))
  const storyFiles = readDirMd(join(base, 'story'))
  const characterFiles = readDirMd(join(base, 'characters'))
  const locationFiles = readDirMd(join(base, 'locations'))
  const knowledgeFiles = readDirMd(join(base, 'knowledge'))
  const dialogueFiles = readDirMd(join(base, 'dialogue'))
  const questFiles = readDirMd(join(base, 'quests'))
  const eventFiles = readDirMd(join(base, 'events'))
  const memoryFiles = readDirMd(join(base, 'memories'))

  const novelFiles = readDirMd(join(base, 'exports/novel'))
  const screenplayFiles = readDirMd(join(base, 'exports/screenplay'))
  const jsonExportFiles = readDirMd(join(base, 'exports/json'))
  const godotFiles = readDirMd(join(base, 'exports/godot'))

  const hasContent = project !== null ||
    storyFiles.length > 0 || characterFiles.length > 0 ||
    locationFiles.length > 0 || knowledgeFiles.length > 0 ||
    dialogueFiles.length > 0 || questFiles.length > 0 ||
    eventFiles.length > 0 || memoryFiles.length > 0 ||
    novelFiles.length > 0 || screenplayFiles.length > 0 ||
    jsonExportFiles.length > 0 || godotFiles.length > 0

  return {
    name,
    slug: slugify(name),
    project,
    story: storyFiles,
    characters: characterFiles,
    locations: locationFiles,
    knowledge: knowledgeFiles,
    dialogue: dialogueFiles,
    quests: questFiles,
    events: eventFiles,
    memories: memoryFiles,
    exports: {
      novel: novelFiles,
      screenplay: screenplayFiles,
      json: jsonExportFiles,
      godot: godotFiles,
    },
    hasContent,
  }
}

function readFileMd(filePath: string): FileInfo | null {
  if (!existsSync(filePath)) return null
  try {
    const content = readFileSync(filePath, 'utf-8')
    const html = md.render(content)
    return {
      name: filePath.split('/').pop()!.replace(/\.md$/, ''),
      path: filePath,
      content,
      html,
    }
  } catch {
    return null
  }
}

function readDirMd(dir: string): FileInfo[] {
  if (!existsSync(dir)) return []
  try {
    return readdirSync(dir)
      .filter(f => f.endsWith('.md'))
      .map(f => {
        const filePath = join(dir, f)
        const content = readFileSync(filePath, 'utf-8')
        const html = md.render(content)
        return {
          name: f.replace(/\.md$/, ''),
          path: filePath,
          content,
          html,
        }
      })
  } catch {
    return []
  }
}
