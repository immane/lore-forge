# User Guide

Lore Forge is an AI-assisted narrative design framework. It helps you build and maintain a living **Story Bible** through structured interviews, knowledge management, character design, narrative planning, dialogue creation, and consistency review.

You act as the **creative director**. The AI reads the framework instructions, selects the right agent, and follows the matching workflow. You answer questions and make final decisions.

## Who This Guide Is For

- **Story creators** — Writers, game designers, TTRPG game masters who want to use Lore Forge to build their story worlds
- **Readers** — Anyone who wants to browse and read completed story projects

## Setup

### Check Requirements

Lore Forge needs your AI platform to provide **file read/write**, **cross-session memory**, and **content search**.

Ask your agent to set everything up automatically:

```
Read REQUIREMENT.md. Detect my platform and set up the minimum required MCP servers.
Verify each tool is working and report which capabilities are now available.
```

Then restart your platform. See the [Requirements](/requirements) page for manual setup and per-platform details.

### Open The Repository

Clone the repository and open it in your AI assistant:

```bash
git clone https://github.com/immane/lore-forge.git
cd lore-forge
```

Lore Forge works with AI coding and document agents such as **Codex, Claude Code, OpenCode, Cursor, GitHub Copilot agents, Gemini CLI**, and similar tools. Most agents will read `AGENTS.md` automatically when you open the repo.

If your assistant does not automatically load repository instructions, start with:

```
Read AGENTS.md and verify that Lore Forge is ready to use.
```

## Quick Start

### Create a New Project

```
Create a new Lore Forge project.

Project Name: Moonlight
Genre: Narrative RPG
Inspirations: To The Moon, Finding Paradise
Themes: Regret, Forgiveness, Memory
Target Length: 6-8 hours
Target Platform: PC
```

The AI scaffolds your project under `projects/active/moonlight/` and begins the concept discovery interview.

### Continue an Existing Project

```
Continue the Moonlight project.
Find the highest-impact missing Story Bible information and ask me the next questions.
```

### Create a Character

```
For Moonlight, create the protagonist Luna.
Use the Character Therapist workflow and start the character discovery interview.
```

### Plan Chapters or Routes

```
For Moonlight, plan the chapter structure from the current Story Bible.
Define acts, chapter allocation, dependency graph, and scene-by-scene outline.
```

### Write a Scene

```
For Moonlight, generate scene definitions for Chapter 01.
Use the Narrative Designer workflow and preserve Story Bible canon.
```

### Write Dialogue

```
For Moonlight, write dialogue for the Chapter 01 opening scene.
Use established character profiles, voice signatures, subtext, and knowledge boundaries.
```

### Run an Audit

```
Run a full Lore Forge consistency audit on projects/active/moonlight/.
Report critical contradictions, warnings, and suggested fixes with file references.
```

### Export

```
The Story Bible at projects/active/moonlight/ is complete and audited.
Export JSON Event Graph, Godot Dialogic timeline, novel manuscript Markdown, and screenplay reference files.
```

If you use OpenCode, `opencode.json` defines shorthand commands for project creation, continuation, and audits.

---

## Full Workflow

The complete workflow from a blank folder to a game-ready or manuscript-ready export. You can invoke each step with natural language.

### Phase 1 — Concept Discovery

The **Lore Architect** agent interviews you to extract your world's foundation.

```
Create a new Lore Forge project and start the concept discovery interview.

Project Name: Moonlight
Genre: Narrative RPG
Inspirations: To The Moon, Finding Paradise
Themes: Regret, Forgiveness, Memory
Target Length: 6-8 hours
Target Platform: PC
```

The Lore Architect asks structured questions about:

- **Emotional Core** — "What feeling should the player carry after the story ends?"
- **Genre & Tone** — "Where on the optimism-to-pessimism scale does this sit?"
- **Thematic Anchor** — "What is the central question this story explores?"
- **World Rules** — "Are there magic systems, advanced technology, or supernatural elements?"
- **Ending Design** — "What endings should the story have? What makes each feel earned?"
- **Content Boundaries** — "Any topics, tones, or content types to avoid?"

Your answers are written into:

- `story/vision.md` — emotional core, promise, tone, central question
- `story/themes.md` — primary themes, sub-themes, motif map
- `story/emotional_core.md` — emotional intensity curve, key beats
- `story/ending_design.md` — ending inventory, conditions, payoff
- `knowledge/canon.md` — world facts, single source of truth
- `knowledge/rules.md` — magic, technology, social, economic rules
- `knowledge/glossary.md` — in-world term dictionary

Expect 20–50 questions over multiple sessions. You can pause and resume anytime.

### Phase 2 — Character Discovery

The **Character Therapist** agent discovers your cast with psychological depth.

```
For Moonlight, create the protagonist Luna.
Use the Character Therapist workflow and start the character discovery interview.
```

For each character, the agent defines:

- **Core Wound** — What hurt them? When? How do they cope?
- **Desire Pyramid** — Surface want → Deeper want → True need
- **Fear Ladder** — Minor anxiety → Major fear → Existential terror
- **Defense Mechanism** — How do they protect themselves?
- **Self-Deception** — What lie do they tell themselves?
- **Voice Signature** — Speech patterns, vocabulary, verbal tics, silence patterns
- **Relationship Map** — Bidirectional relationships with other characters
- **Growth Arc** — Who they are at the start vs. the end

