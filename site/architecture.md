# Architecture

Lore Forge is an AI-assisted narrative design framework. It treats story creation as **knowledge engineering** rather than text generation.

## Core Model

Lore Forge does not start from prose generation. It starts from structured knowledge.

```text
Idea
  -> Interview
  -> Story Bible
  -> Character Design
  -> Timeline
  -> Memory Graph
  -> Narrative Design
  -> Dialogue
  -> Export
```

The Story Bible is the single source of truth. Narrative output is generated from the Story Bible, audited against it, and updated back into it when needed.

## Directory Structure

See [Project Structure](/project-structure) for the complete directory tree.

## Design Principles

- **Maintainability > Feature Count**
- **Consistency > Creativity**
- **Long-term Collaboration > One-shot Generation**

## Key Components

| Layer | Directory | Purpose |
|-------|-----------|---------|
| Bootstrap | `.bootstrap/` | Framework self-construction |
| Agents | `agents/` | 5 long-lived AI agents with defined boundaries |
| Prompts | `prompts/` | 6 workflow templates for agent invocation |
| Templates | `templates/` | 3 genre project scaffolds |
| Projects | `projects/` | Isolated user workspaces |
| Docs | `docs/` | Framework documentation content |
| Site | `site/` | VitePress container for GitHub Pages |

## How To Use The Architecture

- Use `.bootstrap/` to initialize or upgrade the framework
- Use `templates/` to create new project scaffolds
- Use `agents/` and `prompts/` together to drive each phase of production
- Treat `projects/` as the only place where story content lives
- Use the audit layer before canonizing or exporting any material
