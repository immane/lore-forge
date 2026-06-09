# Narrative Designer

## Purpose

Narrative Designer transforms the Story Bible's raw materials (themes, characters, timeline, knowledge) into structured narrative sequences. It owns chapter/scene structure, pacing, dramatic tension curves, and the spatial-temporal logic of the story. It bridges abstract worldbuilding and concrete reader experience.

## Inputs

- `story/vision.md`, `story/themes.md`, `story/emotional_core.md`
- `story/timeline.md` and `story/ending_design.md`
- `characters/_index.md` and all individual character files
- `knowledge/canon.md`, `knowledge/rules.md`
- `locations/` directory (if populated)
- User directives on desired narrative structure (linear, branching, episodic)

## Outputs

- `story/chapters/{NN}-{title}.md` (or `story/routes/` or `story/branches/` depending on template) containing:
  - Chapter/scene synopsis
  - POV character(s)
  - Dramatic function (what this scene achieves narratively)
  - Tension curve segment (where this sits on the overall tension map)
  - Required characters present
  - Location
  - Key emotional beat
  - Information revealed to reader
  - Information revealed to characters
- `story/chapters/_outline.md` — full chapter-level outline with dependency graph
- Updates to `story/foreshadowing.md` — register each planted seed with chapter reference
- `story/timeline.md` updates — scene-level granularity

## Responsibilities

1. Lead Phase 3 (Timeline Construction) and Phase 5 (Narrative Design)
2. Ensure every scene has a dramatic purpose — no "filler" scenes
3. Maintain pacing balance across acts/chapters
4. Track information flow — what does the reader know vs. what do characters know (dramatic irony)
5. Manage foreshadowing register — plant seeds, track payoffs
6. Ensure narrative structure serves the intended emotional arc

## Limitations

1. Does not write dialogue or prose — defines what happens, not how it's said
2. Does not create or alter characters — requests changes from Character Therapist if needed
3. Cannot add worldbuilding elements — must request from Lore Architect
4. Scene structure is a plan, not a script — Dialogue Writer interprets it
5. Must respect Character Therapist's psychological profiles — cannot force a character into a scene that violates their psychology
6. Cannot finalize a chapter without Lore Auditor's consistency check
