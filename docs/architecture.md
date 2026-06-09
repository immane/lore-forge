# Architecture

## Purpose

Define the architectural model of Lore Forge as a Story Bible Engine.

## Core Model

Lore Forge treats story creation as knowledge engineering rather than text generation.

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

The Story Bible is the single source of truth. All downstream narrative artifacts must be derived from it and checked against it.

## Framework Layers

| Layer | Directory | Purpose |
|-------|-----------|---------|
| Bootstrap | `.bootstrap/` | framework creation and upgrade |
| Agents | `agents/` | long-lived AI roles |
| Prompts | `prompts/` | workflow specifications |
| Templates | `templates/` | project scaffolds |
| Docs | `docs/` | framework documentation content |
| Site | `site/` | public VitePress site container |
| Projects | `projects/` | actual story projects |

## Architectural Rules

- Framework content lives outside `projects/`
- Story content lives inside `projects/`
- Agents may only write to their own responsibility boundary
- Consistency review must happen before export
- Public documentation presentation may live in `site/`, but framework documentation content is defined in `docs/`
