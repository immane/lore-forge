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
| 8 | Export | Export Layer |

## End-To-End Flow

```text
Framework verification
  -> Create project
  -> Concept discovery
  -> Character discovery
  -> Timeline construction
  -> Memory graph
  -> Chapter / route planning
  -> Scene design
  -> Dialogue creation
  -> Consistency review
  -> Export
```

## Phase Details

### Phase 1: Concept Discovery

- Responsible agent: `Lore Architect`
- Primary prompt: `Interview`
- Goal: establish emotional core, themes, world rules, and ending direction
- Primary outputs:
  - `story/vision.md`
  - `story/themes.md`
  - `story/emotional_core.md`
  - `knowledge/canon.md`
  - `knowledge/rules.md`

### Phase 2: Character Discovery

- Responsible agent: `Character Therapist`
- Primary prompt: `Generate Character`
- Goal: build psychologically credible characters with distinct voices and arcs
- Primary outputs:
  - `characters/{name}.md`
  - `characters/_index.md`
  - `knowledge/emotional_map.md`

### Phase 3: Timeline Construction

- Responsible agent: `Narrative Designer`
- Goal: establish objective chronology for the world and cast
- Primary outputs:
  - `story/timeline.md`

### Phase 4: Memory Graph

- Responsible agent: `Narrative Designer`
- Goal: define subjective recall, false memories, repressed memories, and trigger chains
- Primary outputs:
  - `memories/_index.md`
  - per-character memory files

### Phase 5: Narrative Design

- Responsible agent: `Narrative Designer`
- Primary prompts: `Chapter Planning`, `Generate Scene`
- Goal: transform Story Bible into acts, chapters, routes, branches, and scenes
- Primary outputs:
  - `story/chapters/_outline.md` or equivalent
  - scene definition files under `story/`
  - `story/foreshadowing.md` updates

### Phase 6: Dialogue Creation

- Responsible agent: `Dialogue Writer`
- Primary prompt: `Generate Dialogue`
- Goal: write scene dialogue that matches psychology, knowledge boundaries, and tone
- Primary outputs:
  - `dialogue/{chapter}-{scene}.md`

### Phase 7: Consistency Review

- Responsible agent: `Lore Auditor`
- Primary prompt: `Review Consistency`
- Goal: detect contradictions, drift, leaks, and unreachable narrative states
- Primary outputs:
  - `_audit/{date}-{scope}-report.md`

### Phase 8: Export

- Responsible layer: Export Layer
- Goal: transform Story Bible into engine-consumable or manuscript-ready outputs
- Primary outputs:
  - `exports/json/`
  - `exports/godot/`
  - `exports/novel/`
  - `exports/screenplay/`

## Data Flow

Agents collaborate through Story Bible modules. Each agent reads upstream information and writes only to its own responsibility boundary.

## Working Model

Lore Forge is meant to run as an iterative loop:

1. interview and discover missing information
2. write or update Story Bible modules
3. generate structured narrative artifacts
4. run consistency review
5. fix gaps and contradictions
6. repeat until the Story Bible is stable

## Suggested Reading Order

If you are new to Lore Forge, read in this order:

1. [Getting Started](/getting-started)
2. [Architecture](/architecture)
3. [Project Structure](/project-structure)

Then continue into the individual Agent and Prompt pages to understand responsibility boundaries and phase-specific inputs and outputs.
