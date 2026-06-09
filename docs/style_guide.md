# Style Guide

## Purpose

Define how Lore Forge framework documents should be written so that they remain readable by humans and reliably usable by AI agents.

## Writing Principles

- Prefer structured sections over freeform prose
- Use stable headings and predictable field names
- Keep terminology consistent across framework modules
- Write for maintainability first, elegance second

## Formatting Rules

- Use Markdown
- Prefer short sections with clear headings
- Use bullet lists for responsibilities, inputs, outputs, and constraints
- Use tables when comparing agents, prompts, phases, or templates
- Keep examples concrete and reusable

## AI Compatibility Rules

- Avoid ambiguous labels
- Use explicit file paths when referencing framework modules
- Keep one concept per section where possible
- Do not hide critical rules inside long narrative paragraphs

## Naming Conventions

- Framework module names follow the architect specification
- Prompt source files use underscore naming, for example `generate_character.md`
- Public-facing GitHub Pages routes may use kebab-case where needed for readability

## Tone

- Direct
- operational
- framework-focused
- not story-generating
