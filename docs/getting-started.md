# Getting Started

Lore Forge is designed to be used with an AI coding assistant. The framework provides the structure, agents, prompts, and templates. You provide creative direction and answer the interview questions.

This page walks through the full process from a blank repository to a game-ready Story Bible export.

## 1. Clone The Framework

```bash
git clone https://github.com/immane/lore-forge.git
cd lore-forge
```

Then open the repository in your AI assistant.

## 2. Verify The Framework

Before starting a project, ask your AI assistant to verify the framework itself:

```text
Read .bootstrap/architect.md. You are now the Lore Forge Architect.
Verify the framework structure is complete and ready for use.
```

This step checks that:

- `.bootstrap/` contains the framework bootstrap instructions
- `agents/` contains the five specialized agents
- `prompts/` contains the six workflow prompts
- `templates/` contains the three project templates

## 3. Create A Project

Create a Story Bible workspace using the Project Creator:

```text
Read .bootstrap/project_creator.md. I want to create a new project.

Project Name: Moonlight
Genre: Narrative RPG
Inspirations: To The Moon, Finding Paradise
Themes: Regret, Forgiveness, Memory
Target Length: 6-8 hours
Target Platform: PC
```

Expected output:

```text
projects/moonlight/
├── project.md
├── story/
├── characters/
├── memories/
├── locations/
├── dialogue/
├── quests/ or events/
├── knowledge/
└── exports/
```

## 4. Run Concept Discovery

Once the project exists, start the concept interview.

```text
Read .bootstrap/story_interviewer.md.
Read prompts/interview.md.
Act as Lore Architect.

Analyze the current Story Bible at projects/moonlight/.
Start the concept discovery interview. Ask me questions one at a time.
```

The Lore Architect will interview you about:

- Emotional core
- Genre and tone
- Themes
- World rules
- Ending design
- Boundaries and constraints

This phase gradually fills:

- `story/vision.md`
- `story/themes.md`
- `story/emotional_core.md`
- `story/ending_design.md`
- `knowledge/canon.md`
- `knowledge/rules.md`
- `knowledge/glossary.md`

## 5. Build The Cast

Use the Character Therapist to create psychologically consistent characters.

```text
Read agents/character-therapist/agent.md.
Read prompts/generate_character.md.
Act as Character Therapist.

Read the Story Bible at projects/moonlight/.
I want to create the protagonist. Their name is Luna.
Start the character discovery interview.
```

For each major character, the Character Therapist defines:

- Core wound
- Desire pyramid
- Fear ladder
- Defense mechanism
- Voice signature
- Relationship map
- Growth arc

Output goes into `characters/{name}.md`.

## 6. Construct Timeline And Memory Graph

After the cast is ready, use the Narrative Designer to build chronology and memory logic.

```text
Read agents/narrative-designer/agent.md.
Act as Narrative Designer.

Read all story and character files in projects/moonlight/.
Construct the world timeline and character timelines.
Then build the memory graph.
```

This phase creates:

- `story/timeline.md`
- `memories/_index.md`
- any per-character memory files needed by the project

Important distinction:

- The **timeline** is objective truth
- The **memory graph** is subjective recall

## 7. Plan Chapters And Scenes

Now turn the Story Bible into a playable narrative structure.

First generate the chapter or route outline:

```text
Read prompts/chapter_planning.md.
Act as Narrative Designer.

Read the full Story Bible at projects/moonlight/.
Plan the chapter structure. Define acts, chapter allocation, dependency graph,
and the scene-by-scene outline.
```

Then generate scene definitions:

```text
Read prompts/generate_scene.md.
Act as Narrative Designer.

For Chapter 01 of Moonlight, generate all scene definitions.
```

Scene definitions capture:

- Dramatic function
- Tension position
- POV and characters present
- Location and time
- Information flow
- Foreshadowing

## 8. Write Dialogue

Once a scene is defined, hand it to the Dialogue Writer.

```text
Read agents/dialogue-writer/agent.md.
Read prompts/generate_dialogue.md.
Act as Dialogue Writer.

Read the scene at projects/moonlight/story/chapters/01-opening.md.
Read the related character files.
Write the dialogue for this scene with subtext annotations.
```

Dialogue output includes:

- speaker tags
- emotional state per line
- subtext notes
- relationship tension notes

Output goes into `dialogue/`.

## 9. Run Consistency Review

Before treating anything as canon, run the Lore Auditor.

```text
Read agents/lore-auditor/agent.md.
Read prompts/review_consistency.md.
Act as Lore Auditor.

Run a full consistency audit on projects/moonlight/.
Report all violations, warnings, and suggestions.
```

The Lore Auditor checks:

- timeline contradictions
- character knowledge leaks
- voice inconsistency
- world rule violations
- unresolved foreshadowing
- unreachable endings

Use targeted audits during active development and full audits at milestones.

## 10. Export The Project

When the Story Bible is stable, export it for production use.

```text
The Story Bible at projects/moonlight/ is complete and audited.
Export to:
1. JSON Event Graph
2. Godot Dialogic timeline
3. Screenplay format
```

Export output goes into:

- `exports/json/`
- `exports/godot/`
- `exports/screenplay/`

## 11. Iterate

Lore Forge is not a one-shot generator. The normal working cycle is:

```text
Interview -> Story Bible grows
New content is generated
Lore Auditor checks consistency
Gaps are found
Interview again or revise modules
Repeat
```

You can revisit any phase at any time. The Story Bible stays persistent and remains the single source of truth for the whole project.

## Recommended Order

If you want the shortest reliable path, use this order:

1. Verify framework
2. Create project
3. Run concept interview
4. Generate core cast
5. Build timeline and memory graph
6. Plan chapters or routes
7. Generate scenes
8. Write dialogue
9. Audit
10. Export

## Next Pages

- [Architecture](/architecture)
- [Workflow](/workflow)
- [Project Structure](/project-structure)
