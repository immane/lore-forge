# Getting Started

Lore Forge is designed to be used with an AI coding assistant. The framework provides structure, agents, prompts, and templates. You provide creative direction, answer questions, and make final decisions.

This page gives the complete end-to-end workflow from a blank repository to an export-ready Story Bible.

## 1. Clone The Framework

```bash
git clone https://github.com/immane/lore-forge.git
cd lore-forge
```

Then open the repository in your AI assistant.

## 2. Verify The Framework

Before creating a project, ask the AI to validate the framework itself:

```text
Read .bootstrap/architect.md. You are now the Lore Forge Architect.
Verify the framework structure is complete and ready for use.
```

This confirms that:

- `.bootstrap/` contains bootstrap instructions
- `agents/` contains the five specialized agents
- `prompts/` contains the six workflow prompts
- `templates/` contains the three project templates

## 3. Create A New Project

Use the Project Creator to scaffold a Story Bible workspace:

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
    ├── json/
    ├── godot/
    ├── novel/
    └── screenplay/
```

This step creates structure first. It does not start by writing plot prose.

## 4. Run Concept Discovery

After the project exists, begin the concept interview:

```text
Read .bootstrap/story_interviewer.md.
Read prompts/interview.md.
Act as Lore Architect.

Analyze the current Story Bible at projects/moonlight/.
Start the concept discovery interview. Ask me questions one at a time.
```

Lore Architect will ask about:

- emotional core
- genre and tone
- themes
- world rules
- ending design
- constraints and boundaries

This stage gradually fills:

- `story/vision.md`
- `story/themes.md`
- `story/emotional_core.md`
- `story/ending_design.md`
- `knowledge/canon.md`
- `knowledge/rules.md`
- `knowledge/glossary.md`

You do not need to know every answer up front. Lore Forge uses interviews to surface hidden story knowledge.

## 5. Build The Cast

Use Character Therapist to create psychologically consistent characters:

```text
Read agents/character-therapist/agent.md.
Read prompts/generate_character.md.
Act as Character Therapist.

Read the Story Bible at projects/moonlight/.
I want to create the protagonist. Their name is Luna.
Start the character discovery interview.
```

For each major character, Character Therapist defines:

- core wound
- desire pyramid
- fear ladder
- defense mechanism
- voice signature
- relationship map
- growth arc

Output is written to `characters/{name}.md`.

Then continue with antagonist, mentor, ally, and other core cast members.

## 6. Build Timeline And Memory Graph

Once the cast is established, use Narrative Designer to handle chronology and memory:

```text
Read agents/narrative-designer/agent.md.
Act as Narrative Designer.

Read all story and character files in projects/moonlight/.
Construct the world timeline and character timelines.
Then build the memory graph.
```

This stage creates:

- `story/timeline.md`
- `memories/_index.md`
- any per-character memory files needed by the project

Important distinction:

- the **timeline** is objective truth
- the **memory graph** is subjective recall

If a character remembers something incorrectly, that should appear in the memory graph rather than rewriting the objective timeline.

## 7. Plan Chapters And Scenes

Next, transform the Story Bible into actionable narrative structure.

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

A standard scene definition should include:

- dramatic function
- tension position
- POV and active characters
- location and time
- information flow
- foreshadowing placement or payoff

## 8. Write Dialogue

Once a scene definition exists, hand it to Dialogue Writer:

```text
Read agents/dialogue-writer/agent.md.
Read prompts/generate_dialogue.md.
Act as Dialogue Writer.

Read the scene at projects/moonlight/story/chapters/01-opening.md.
Read the related character files.
Write the dialogue for this scene with subtext annotations.
```

Dialogue output should include:

- speaker tags
- emotional state per line
- subtext notes
- relationship tension notes

Output is written into `dialogue/`.

## 9. Run Consistency Review

Before treating any content as canon, run Lore Auditor:

```text
Read agents/lore-auditor/agent.md.
Read prompts/review_consistency.md.
Act as Lore Auditor.

Run a full consistency audit on projects/moonlight/.
Report all violations, warnings, and suggestions.
```

Lore Auditor focuses on:

- timeline conflicts
- character knowledge leaks
- voice inconsistency
- world rule violations
- unresolved foreshadowing
- unreachable endings

Use targeted audits during active development and full audits at milestone points.

## 10. Export The Project

Once the Story Bible is stable, export it into production-ready formats:

```text
The Story Bible at projects/moonlight/ is complete and audited.
Export to:
1. JSON Event Graph
2. Godot Dialogic timeline
3. Novel manuscript Markdown
4. Screenplay format
```

Export output goes into:

- `exports/json/`
- `exports/godot/`
- `exports/novel/`
- `exports/screenplay/`

## 11. Iterate

Lore Forge is not a one-shot generator. The standard loop is:

```text
Interview -> Story Bible grows
New content is generated
Lore Auditor checks consistency
Gaps are found
Interview again or revise modules
Repeat
```

You can return to any phase at any time. The Story Bible remains the persistent source of truth for the whole project.

## Recommended Order

If you want the most reliable path, use this order:

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

## Read Next

- [Architecture](/architecture)
- [Workflow](/workflow)
- [Project Structure](/project-structure)
