# Novel Export

## Purpose

Export audited Story Bible data into prose-oriented novel artifacts.

Novel export is a derived manuscript workflow. It must not invent unapproved canon, character motives, world rules, or timeline events.

## Supported Export Targets

- **Outline Export** — chapter and scene outline adapted for prose drafting
- **Scene Prose Draft** — prose generated from approved scene definitions, character profiles, and dialogue
- **Chapter Draft** — compiled chapter-level manuscript draft
- **Manuscript Markdown** — continuous `.md` manuscript for revision or later conversion to DOCX/EPUB

## Export Pipeline

1. Source: `story/chapters/`, `characters/`, `dialogue/`, `locations/`, `memories/`, `knowledge/`
2. Transform: prose drafting rules defined in `docs/export_pipeline.md`
3. Output: files placed in `exports/novel/`

## Rules

- Use approved Story Bible content as the source of truth
- Preserve character voice, knowledge boundaries, and emotional arcs
- Keep unresolved canon gaps as TODOs or questions
- Run a consistency audit before manuscript export
