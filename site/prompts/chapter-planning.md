# Chapter Planning

## Purpose

`Chapter Planning` organizes Story Bible macro information into chapter, route, or branch outlines. It is the core planning workflow for Narrative Designer.

## Trigger Conditions

- `story/vision.md`, `story/themes.md`, `story/emotional_core.md`, and `story/timeline.md` exist
- major cast exists
- `story/ending_design.md` exists
- the user asks for chapter planning or story outlining
- the user explicitly asks to enter Phase 3 or Phase 5

## Responsible Agent

Narrative Designer

## Dependencies

- `story/vision.md`
- `story/themes.md`
- `story/emotional_core.md`
- `story/timeline.md`
- `story/ending_design.md`
- `characters/_index.md`
- character files
- `knowledge/canon.md`
- `knowledge/rules.md`

## Workflow Structure

### Step 1: Define Act Structure

1. how many acts are needed?
2. what closes each act?
3. how does the global tension curve evolve?

### Step 2: Assign Chapter Jobs

4. which theme leads each chapter?
5. which character arc advances in each chapter?
6. what is the dominant emotional register per chapter?
7. what information is revealed in each chapter?

### Step 3: Build Dependency Graph

8. which chapters must happen first?
9. which threads can run in parallel?
10. where do threads converge?

### Step 4: Detail Chapters

11. title
12. short synopsis
13. POV
14. dramatic function
15. emotional arc
16. required scenes
17. required characters
18. foreshadowing tasks
19. pacing

### Step 5: Align With Endings

20. trace each ending backward through the structure
21. mark irreversible points
22. verify that all endings remain reachable

## Inputs

- Story Bible macro modules
- character profiles and registry

## Outputs

- `story/chapters/_outline.md`
- placeholder structure under `story/chapters/`
- updated `story/timeline.md`
- updated `story/foreshadowing.md`
- updated `story/emotional_map.md`

## Validation Rules

- each chapter must advance plot, character arc, theme, or more than one of them
- chapter order must not violate the known timeline
- each ending must remain structurally traceable
- new world rules must also be registered in `knowledge/rules.md`
- the dependency graph must stay acyclic
