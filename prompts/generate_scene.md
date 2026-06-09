# Generate Scene — Scene Construction Workflow

## Trigger Conditions

- A chapter outline exists in `story/chapters/_outline.md`
- User requests "write a scene for chapter N" or "design the opening scene"
- Narrative Designer has identified a gap in the dramatic structure
- User explicitly invokes Phase 5

## Responsible Agent

Narrative Designer

## Dependencies

- `story/chapters/_outline.md` — to place the scene in context
- `story/themes.md` — for thematic alignment
- `story/emotional_core.md` — for emotional arc placement
- `story/timeline.md` — for temporal positioning
- `story/foreshadowing.md` — to check for seeds that need planting or paying off
- `story/ending_design.md` — to ensure the scene serves the intended ending
- `characters/{name}.md` for all characters in the scene
- `locations/` — for setting details
- `knowledge/` — for world rule compliance

## Workflow

### Step 1: Scene Purpose

Define the scene's reason for existing:

1. **Dramatic Function** — What does this scene accomplish? (Revelation / Escalation / Reversal / Relief / Setup)
2. **Tension Position** — Where on the chapter/act tension curve? (Rising / Peak / Falling / Valley)
3. **Emotional Shift** — What emotion does the reader start with vs. end with?

### Step 2: Scene Composition

4. **POV Character(s)** — Whose perspective? Why this character?
5. **Characters Present** — Who is in the scene? What does each want in this moment?
6. **Location** — Where? How does the location affect the scene's mood/possibilities?
7. **Time** — When in the timeline? Time of day? Duration?

### Step 3: Information Flow

8. **Reader Learns** — What new information does the audience receive?
9. **Characters Learn** — What do specific characters learn?
10. **Dramatic Irony** — What does the reader know that some characters don't?
11. **Hidden Layer** — What happens that no one (reader or characters) fully understands yet?

### Step 4: Scene Boundaries

12. **Entry State** — What is true when the scene begins?
13. **Exit State** — What has changed when the scene ends?
14. **Irreversible Moment** — What decision or event in this scene cannot be undone?

### Step 5: Foreshadowing Integration

15. Check `story/foreshadowing.md` — does this scene plant or pay off any seed?
16. If planting: register in foreshadowing register with chapter reference
17. If paying off: verify the seed was planted earlier, note the payoff

## Inputs

- Chapter/section context from `story/chapters/_outline.md`
- All relevant character files (read-only)
- Knowledge Layer (read-only)
- Foreshadowing register (read/write)

## Outputs

- `story/chapters/{NN}-{title}.md` — scene definition
- Updated `story/chapters/_outline.md` — mark scene as designed
- Updated `story/foreshadowing.md` — register new seeds or payoffs
- Updated `story/timeline.md` — scene-level entry
- Updated `story/emotional_map.md` — scene-level emotional beat

## Validation Rules

- Every scene must have one and only one primary dramatic function
- Scene entry state must logically follow from the previous scene's exit state
- If a scene introduces new information to a character, verify they didn't already know it
- If a scene contradicts established world rules, flag for Lore Auditor — do not proceed
- No scene may be labeled as having "no dramatic function" — if filler, cut it
