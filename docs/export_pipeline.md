# Export Pipeline

## Purpose

Describe how Lore Forge transforms Story Bible content into engine-ready, manuscript-ready, or production-reference outputs.

## Supported Targets

- `exports/godot/`
- `exports/json/`
- `exports/novel/`
- `exports/screenplay/`

## Input Sources

The export pipeline reads from:

- `story/`
- `characters/`
- `memories/`
- `locations/`
- `dialogue/`
- `quests/` or `events/`
- `knowledge/`

## Output Types

### Godot

- Dialogic timelines
- cutscene data
- custom narrative resources

### JSON

- JSON event graph
- character databases
- structured dialogue and scene exports

### Screenplay

- screenplay format for review and production reference
- cutscene definitions
- voice-over reference scripts

### Novel

- chapter-by-chapter prose drafts
- scene prose compiled from approved scene definitions and dialogue
- manuscript Markdown for revision, editing, or later conversion to DOCX/EPUB
- optional outline-only export for authors who want structure without generated prose

## Export Rules

- Export only audited Story Bible content
- Canon data takes priority over generated derivatives
- If modules conflict, export must stop until consistency issues are resolved
- Export transforms structure; it does not invent missing canon
- Novel export is a derived manuscript pass, not permission to invent unapproved plot, character motives, or world rules

## Recommended Flow

1. Complete Story Bible modules
2. Run consistency review
3. Resolve critical and high-severity findings
4. Export to the required target format
5. Validate output inside the target engine or toolchain
