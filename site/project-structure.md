# Project Structure

```text
project-root/
├── .bootstrap/          # framework bootstrap and upgrade
├── agents/              # 5 agent definitions
├── prompts/             # 6 workflow prompts
├── templates/           # 3 project template families
├── docs/                # framework documentation content
├── site/                # GitHub Pages site container
└── projects/            # user project workspace
    ├── active/          # active projects
    ├── archived/        # archived projects
    └── templates/       # user-defined templates
```

## Story Bible Project Structure

```text
projects/active/my-story/
├── project.md           # project metadata
├── story/               # narrative design
│   ├── vision.md
│   ├── themes.md
│   ├── emotional_core.md
│   ├── timeline.md
│   ├── foreshadowing.md
│   ├── ending_design.md
│   └── chapters/        # or routes/ / branches/
├── characters/          # character profiles
├── memories/            # memory graph
├── locations/           # location profiles
├── dialogue/            # dialogue scripts
├── quests/              # or events/
├── knowledge/           # knowledge layer
│   ├── canon.md
│   ├── glossary.md
│   ├── rules.md
│   ├── symbolism.md
│   └── emotional_map.md
├── exports/             # engine and manuscript export outputs
│   ├── json/
│   ├── godot/
│   ├── novel/
│   └── screenplay/
└── _audit/              # consistency audit reports
```

## Responsibility Of Each Directory

### `.bootstrap/`

Builds and upgrades the framework itself, including:

- architecture definition
- project initialization entry points
- story interview entry points

### `agents/`

Stores long-lived role definitions. Each agent specifies:

- Purpose
- Inputs
- Outputs
- Responsibilities
- Limitations

### `prompts/`

Stores workflow-level prompts. Each prompt specifies:

- Inputs
- Outputs
- Dependencies
- Trigger Conditions

### `templates/`

Defines starting skeletons for different project types:

- Narrative RPG
- Visual Novel
- Interactive Fiction

### `projects/`

All real story content must live here. Framework files must not be mixed into `projects/`.

## Structural Principles

- framework and story projects must remain separate
- content layer and presentation layer must remain separate
- docs, agents, prompts, and templates each keep independent responsibilities
- Story Bible must be able to evolve over time without losing consistency
