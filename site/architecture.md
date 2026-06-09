# Architecture

Lore Forge is an AI-assisted narrative design framework. It treats story creation as **knowledge engineering** rather than pure text generation.

## Core Model

Lore Forge does not begin from “write me a story.” It begins from structured knowledge.

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

The Story Bible is the single source of truth. Narrative output, dialogue, and exported artifacts must all be derived from it and checked against it.

## Framework Layers

| Layer | Directory | Purpose |
|-------|-----------|---------|
| Bootstrap | `.bootstrap/` | framework creation and upgrade |
| Agents | `agents/` | long-lived AI role definitions |
| Prompts | `prompts/` | workflow protocol definitions |
| Templates | `templates/` | project scaffold system |
| Docs | `docs/` | framework documentation content |
| Site | `site/` | public VitePress site container |
| Projects | `projects/` | actual story projects and Story Bible workspaces |

## Design Principles

- maintainability over feature count
- consistency over short-term creativity spikes
- long-term collaboration over one-shot generation
- knowledge structure before text performance

## Why The Structure Is Split This Way

1. `.bootstrap/` handles framework self-construction
2. `agents/` defines long-lived role boundaries
3. `prompts/` defines workflow protocols for each phase
4. `templates/` defines project initialization skeletons
5. `projects/` holds actual story content
6. `docs/` stores framework documentation content without presentation coupling
7. `site/` is only for public documentation and GitHub Pages delivery

## Rules For Using This Architecture

- use `.bootstrap/` to initialize and upgrade the framework
- use `templates/` to create new project scaffolds
- use `agents/` and `prompts/` together to drive each production phase
- treat `projects/` as the only valid place for story content
- run consistency review before canonization or export

## Where Story Bible Sits In The Architecture

Story Bible is not an auxiliary note. It is the main data layer of the project. At minimum it should contain:

- Vision
- Themes
- Emotional Core
- Characters
- Timeline
- Memory Graph
- Chapter Structure
- Foreshadowing
- Ending Design

These modules jointly determine how characters behave, how plot progresses, how dialogue remains credible, and how exports stay consistent.

## Relationship To The Site

`site/` is only a presentation layer.

- the real framework specification lives in `.bootstrap/`, `agents/`, `prompts/`, `templates/`, and `docs/`
- `site/` organizes those concepts into a readable bilingual documentation site
- the site may explain the framework, but it should not become the source of truth for the framework itself
