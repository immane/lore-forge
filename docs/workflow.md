# Workflow

## Purpose

Define the lifecycle, data flow, and agent responsibilities of Lore Forge.

## Agent Lifecycle

| Phase | Name | Responsible Agent |
|-------|------|-------------------|
| 1 | Concept Discovery | Lore Architect |
| 2 | Character Discovery | Character Therapist |
| 3 | Timeline Construction | Narrative Designer |
| 4 | Memory Graph | Narrative Designer |
| 5 | Narrative Design | Narrative Designer |
| 6 | Dialogue Creation | Dialogue Writer |
| 7 | Consistency Review | Lore Auditor |
| 8 | Export | Export Layer |

## End-To-End Flow

```text
Framework Verification
  -> Project Creation
  -> Concept Discovery
  -> Character Discovery
  -> Timeline Construction
  -> Memory Graph
  -> Chapter / Route Planning
  -> Scene Design
  -> Dialogue Creation
  -> Consistency Review
  -> Export
```

## Data Flow

- Lore Architect establishes the world model and knowledge layer
- Character Therapist defines character psychology and arcs
- Narrative Designer converts Story Bible data into chapters, routes, branches, and scenes
- Dialogue Writer produces dialogue from approved scene structure and character voice rules
- Lore Auditor cross-checks all modules before canonization or export

## Working Rules

- Agents read from upstream modules and write to their own domain
- Cross-domain changes must be delegated to the responsible agent
- Missing information should trigger interview or clarification, not invention
- Full-project audits are recommended before milestone export
