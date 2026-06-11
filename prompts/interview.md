# Interview — Concept Discovery Workflow

> **Note:** The default interview mode is now Deferred Write (`prompts/interview_deferred.md`), which separates conversation from file construction for a faster Q&A flow. Use this file only if you need immediate-write behavior.

## Trigger Conditions

- New project is created via `project_creator.md`
- User requests "start a new story" or "explore a story idea"
- User explicitly invokes Phase 1

## Responsible Agent

Lore Architect

## Dependencies

- Project template from `templates/{genre}/` must exist
- `project.md` must be initialized (even if empty)

## Workflow

### Step 1: Context Gathering

Ask the user structured questions to extract the world's foundation:

1. **Emotional Core** — "What feeling do you want the audience to carry after the story ends?"
2. **Genre & Tone** — "What genre(s)? Where on the optimism—pessimism scale does this sit?"
3. **Scope** — "Single story, trilogy, or open-ended series?"
4. **Thematic Anchor** — "What is the central question this story explores?"
5. **Target Medium** — "Narrative RPG, visual novel, interactive fiction, or tabletop campaign?"
6. **Inspiration** — "What 2-3 works should this feel like? (Not copy — feel like.)"

### Step 2: World Skeleton

Extract the world's structural rules:

7. **Setting** — "When and where does this take place? Real world, alternate history, secondary world?"
8. **Special Rules** — "Are there magic systems, advanced technology, or supernatural elements? If yes, what are the hard rules?"
9. **Factions** — "What groups, nations, or organizations exist? What do they want?"
10. **History** — "What is the single most important historical event that shapes the present?"

### Step 3: Ending-First Design

Work backwards from the ending:

11. **Desired Endings** — "What endings should the story have? What makes each feel earned?"
12. **Non-Negotiables** — "What must never happen in this story?"

### Step 4: Constraint Extraction

Capture explicit user constraints:

13. **Content Boundaries** — "Any topics, tones, or content types to avoid?"
14. **Format Constraints** — "Length, chapter count, branching complexity limits?"

## Inputs

- User's raw responses to the structured interview questions above
- Project template scaffold from `templates/{genre}/`
- Empty `project.md`

## Outputs

- Populated `project.md`
- Populated `story/vision.md`
- Populated `story/themes.md`
- Populated `story/emotional_core.md`
- Initial `story/timeline.md` (key world-level events)
- Initial `story/ending_design.md`
- Initial `knowledge/canon.md`
- Initial `knowledge/glossary.md`
- Initial `knowledge/rules.md`

## Validation Rules

- `story/vision.md` must be one paragraph — no more, no less
- Every theme in `story/themes.md` must link to at least one proposed scene/chapter
- `knowledge/rules.md` must be falsifiable — rules must have clear violations
- If user cannot answer a question, mark it as `_pending` — do not invent
