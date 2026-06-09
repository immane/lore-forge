# Generate Character

## Purpose

`Generate Character` is the core workflow of character discovery. It transforms a vague character concept into a psychologically complete, behaviorally consistent, and vocally distinct character profile.

## Trigger Conditions

- `story/vision.md` and `story/themes.md` exist
- the user wants to create a character or design the cast
- `characters/_index.md` is missing a required role
- the user explicitly asks to enter Phase 2

## Responsible Agent

Character Therapist

## Dependencies

- `story/vision.md`
- `story/themes.md`
- `story/emotional_core.md`
- `knowledge/canon.md`
- `knowledge/rules.md`
- `characters/_index.md`

## Workflow Structure

### Step 1: Define Narrative Role

1. identify the character's narrative role
2. define the character's relation to the core question of the story
3. place the character inside the world's faction or social structure

### Step 2: Build Psychological Profile

4. core wound
5. desire pyramid
6. fear ladder
7. defense mechanism
8. self-deception

### Step 3: Build Behavioral Signature

9. voice signature
10. body language
11. decision pattern

### Step 4: Build Relationship Anchors

12. define at least two key relationships
13. record power dynamics, shared history, and unresolved tension

### Step 5: Build Growth Arc

14. starting state
15. ending state
16. catalyst for change
17. reason for resisting change

## Inputs

- user character concept
- Knowledge Layer
- current character index

## Outputs

- `characters/{name}.md`
- updated `characters/_index.md`
- updated `story/emotional_map.md`
- relationship updates for other characters when needed

## Validation Rules

- each character must have motivation traceable to a wound or need
- each character must contain at least one internal contradiction
- voice signatures must remain distinguishable from the existing cast
- relationships must be defined in both directions
- character knowledge may not exceed timeline exposure
