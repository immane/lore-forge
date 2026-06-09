# Godot Export

## Purpose

Export Story Bible data in formats consumable by Godot Engine projects.

## Supported Export Targets

- **Dialogic** — dialogue timeline JSON for Dialogic 2 plugin
- **Custom Resource** — `.tres` / `.json` resource files for custom Godot narrative systems

## Export Pipeline

1. Source: `story/`, `characters/`, `dialogue/`, `quests/`
2. Transform: template-specific conversion rules (defined in `docs/export_pipeline.md`)
3. Output: files placed in `exports/godot/`

## Placeholder

Export rules are defined in the framework-level `docs/export_pipeline.md`. This directory receives the generated output.
