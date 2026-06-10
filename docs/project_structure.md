# Project Structure

Lore Forge framework content is split into two layers:

- `docs/` stores framework documentation content defined by the architect spec
- `site/` stores the VitePress container and GitHub Pages presentation layer

## Framework-Level Structure

```text
lore-forge/
├── .bootstrap/        framework self-construction
├── agents/            long-lived AI agent definitions
├── prompts/           workflow prompts
├── templates/         project scaffolds
├── docs/              framework documentation content
├── site/              VitePress site container
└── projects/          user story projects
```

## Project-Level Structure

```text
projects/active/my-story/
├── project.md
├── story/
├── characters/
├── memories/
├── locations/
├── dialogue/
├── quests/ or events/
├── knowledge/
└── exports/
    ├── json/
    ├── godot/
    ├── novel/
    └── screenplay/
```

## Notes

- All story content must stay inside `projects/`
- Framework content must not be stored inside `projects/`
- Public-facing documentation pages for GitHub Pages live in `site/`
