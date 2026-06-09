# Project Structure

```
project-root/
├── .bootstrap/          # Framework self-construction
├── agents/              # Agent definitions (5 agents)
├── prompts/             # Workflow templates (6 prompts)
├── templates/           # Project scaffolds (3 genres)
├── docs/                # Framework documentation content
├── site/                # VitePress site container
└── projects/            # User workspaces
    ├── active/          # Active projects
    ├── archived/        # Completed/paused projects
    └── templates/       # User custom templates
```

## Per-Project Structure (Story Bible)

```
projects/active/my-story/
├── project.md           # Project metadata
├── story/               # Narrative design
│   ├── vision.md
│   ├── themes.md
│   ├── emotional_core.md
│   ├── timeline.md
│   ├── foreshadowing.md
│   ├── ending_design.md
│   └── chapters/        # (or routes/ or branches/)
├── characters/          # Character profiles
├── memories/            # Memory graph
├── locations/           # Location profiles
├── dialogue/            # Dialogue scripts
├── quests/              # (or events/ for IF)
├── knowledge/           # Knowledge layer
│   ├── canon.md
│   ├── glossary.md
│   ├── rules.md
│   ├── symbolism.md
│   └── emotional_map.md
├── exports/             # Game engine exports
└── _audit/              # Consistency audit reports
```