Output per character goes to `characters/{name}.md`.

```
Now create the antagonist. Their name is Sol.
Also create Luna's mentor figure and her childhood friend.
```

### Phase 3 — Timeline Construction

The **Narrative Designer** builds the world-level chronology.

```
For Moonlight, construct the world timeline and character timelines.
Populate the Story Bible timeline from the approved story and character files.
```

This creates:
- **World Eras** — defining events, societal state, key figures per era
- **Story Timeline** — chapter-level chronology with in-world dates
- **Character Timelines** — birth, formative events, story entry/exit per character
- **Convergence Points** — where character threads intersect

Output: `story/timeline.md`

### Phase 4 — Memory Graph

The Narrative Designer maps **subjective memories** — what characters remember, when they recall it, and whether those memories are reliable.

```
For Moonlight, construct the memory graph.
Trace each major character's memory chains.
```

The Memory Graph is distinct from the Timeline — the timeline is objective truth, memories are subjective. A character may remember events differently from how they happened, creating dramatic tension.

Output: `memories/_index.md`

### Phase 5 — Narrative Design

The Narrative Designer structures the raw materials into chapters and scenes.

```
For Moonlight, plan the chapter structure from the current Story Bible.
Define acts, chapter allocation, dependency graph, and scene-by-scene outline.
```

Produces:
- **Act Structure** — 3-act or 5-act with act break events
- **Tension Curve** — dramatic tension mapped across all chapters
- **Dependency Graph** — chapter prerequisites and parallel tracks
- **Chapter Details** — synopsis, POV, emotional arc, required scenes

Output: `story/chapters/_outline.md` (or `story/routes/_outline.md` for VN)

Then generate scenes:

```
For Chapter 01 of Moonlight, generate all scene definitions.
```

Each scene includes: dramatic function, tension position, emotional shift, POV, information flow, and foreshadowing integration.

### Phase 6 — Dialogue Creation

The **Dialogue Writer** gives each character a distinct voice.

```
For Moonlight, write the dialogue for Chapter 01 opening scene.
Annotate each line with emotional state, subtext, and relationship tension.
```

The output is annotated dialogue:

```markdown
**Luna** [state: anxious, hopeful]
{Subtext: testing whether Sol remembers — she won't ask directly}
"Do you ever think about that night?"

**Sol** [state: guarded, dismissive]
{Subtext: remembers perfectly but won't give satisfaction}
"Which night? There were a lot of nights."
```

Output: `dialogue/01-opening.md`

### Phase 7 — Consistency Review

The **Lore Auditor** cross-references every module before canonization.

```
Run a full consistency audit on projects/active/moonlight/.
Report all violations, warnings, and suggestions.
```

Checks include:

| Check | What It Verifies |
|-------|-----------------|
| Timeline | Event B doesn't happen before event A references it |
| Character Knowledge | No character knows what they haven't been told |
| Voice Consistency | Each character's dialogue matches their voice signature |
| Rule Compliance | Nothing violates world rules in `knowledge/rules.md` |
| Foreshadowing | Every plant has a payoff; every payoff has a seed |
| Ending Reachability | All intended endings are still reachable |

Severity levels: **Critical** (must fix), **High** (blocks canonization), **Medium** (advisory), **Low** (stylistic).

Targeted audits can run anytime:

```
For Moonlight, run a targeted audit on the character Luna.
```

### Phase 8 — Export

When the Story Bible passes audit, export to production-ready formats.

```
The Story Bible at projects/active/moonlight/ is complete and audited.
Export to:
1. JSON Event Graph
2. Godot Dialogic timeline
3. Novel manuscript Markdown
4. Screenplay format
```

Output:
- `exports/json/` — structured JSON for game engines
- `exports/godot/` — Dialogic-compatible timeline files
- `exports/novel/` — outline exports, prose drafts, manuscript Markdown
- `exports/screenplay/` — Fountain-format screenplay

## Iteration

Lore Forge is designed for continuous iteration, not one-shot generation:

```
1. Interview → Story Bible grows
2. New content written (characters, scenes, dialogue)
3. Lore Auditor checks consistency
4. Fix issues, re-interview if gaps found
5. Repeat until Story Bible is complete
6. Export
```

## Reading Projects on This Site

Once projects are built and exported, you can browse them on this site:

- Go to **[Projects](/projects)** to see all available story worlds
- Click any project to explore its full Story Bible — characters, locations, knowledge, and exports
- Read novel chapters under the **Novel** section of each project

## Supported Genres

| Genre | Template | Game-Specific Module |
|-------|----------|---------------------|
| **Narrative RPG** | `templates/narrative_rpg/` | `quests/` |
| **Visual Novel** | `templates/visual_novel/` | `story/routes/` |
| **Interactive Fiction** | `templates/interactive_fiction/` | `events/` |

---

*Lore Forge is open-source under MIT license. [View on GitHub](https://github.com/immane/lore-forge)*
