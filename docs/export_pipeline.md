# Export Pipeline

## Purpose

Describe how Lore Forge transforms Story Bible content into engine-ready outputs.

## Supported Targets

- `exports/godot/`
- `exports/json/`
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

## Export Rules

- Export only audited Story Bible content
- Canon data takes priority over generated derivatives
- If modules conflict, export must stop until consistency issues are resolved
- Export transforms structure; it does not invent missing canon

## Recommended Flow

1. Complete Story Bible modules
2. Run consistency review
3. Resolve critical and high-severity findings
4. Export to the required target format
5. Validate output inside the target engine or toolchain
