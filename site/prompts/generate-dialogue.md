# Generate Dialogue

## Purpose

`Generate Dialogue` transforms scene definitions into dialogue scripts with subtext, emotional state, and relationship tension annotations.

## Trigger Conditions

- a scene definition already exists
- the user wants dialogue for a scene
- Narrative Designer hands the scene to Dialogue Writer
- the user explicitly asks to enter Phase 6

## Responsible Agent

Dialogue Writer

## Dependencies

- scene definition files
- related character profiles
- `knowledge/glossary.md`
- `knowledge/rules.md`
- `knowledge/symbolism.md`
- previous dialogue files

## Workflow Structure

### Step 1: Analyze The Scene

1. who is speaking?
2. what is each current emotional state?
3. what is the relationship map and power structure?
4. what emotional shift must this dialogue produce?

### Step 2: Construct Dialogue

5. what is the intention of each line?
6. what is spoken vs implied?
7. does the line shift conversational power?
8. would this specific character truly say it this way?

### Step 3: Self-Audit

9. can speakers still be identified without tags?
10. is terminology used consistently?
11. does any character say what they should not know?
12. is subtext dense enough?
13. can lines be shorter and sharper?

### Step 4: Annotate

14. add speaker, emotional state, subtext, and relationship tension notes to each relevant line

## Inputs

- scene definition
- character files
- glossary and rules

## Outputs

- `dialogue/{chapter}-{scene}.md`
- relationship updates
- updated `dialogue/_index.md`

## Recommended Output Format

```markdown
**Character A** [state: ...]
{subtext: ...}
spoken line

**Character B** [state: ...]
{subtext: ...}
spoken line
```

## Validation Rules

- every speaker must have a goal
- characters may not reference events they have not experienced
- two characters must not sound identical
- in-world terminology must match the glossary
- anonymous dialogue is not acceptable
- if a line violates character psychology, stop and escalate to Character Therapist
