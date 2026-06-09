# JSON Export

## Purpose

Export Story Bible data as structured JSON for game engines, web applications, or custom tools.

## Supported Export Targets

- **JSON Event Graph** — scene/quest/dialogue graph in JSON
- **Yarn Spinner** — `.yarn` compatible JSON
- **Character Database** — full character profiles as structured JSON

## Export Pipeline

1. Source: all Story Bible modules
2. Transform: template-specific conversion rules (defined in `docs/export_pipeline.md`)
3. Output: files placed in `exports/json/`

## Placeholder

Export rules are defined in the framework-level `docs/export_pipeline.md`. This directory receives the generated output.
