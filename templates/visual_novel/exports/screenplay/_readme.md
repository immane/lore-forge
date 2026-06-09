# Screenplay Export

## Purpose

Export Story Bible data in screenplay and script formats.

## Supported Export Targets

- **Screenplay** — industry-standard `.fountain` screenplay format
- **Cutscene Script** — formatted cutscene definitions with camera/stage directions
- **Tabletop Module** — campaign book format for TTRPG use

## Export Pipeline

1. Source: `story/chapters/`, `dialogue/`, `locations/`
2. Transform: template-specific conversion rules (defined in `docs/export_pipeline.md`)
3. Output: files placed in `exports/screenplay/`

## Placeholder

Export rules are defined in the framework-level `docs/export_pipeline.md`. This directory receives the generated output.
