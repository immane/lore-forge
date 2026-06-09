# Chapter Planning — Narrative Structure Workflow

## Trigger Conditions

- `story/vision.md`, `story/themes.md`, `story/emotional_core.md`, and `story/timeline.md` are populated
- Core cast exists in `characters/`
- `story/ending_design.md` is defined
- User requests "plan the chapters" or "outline the story"
- User explicitly invokes Phase 3 or Phase 5

## Responsible Agent

Narrative Designer

## Dependencies

- `story/vision.md` — scope and emotional destination
- `story/themes.md` — thematic beats to distribute across chapters
- `story/emotional_core.md` — emotional arc to structure around
- `story/timeline.md` — world events to sequence
- `story/ending_design.md` — endings to build toward
- `characters/_index.md` — which characters exist and their roles
- `characters/{name}.md` — character arcs to weave into narrative
- `knowledge/canon.md` and `knowledge/rules.md` — world constraints

## Workflow

### Step 1: Act Structure

Define the macro structure based on the project's target medium:

1. **Act Count** — 3-act? 5-act? Episodic? Branching?
2. **Act Breaks** — What irreversible event closes each act?
3. **Tension Curve** — Sketch the overall dramatic tension from opening to ending

### Step 2: Chapter Allocation

For each act:

4. Assign thematic beats — which theme is foregrounded in each chapter?
5. Assign character arcs — which character's growth is centered in each chapter?
6. Assign emotional register — what is the dominant emotion of each chapter?
7. Assign information reveals — what does the audience learn per chapter?

### Step 3: Dependency Graph

8. Map prerequisites — which chapters must precede which?
9. Identify parallel threads — which chapters can be rearranged?
10. Flag convergence points — where do character threads intersect?

### Step 4: Chapter Detailing

For each chapter:

11. **Title** — working title
12. **Synopsis** — 2-3 sentence summary
13. **POV** — primary perspective character(s)
14. **Dramatic Function** — what does this chapter do for the story?
15. **Emotional Arc** — opening emotion → closing emotion
16. **Required Scenes** — list of scenes needed (delegated to Generate Scene later)
17. **Required Characters** — who must appear
18. **Foreshadowing** — seeds to plant / payoffs to deliver
19. **Pacing** — fast / medium / slow (reflective)

### Step 5: Ending Alignment

20. For each ending defined in `story/ending_design.md`, trace the decision tree back through chapters
21. Identify "point of no return" chapters for each ending
22. Verify all endings are reachable from the planned chapter structure

## Inputs

- All Story Bible macro files (vision, themes, emotional core, timeline, ending design)
- Complete character registry and profiles

## Outputs

- `story/chapters/_outline.md` — full chapter outline with dependency graph
- `story/chapters/` — placeholder files for each chapter (to be filled by Generate Scene)
- Updated `story/timeline.md` — chapter-level granularity
- Updated `story/foreshadowing.md` — initial seed registry
- Updated `story/emotional_map.md` — chapter-level emotional beats

## Output Format (`_outline.md`)

```markdown
# Chapter Outline

## Act Structure
- Act count: {N}
- Act 1: {title} — {chapters M to N} — {act break event}
- Act 2: {title} — {chapters M to N} — {act break event}
- ...

## Tension Curve
(ASCII or described tension arc)

## Dependency Graph

| Chapter | Title | Prerequisites | Parallel With | POV | Dramatic Function | Emotional Arc | Pacing |
|---------|-------|---------------|---------------|-----|-------------------|---------------|--------|
| 01      | ...   | —             | —             | ... | ...               | ... → ...     | ...    |

## Chapter Details

### Chapter 01: {Title}
- **Synopsis**: ...
- **POV**: ...
- **Required Scenes**: ...
- **Required Characters**: ...
- **Foreshadowing**: plant / payoff / none
- **Pacing**: ...
```

## Validation Rules

- Every chapter must advance at least one of: plot, character arc, or theme (preferably 2+)
- No chapter may violate the established timeline sequence
- Every ending must have a traceable path through the chapter structure
- If a chapter introduces a new world rule, it must be registered in `knowledge/rules.md`
- Dependency graph must be acyclic — no chapter can be its own prerequisite
