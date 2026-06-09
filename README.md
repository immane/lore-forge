<p align="center">
  <img src="https://img.shields.io/badge/status-v0.1-blue" alt="status">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="license">
</p>

# Lore Forge

**AI-assisted narrative design framework. Build and maintain a living Story Bible through structured interviews, knowledge management, and consistency checking.**

Lore Forge treats story creation as **knowledge engineering** — not text generation. It helps creators design narrative RPGs, visual novels, interactive fiction, and tabletop campaigns with long-term maintainability as the first priority.

---

## Philosophy

| Traditional AI Writing | Lore Forge |
|------------------------|------------|
| Idea → Generate Story | Idea → Interview → Story Bible → Character Design → Timeline → Memory Graph → Narrative Design → Dialogue → Export |

The **Story Bible is the single source of truth.** Everything else is derived from it.

---

## Framework

```
lore-forge/
├── .bootstrap/        Framework self-construction tools
├── agents/            5 specialized AI agents with defined boundaries
├── prompts/           6 workflow templates for agent invocation
├── templates/         3 genre project scaffolds
├── docs/              Framework documentation (VitePress)
└── projects/          User workspace (active / archived / templates)
```

### Five Agents

| Agent | Role | Phase |
|-------|------|-------|
| **Lore Architect** | Worldbuilding & knowledge layer | 1 — Concept Discovery |
| **Character Therapist** | Character psychology & growth arcs | 2 — Character Discovery |
| **Narrative Designer** | Chapter/scene structure & pacing | 3–5 — Timeline → Narrative |
| **Dialogue Writer** | Character voice & subtext | 6 — Dialogue Creation |
| **Lore Auditor** | Cross-module consistency checks | 7 — Consistency Review |

### Six Workflows

| Workflow | Input | Output |
|----------|-------|--------|
| Interview | User responses | Vision, Themes, World Rules |
| Generate Character | Character concept | Full psychological profile |
| Chapter Planning | Story Bible | Chapter outline + dependency graph |
| Generate Scene | Chapter context | Scene definition |
| Generate Dialogue | Scene + character profiles | Annotated dialogue script |
| Review Consistency | All Story Bible modules | Audit report (violations/warnings) |

### Three Templates

| Template | Skeleton | Game-Specific Module |
|----------|----------|---------------------|
| `narrative_rpg` | Chapters + Quests | `quests/` |
| `visual_novel` | Common Route + Branches | `story/routes/` |
| `interactive_fiction` | State Graph + Nodes | `events/` |

---

## Quick Start

```bash
# Clone the framework
git clone https://github.com/immane/lore-forge.git

# The framework is ready to use with any AI coding assistant.
# To create a new project, instruct your AI agent:

"Read .bootstrap/project_creator.md. Create a new project called Moonlight.
Genre: Narrative RPG. Theme: Regret and forgiveness."
```

---

## Agent Lifecycle

```
Concept Discovery  →  Character Discovery  →  Timeline  →  Memory Graph
        ↓                                                         ↓
  Game Export      ←  Consistency Review  ←  Dialogue  ←  Narrative Design
```

All 8 phases are orchestrated through the prompts and agents defined in the framework. Each agent reads from upstream modules, writes to its own domain, and delegates cross-domain changes to the responsible agent.

---

## Documentation

Full documentation is available at **[lore-forge docs](https://immane.github.io/lore-forge/)**.

| Doc | Description |
|-----|-------------|
| [Architecture](https://immane.github.io/lore-forge/architecture) | Framework design & components |
| [Workflow](https://immane.github.io/lore-forge/workflow) | Agent lifecycle & data flow |
| [Project Structure](https://immane.github.io/lore-forge/project-structure) | Directory layout & Story Bible design |

---

## License

MIT
