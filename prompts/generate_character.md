# Generate Character — Character Discovery Workflow

## Trigger Conditions

- `story/vision.md` and `story/themes.md` are populated
- User requests "create a character" or "design the cast"
- `characters/_index.md` is missing a role the story requires
- User explicitly invokes Phase 2

## Responsible Agent

Character Therapist

## Dependencies

- `story/vision.md` — to align character purpose with story direction
- `story/themes.md` — to connect character arcs to thematic structure
- `story/emotional_core.md` — to ensure characters carry emotional weight
- `knowledge/canon.md` — for world context (what kind of person can exist here)
- `knowledge/rules.md` — for constraints on abilities, roles, social positions
- `characters/_index.md` — to see existing cast and avoid overlap

## Workflow

### Step 1: Role Definition

1. Identify the character's narrative function (protagonist, antagonist, mentor, foil, etc.)
2. Define their relationship to the central thematic question
3. Place them in the faction/group structure from the Knowledge Layer

### Step 2: Psychological Profile

4. **Core Wound** — What hurt them? When? How do they cope?
5. **Desire Pyramid** — Surface want → Deeper want → True need (they may not know #3)
6. **Fear Ladder** — Minor anxiety → Major fear → Existential terror
7. **Defense Mechanism** — How do they protect themselves from their core wound?
8. **Self-Deception** — What lie do they tell themselves?

### Step 3: Behavioral Signature

9. **Voice** — Speech patterns, vocabulary range, verbal tics, silence patterns
10. **Body Language** — Resting state, stress tells, comfort gestures
11. **Decision Pattern** — How do they make choices under pressure? What do they prioritize?

### Step 4: Relationship Anchor

12. Define connections to at least 2 other characters
13. For each connection: power dynamic, shared history, unresolved tension

### Step 5: Growth Arc

14. **Start State** — Who are they at the story's beginning?
15. **End State** — Who do they become?
16. **Catalyst** — What changes them?
17. **Resistance** — Why do they resist change?

## Inputs

- Character concept from user (can be minimal — "a reluctant hero" is enough)
- Knowledge Layer files (read-only)
- Existing character registry from `characters/_index.md`

## Outputs

- `characters/{name}.md` — complete character profile
- Updated `characters/_index.md`
- Updated `story/emotional_map.md` — new character's emotional beats inserted
- Optional: updated relationship maps in other characters' files (bidirectional)

## Validation Rules

- Every character must have a motivation traceable to their core wound
- Every character must have at least one internal contradiction (no perfect characters)
- Voice signature must be distinct from all existing characters — if too similar, differentiate or merge
- All relationships must be bidirectional — if A fears B, B's profile must reflect A's fear
- Character's knowledge must not exceed their timeline exposure — cross-check with `story/timeline.md`
