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

## Phase Details

### Phase 1: Concept Discovery

- Responsible agent: `Lore Architect`
- Primary prompt: `prompts/interview.md`
- Goal: establish the world's emotional core, themes, rules, and ending direction
- Primary outputs:
  - `story/vision.md`
  - `story/themes.md`
  - `story/emotional_core.md`
  - `knowledge/canon.md`
  - `knowledge/rules.md`

### Phase 2: Character Discovery

- Responsible agent: `Character Therapist`
- Primary prompt: `prompts/generate_character.md`
- Goal: create psychologically believable characters with distinct voices and arcs
- Primary outputs:
  - `characters/{name}.md`
  - updates to `characters/_index.md`
  - updates to `knowledge/emotional_map.md`

### Phase 3: Timeline Construction

- Responsible agent: `Narrative Designer`
- Goal: map objective chronology across world events and character lives
- Primary outputs:
  - `story/timeline.md`

### Phase 4: Memory Graph

- Responsible agent: `Narrative Designer`
- Goal: define subjective recall, unreliable memories, and trigger chains
- Primary outputs:
  - `memories/_index.md`
  - per-character memory files where needed

### Phase 5: Narrative Design

- Responsible agent: `Narrative Designer`
- Primary prompts:
  - `prompts/chapter_planning.md`
  - `prompts/generate_scene.md`
- Goal: turn the Story Bible into acts, chapters, routes, branches, and scenes
- Primary outputs:
  - `story/chapters/_outline.md` or equivalent
  - scene definition files under `story/`
  - updates to `story/foreshadowing.md`

### Phase 6: Dialogue Creation

- Responsible agent: `Dialogue Writer`
- Primary prompt: `prompts/generate_dialogue.md`
- Goal: write scene-level dialogue that matches psychology, knowledge boundaries, and tone
- Primary outputs:
  - `dialogue/{chapter}-{scene}.md`

### Phase 7: Consistency Review

- Responsible agent: `Lore Auditor`
- Primary prompt: `prompts/review_consistency.md`
- Goal: detect contradictions, drift, leaks, and unreachable narrative states
- Primary outputs:
  - `_audit/{date}-{scope}-report.md`

### Phase 8: Game Export

- Responsible layer: export pipeline
- Goal: transform Story Bible modules into engine-ready formats
- Primary outputs:
  - `exports/json/`
  - `exports/godot/`
  - `exports/screenplay/`

## Data Flow

Agents communicate through the Story Bible modules. Each agent reads from upstream modules and writes to its own. No agent may modify another agent's output directly.

## Working Model

Use Lore Forge as an iterative loop:

1. Interview and discover missing information
2. Write or update Story Bible modules
3. Generate structured narrative artifacts
4. Run consistency review
5. Fix gaps and contradictions
6. Repeat until the Story Bible is stable

## Recommended Reading Order

If you are new to the framework, read these pages in order:

1. [Getting Started](/getting-started)
2. [Architecture](/architecture)
3. [Project Structure](/project-structure)

For detailed workflow specifications, see `prompts/*.md` in the repository.
