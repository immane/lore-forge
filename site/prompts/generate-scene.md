# Generate Scene

## Purpose

`Generate Scene` converts chapter outlines into structured scene definitions, ensuring every scene carries a clear narrative function.

## Trigger Conditions

- a chapter outline already exists
- the user wants to design a chapter or scene structure
- Narrative Designer detects a structural gap
- the user explicitly asks to enter Phase 5

## Responsible Agent

Narrative Designer

## Dependencies

- `story/chapters/_outline.md`
- `story/themes.md`
- `story/emotional_core.md`
- `story/timeline.md`
- `story/foreshadowing.md`
- `story/ending_design.md`
- relevant character files
- `locations/`
- `knowledge/`

## Workflow Structure

### Step 1: Define Why The Scene Exists

1. what is the scene's dramatic function?
2. where does it sit on the tension curve?
3. how should the audience's emotion shift?

### Step 2: Define Scene Composition

4. who is the POV character?
5. which characters are present and what does each want?
6. what is the location and how does it shape mood and possibility?
7. where does the scene sit in the timeline?

### Step 3: Define Information Flow

8. what does the audience learn?
9. what do the characters learn?
10. where is dramatic irony present?
11. what remains partially hidden?

### Step 4: Define Boundaries

12. what is true at scene entry?
13. what changes by scene exit?
14. is there an irreversible moment?

### Step 5: Handle Foreshadowing

15. check if the scene must plant or pay off a seed
16. if planting, register it
17. if paying off, verify the original plant exists

## Inputs

- chapter context
- related character files
- Knowledge Layer
- foreshadowing register

## Outputs

- `story/chapters/{NN}-{title}.md`
- updated `story/chapters/_outline.md`
- updated `story/foreshadowing.md`
- updated `story/timeline.md`
- updated `story/emotional_map.md`

## Validation Rules

- every scene must have exactly one primary dramatic function
- scene entry must logically connect from previous scene exit
- character knowledge changes must fit the timeline
- if the scene breaks world rules, stop and escalate to audit
- scenes with no dramatic function should be removed or merged
