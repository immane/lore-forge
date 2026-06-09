# Interview

## Purpose

`Interview` is the core workflow of the concept discovery phase. It uses structured questions to extract vague creator ideas and turn them into maintainable Story Bible foundations.

## Trigger Conditions

- a new project has just been created
- the user wants to start a new story
- the user wants to continue defining world foundations
- the user explicitly asks to enter Phase 1

## Responsible Agent

Lore Architect

## Dependencies

- an existing project template
- an initialized `project.md`

## Workflow Structure

### Step 1: Gather Context

Ask questions around:

1. what feeling should the audience carry after the ending?
2. what genre and tone is this story?
3. is the project a single work, a series, or an open-ended long-term setting?
4. what is the real central question of the story?
5. what is the target medium?
6. what existing works should it feel like?

### Step 2: Build World Skeleton

Continue with:

7. when and where does the story take place?
8. are there magical, technological, or supernatural rules?
9. what factions exist and what do they want?
10. what historical event shaped the present?

### Step 3: Work Backward From Endings

11. what endings should exist?
12. what must never happen in this story?

### Step 4: Extract Constraints

13. what content boundaries should be avoided?
14. what format constraints exist, such as length, chapter count, or branching complexity?

## Inputs

- user responses
- chosen project type
- initial `project.md`

## Outputs

- `project.md`
- `story/vision.md`
- `story/themes.md`
- `story/emotional_core.md`
- initial `story/timeline.md`
- initial `story/ending_design.md`
- initial `knowledge/canon.md`
- initial `knowledge/glossary.md`
- initial `knowledge/rules.md`

## Validation Rules

- `story/vision.md` should stay one paragraph
- every theme should map to later scenes or chapters
- world rules must be testable and auditable
- unanswered questions must be marked as `_pending` instead of invented
