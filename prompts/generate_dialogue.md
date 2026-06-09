# Generate Dialogue — Dialogue Writing Workflow

## Trigger Conditions

- A scene definition exists in `story/chapters/{NN}-{title}.md` (or equivalent)
- User requests "write dialogue for scene X"
- Narrative Designer hands off a scene to Dialogue Writer
- User explicitly invokes Phase 6

## Responsible Agent

Dialogue Writer

## Dependencies

- Scene definition from `story/chapters/{NN}-{title}.md` (read-only)
- `characters/{name}.md` for every character speaking — especially voice signature, psychological profile, relationship map (read-only)
- `knowledge/glossary.md` — for in-world terminology (read-only)
- `knowledge/rules.md` — for knowledge boundary enforcement (read-only)
- `knowledge/symbolism.md` — for thematic resonance opportunities (read-only)
- Existing dialogue files — for voice consistency across scenes (read-only)

## Workflow

### Step 1: Scene Analysis

Before writing a single line:

1. **Who speaks?** — List characters, their current emotional state, what they want in this scene
2. **Relationship Map** — For each pair: power dynamic, history, unresolved tension, what's at stake
3. **Information Boundaries** — What does each character know? What must they not reveal?
4. **Emotional Arc** — What emotional shift should this dialogue achieve?

### Step 2: Dialogue Construction

For each exchange:

5. **Agenda per line** — What is this character trying to accomplish with these words?
6. **Subtext** — What do they mean vs. what do they say?
7. **Power shift** — Does this line change who leads the conversation?
8. **Voice check** — Is this how this specific character would say it? (Check voice signature)

### Step 3: Self-Audit

After the first draft:

9. **Voice Differentiation** — If you remove speaker tags, can you still tell who said what?
10. **Glossary Compliance** — Are all in-world terms used correctly?
11. **Knowledge Boundary Check** — Does any character say something they shouldn't know?
12. **Subtext Density** — Is there at least one line per exchange where the meaning differs from the words?
13. **Length** — Can any line be shorter without losing meaning?

### Step 4: Annotation

14. Mark each line with: speaker, emotional state, subtext (where applicable), relationship tension note

## Inputs

- Complete scene definition from Narrative Designer
- Character profiles for all speaking characters
- Project glossary and rules

## Outputs

- `dialogue/{chapter}-{scene}.md` — annotated dialogue file
- Updated character relationship maps — if dialogue reveals or evolves a relationship
- `dialogue/_index.md` update — register new dialogue file

## Output Format

```markdown
# Dialogue: Chapter {N} — {Scene Title}

## Context
- POV: {character}
- Location: {location}
- Dramatic Function: {function}
- Emotional Arc: {start} → {end}

## Dialogue

**{Character A}** [state: {emotional state}]
{subtext: what they really mean}
{spoken line}

**{Character B}** [state: {emotional state}]
{subtext: what they really mean}
{spoken line}

[Action: {minimal stage direction}]

...
```

## Validation Rules

- Every speaking character must have an agenda (goal) in this exchange
- No character may reference events they haven't experienced (timeline check)
- No two characters should sound identical — if they do, one needs voice differentiation
- All in-world terms must match glossary definitions exactly
- Every line must be attributable to a specific character — no anonymous dialogue
- If a line violates a character's psychological profile, flag for Character Therapist — do not proceed
