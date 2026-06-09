# Workflow

## Agent Lifecycle (8 Phases)

| Phase | Name | Responsible Agent |
|-------|------|-------------------|
| 1 | Concept Discovery | Lore Architect |
| 2 | Character Discovery | Character Therapist |
| 3 | Timeline Construction | Narrative Designer |
| 4 | Memory Graph | Narrative Designer |
| 5 | Narrative Design | Narrative Designer |
| 6 | Dialogue Creation | Dialogue Writer |
| 7 | Consistency Review | Lore Auditor |
| 8 | Game Export | (Export Pipeline) |

## Data Flow

Agents communicate through the Story Bible modules. Each agent reads from upstream modules and writes to its own. No agent may modify another agent's output directly.

For detailed workflow specifications, see `prompts/*.md` in the repository.
