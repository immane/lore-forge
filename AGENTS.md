# AGENTS.md

## Project Purpose

Lore Forge is an AI-assisted narrative design framework. It helps creators build and maintain a living Story Bible through structured interviews, knowledge management, character design, narrative planning, dialogue creation, and consistency review.

Lore Forge is not a story generator. Treat it as a Story Bible Engine: the framework exists to make narrative knowledge durable, inspectable, reusable, and safe to update across long-running projects.

## Core Principle

The Story Bible is the single source of truth.

All downstream artifacts must be derived from approved Story Bible content and checked against it before canonization or export. When required information is missing, ask focused questions or create an explicit TODO instead of inventing canon.

## Repository Map

| Path | Purpose |
| --- | --- |
| `.bootstrap/` | Framework construction, upgrade, project creation, and interview bootstrap instructions |
| `agents/` | Long-lived specialized AI role definitions |
| `prompts/` | Workflow prompts for recurring Lore Forge tasks |
| `templates/` | Project scaffolds for narrative RPG, visual novel, and interactive fiction projects |
| `docs/` | Canonical framework documentation content |
| `site/` | VitePress documentation site and public presentation layer |
| `projects/` | User story projects and Story Bible content |
| `opencode.json` | OpenCode-specific command and instruction configuration |

Framework content belongs outside `projects/`. Story content belongs inside `projects/`.

## Agent Responsibilities

Use the existing agent definitions before doing specialized narrative work:

| Agent | Definition | Responsibility |
| --- | --- | --- |
| Lore Architect | `agents/lore-architect/agent.md` | Worldbuilding, knowledge layer, canon foundations |
| Character Therapist | `agents/character-therapist/agent.md` | Character psychology, wounds, desires, fears, voice, growth arcs |
| Narrative Designer | `agents/narrative-designer/agent.md` | Timeline, memory graph, chapters, routes, branches, scenes, pacing |
| Dialogue Writer | `agents/dialogue-writer/agent.md` | Dialogue, subtext, character voice execution |
| Lore Auditor | `agents/lore-auditor/agent.md` | Cross-module consistency review and contradiction reporting |

Agents should read upstream modules and write only inside their responsibility boundary. Cross-domain changes should be delegated or clearly called out.

## Standard Workflows

Use the workflow prompts in `prompts/` for repeatable work:

| Task | Prompt |
| --- | --- |
| Concept discovery interview | `prompts/interview.md` |
| Character creation | `prompts/generate_character.md` |
| Chapter or route planning | `prompts/chapter_planning.md` |
| Scene generation | `prompts/generate_scene.md` |
| Dialogue generation | `prompts/generate_dialogue.md` |
| Consistency review | `prompts/review_consistency.md` |

For framework setup, verification, and project creation, read the relevant files in `.bootstrap/` first.

## Editing Rules

- Preserve Markdown-first, AI-readable structure.
- Prefer stable headings, tables, explicit file paths, and short operational sections.
- Keep terminology consistent with `docs/architecture.md`, `docs/workflow.md`, `docs/project_structure.md`, and `docs/style_guide.md`.
- Do not hide important rules inside long prose paragraphs.
- Do not overwrite user-authored story canon unless explicitly asked.
- Do not move framework files into `projects/`.
- Do not store project-specific story content in `docs/`, `site/`, `agents/`, `prompts/`, or `templates/`.
- When updating mirrored documentation, keep `docs/`, `site/`, and localized `site/zh/` pages consistent where applicable.

## Project Creation Rules

New story projects should be created under `projects/active/<project-name>/` unless the user specifies another location.

Use the closest scaffold in `templates/`:

| Genre | Template |
| --- | --- |
| Narrative RPG | `templates/narrative_rpg/` |
| Visual Novel | `templates/visual_novel/` |
| Interactive Fiction | `templates/interactive_fiction/` |

If required project inputs are missing, ask for them before creating files. Useful required inputs include project name, genre, themes, target platform, and target length.

## Consistency Rules

Before canonizing or exporting substantial story content, check for:

- Timeline contradictions
- Character knowledge leaks
- Terminology drift
- World rule violations
- Conflicting relationship states
- Unresolved canon conflicts
- Dialogue that breaks established voice signatures

Report audit findings by severity with file references.

## Export Targets

Supported export targets include:

- `exports/json/` for structured event graphs, character databases, dialogue, and scene data
- `exports/godot/` for Dialogic timelines and Godot-compatible narrative resources
- `exports/novel/` for outline exports, chapter prose drafts, scene prose, and manuscript Markdown
- `exports/screenplay/` for Fountain screenplay, cutscene, and voice-over reference scripts

Novel export must remain derived from the approved Story Bible, scene plan, character profiles, dialogue, and audit results. Do not invent unapproved canon while drafting prose.

## Build And Verification

This repository is mostly Markdown and documentation. There may be no package manifest in a fresh checkout.

For documentation site verification, use the VitePress workflow implied by `.github/workflows/deploy.yml`:

```bash
npm run docs:build
```

If `package.json` is absent, do not create dependency files unless the user is specifically working on the documentation site or asks for a build setup.

For Markdown-only changes, verify by reviewing the affected files and checking links/paths manually.

## Platform Compatibility

This file is the primary cross-platform instruction file for Codex, OpenCode, GitHub Copilot agents, Cursor-like agents, Gemini-style agents, and other coding or document agents that support repository instructions.

Tool-specific files may exist as thin adapters. They should point back to this file instead of duplicating full policy.
