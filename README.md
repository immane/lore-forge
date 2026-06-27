<p align="center">
  <img src="https://img.shields.io/badge/status-v0.1-blue" alt="status">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="license">
</p>

# Lore Forge

**AI-assisted narrative design framework. Build and maintain a living Story Bible through structured interviews, knowledge management, and consistency checking.**

Lore Forge treats story creation as **knowledge engineering** — not text generation. It helps creators design narrative RPGs, visual novels, interactive fiction, and tabletop campaigns with long-term maintainability as the first priority.

---

## Philosophy

| Traditional AI Writing | Lore Forge |
|------------------------|------------|
| Idea → Generate Story | Idea → Interview → Story Bible → Character Design → Timeline → Memory Graph → Narrative Design → Dialogue → Export |

The **Story Bible is the single source of truth.** Everything else is derived from it.

---

## Framework

```
lore-forge/
├── AGENTS.md          Cross-platform AI agent instructions
├── CLAUDE.md          Claude Code adapter; points to AGENTS.md
├── .bootstrap/        Framework self-construction tools
├── agents/            5 specialized AI agents with defined boundaries
├── prompts/           6 workflow templates for agent invocation
├── templates/         3 genre project scaffolds
├── docs/              Framework documentation content
├── site/              VitePress site container for GitHub Pages
└── projects/          User workspace (active / archived / templates)
```

### Five Agents

| Agent | Role | Phase |
|-------|------|-------|
| **Lore Architect** | Worldbuilding & knowledge layer | 1 — Concept Discovery |
| **Character Therapist** | Character psychology & growth arcs | 2 — Character Discovery |
| **Narrative Designer** | Chapter/scene structure & pacing | 3–5 — Timeline → Narrative |
| **Dialogue Writer** | Character voice & subtext | 6 — Dialogue Creation |
| **Lore Auditor** | Cross-module consistency checks | 7 — Consistency Review |

### Six Workflows

| Workflow | Input | Output |
|----------|-------|--------|
| Interview | User responses | Vision, Themes, World Rules (deferred-write, bulk-built on confirmation) |
| Generate Character | Character concept | Full psychological profile |
| Chapter Planning | Story Bible | Chapter outline + dependency graph |
| Generate Scene | Chapter context | Scene definition |
| Generate Dialogue | Scene + character profiles | Annotated dialogue script |
| Review Consistency | All Story Bible modules | Audit report (violations/warnings) |

### Three Templates

| Template | Skeleton | Game-Specific Module |
|----------|----------|---------------------|
| `narrative_rpg` | Chapters + Quests | `quests/` |
| `visual_novel` | Common Route + Branches | `story/routes/` |
| `interactive_fiction` | State Graph + Nodes | `events/` |

---

## Usage Guide

Lore Forge is designed to work with AI coding and document agents such as Codex, Claude Code, OpenCode, Hermes Agent, Cursor, GitHub Copilot agents, Gemini CLI, and similar tools.

Start by opening this repository in your AI assistant. Most agent platforms will read `AGENTS.md` automatically or can be asked to read it once. Claude Code can use `CLAUDE.md`, which points back to `AGENTS.md`.

You act as the creative director. The AI reads the framework instructions, selects the right Lore Forge agent, and follows the matching workflow.

---

### Setup

Clone the repository and open it in your AI assistant:

```bash
git clone https://github.com/immane/lore-forge.git
cd lore-forge
```

**Before you start:** ask your agent to set up the required MCPs automatically:

```
Read REQUIREMENT.md. Detect my platform and set up the minimum required MCP servers.
```

Then restart your platform. See [REQUIREMENT.md](./REQUIREMENT.md) for manual setup and per-platform details.

If your assistant does not automatically load repository instructions, start with:

```
Read AGENTS.md and verify that Lore Forge is ready to use.
```

---

### Quick Start

Create a new project:

```
Create a new Lore Forge project.

Project Name: Moonlight
Genre: Narrative RPG
Inspirations: To The Moon, Finding Paradise
Themes: Regret, Forgiveness, Memory
Target Length: 6-8 hours
Target Platform: PC
```

The AI should scaffold the project under `projects/active/moonlight/`, then begin the concept discovery interview.

Continue an existing project:

```
Continue the Moonlight project.
Find the highest-impact missing Story Bible information and ask me the next questions.
```

Create a character:

```
For Moonlight, create the protagonist Luna.
Use the Character Therapist workflow and start the character discovery interview.
```

Plan chapters or routes:

```
For Moonlight, plan the chapter structure from the current Story Bible.
Define acts, chapter allocation, dependency graph, and scene-by-scene outline.
```

Write a scene:

```
For Moonlight, generate scene definitions for Chapter 01.
Use the Narrative Designer workflow and preserve Story Bible canon.
```

Write dialogue:

```
For Moonlight, write dialogue for the Chapter 01 opening scene.
Use established character profiles, voice signatures, subtext, and knowledge boundaries.
```

Run an audit:

```
Run a full Lore Forge consistency audit on projects/active/moonlight/.
Report critical contradictions, warnings, and suggested fixes with file references.
```

Export:

```
The Story Bible at projects/active/moonlight/ is complete and audited.
Export JSON Event Graph, Godot Dialogic timeline, novel manuscript Markdown, and screenplay reference files.
```

If you use OpenCode, `opencode.json` also defines shorthand commands for new project creation, project continuation, and audits.

---

### Full Workflow

Below is the complete workflow from a blank folder to a game-ready or manuscript-ready export. You can invoke each step with natural language; the AI should use `AGENTS.md`, the files in `agents/`, and the matching prompt in `prompts/` automatically.

---

### Phase 1 — Concept Discovery

This is where the story begins. The Lore Architect agent interviews you to extract your world's foundation. You don't need to have everything figured out — the interview process discovers the story with you.

Example request:

```
Create a new Lore Forge project and start the concept discovery interview.

Project Name: Moonlight
Genre: Narrative RPG
Inspirations: To The Moon, Finding Paradise
Themes: Regret, Forgiveness, Memory
Target Length: 6-8 hours
Target Platform: PC
```

The AI scaffolds your project at `projects/active/moonlight/` with the full Story Bible directory structure, then starts the interview in **deferred write mode**. Answers accumulate in `.pending/interview_scratch.md` for fast conversation flow. When you say `build` or `commit`, the AI batch-builds all Story Bible files at once.

The Lore Architect will ask structured questions about:

- **Emotional Core** — "What feeling should the player carry after the story ends?"
- **Genre & Tone** — "Where on the optimism—pessimism scale does this sit?"
- **Thematic Anchor** — "What is the central question this story explores?"
- **World Rules** — "Are there magic systems, advanced technology, or supernatural elements?"
- **Ending Design** — "What endings should the story have? What makes each feel earned?"
- **Content Boundaries** — "Any topics, tones, or content types to avoid?"

Answer each question. Your answers are recorded to `.pending/interview_scratch.md` — fast, conversational, no multi-file writes per answer. When ready, trigger the build:

- `build` / `save` — write all accumulated answers to Story Bible files
- `commit` — write + `git add` + `git commit`

The AI writes your answers into:
- `projects/active/moonlight/story/vision.md`
- `projects/active/moonlight/story/themes.md`
- `projects/active/moonlight/story/emotional_core.md`
- `projects/active/moonlight/story/ending_design.md`
- `projects/active/moonlight/knowledge/canon.md`
- `projects/active/moonlight/knowledge/rules.md`
- `projects/active/moonlight/knowledge/glossary.md`

Expect 20–50 questions over multiple sessions. You can pause and resume at any time — the Story Bible is persistent.


### Phase 2 — Character Discovery

Once the world foundation is solid, the Character Therapist agent helps you discover your cast.

```
For Moonlight, create the protagonist Luna.
Use the Character Therapist workflow and start the character discovery interview.
```

The Character Therapist digs deep into each character's psychology:

- **Core Wound** — What hurt them? When? How do they cope?
- **Desire Pyramid** — Surface want → Deeper want → True need
- **Fear Ladder** — Minor anxiety → Major fear → Existential terror
- **Defense Mechanism** — How do they protect themselves?
- **Self-Deception** — What lie do they tell themselves?
- **Voice Signature** — Speech patterns, vocabulary, verbal tics, silence patterns
- **Growth Arc** — Who are they at the start vs. the end? What changes them?

Output per character: `projects/active/moonlight/characters/luna.md`

Repeat for each major character. The Character Therapist ensures:
- Every character has internal contradictions (no perfect characters)
- Voice signatures are distinct (no two characters sound the same)
- Relationships are bidirectional (if A fears B, B's profile reflects it)

```
Now create the antagonist. Their name is Sol.
Also create Luna's mentor figure and her childhood friend.
```


### Phase 3 — Timeline Construction

With characters defined, the Narrative Designer builds the world-level chronology.

```
For Moonlight, construct the world timeline and character timelines.
Populate the Story Bible timeline from the approved story and character files.
```

The AI builds:
- **World Eras** — defining events, societal state, key figures per era
- **Story Timeline** — chapter-level chronology with in-world dates and durations
- **Character Timelines** — birth, formative events, story entry, story exit per character
- **Convergence Points** — where character threads intersect

Output: `projects/active/moonlight/story/timeline.md`


### Phase 4 — Memory Graph

The Narrative Designer maps subjective memories — what each character remembers, when they remember it, and whether those memories are reliable.

```
For Moonlight, construct the memory graph.
For each major character, trace their memory chains:
what formative memories shape them, what triggers recall them, and are any memories
repressed or false?
```

Output: `projects/active/moonlight/memories/_index.md` and per-character memory files.

The Memory Graph is distinct from the Timeline — the timeline is objective, memories are subjective. A character may remember events differently from how they actually happened. This gap between memory and truth creates dramatic tension.


### Phase 5 — Narrative Design

Now the raw materials exist. The Narrative Designer structures them into chapters and scenes.

```
For Moonlight, plan the chapter structure from the current Story Bible.
Define acts, chapter allocation, dependency graph, and the scene-by-scene outline.
```

The AI produces:

- **Act Structure** — 3-act or 5-act with act break events
- **Tension Curve** — dramatic tension mapped across all chapters
- **Dependency Graph** — which chapters must precede which, which run in parallel
- **Chapter Details** — synopsis, POV character, emotional arc, required scenes per chapter

Output: `projects/active/moonlight/story/chapters/_outline.md`

Then generate individual scenes:

```
For Chapter 01 of Moonlight, generate all scene definitions.
```

Each scene includes:
- Dramatic function (Revelation / Escalation / Reversal / Relief / Setup)
- Tension position on the chapter arc
- Emotional shift (reader's start emotion → end emotion)
- POV character(s), characters present, location, time
- Information flow (what reader learns, what characters learn, dramatic irony)
- Foreshadowing integration (seeds to plant or pay off)

Output: `projects/active/moonlight/story/chapters/01-*.md`


### Phase 6 — Dialogue Creation

Scenes are defined. Now the Dialogue Writer gives each character a voice.

```
For Moonlight, write the dialogue for Chapter 01 opening scene.
Annotate each line with emotional state,
subtext, and relationship tension notes.
```

The Dialogue Writer produces annotated dialogue:

```markdown
**Luna** [state: anxious, hopeful]
{subtext: She's testing whether Sol remembers — she doesn't want to ask directly}
"Do you ever think about that night?"

**Sol** [state: guarded, dismissive]
{subtext: He remembers perfectly but won't give her the satisfaction}
"Which night? There were a lot of nights."
```

Output: `projects/active/moonlight/dialogue/01-opening.md`

The Dialogue Writer enforces:
- Every character sounds distinct (remove speaker tags — can you still tell who's talking?)
- No character knows what they haven't been told (knowledge boundary check)
- All in-world terms match the glossary
- Subtext exists in every exchange (characters rarely say exactly what they mean)


### Phase 7 — Consistency Review

Before anything is considered final, the Lore Auditor checks everything.

```
Run a full consistency audit on projects/active/moonlight/.
Report all violations, warnings, and suggestions.
```

The Auditor cross-references every module:

- **Timeline Checks** — does event B happen before event A references it?
- **Character Knowledge** — does any character know something they haven't been told?
- **Voice Consistency** — does each character's dialogue match their voice signature?
- **Rule Compliance** — does anything violate the world rules defined in `knowledge/rules.md`?
- **Foreshadowing** — every planted seed must have a payoff; every payoff must have a seed
- **Ending Reachability** — are all intended endings still reachable?

Output: `projects/active/moonlight/_audit/YYYY-MM-DD-full-report.md`

Findings are classified:
- **Critical** — hard contradiction, must fix before canonization
- **High** — OOC behavior, voice inconsistency, blocks canonization
- **Medium** — tonal drift, weak motivation (advisory)
- **Low** — stylistic suggestion

Targeted audits (single character, single chapter) can be run at any time:

```
For Moonlight, run a targeted audit on the character Luna.
Check her dialogue against her psychological profile.
```


### Phase 8 — Export

When the Story Bible passes audit, export to game-ready or manuscript-ready formats.

```
The Story Bible at projects/active/moonlight/ is complete and audited.
Export to the following formats:
1. JSON Event Graph (for Unity/Custom Engine)
2. Godot Dialogic timeline
3. Novel manuscript Markdown (for prose revision)
4. Screenplay format (for reference/VO recording)
```

Output:
- `projects/active/moonlight/exports/json/` — structured JSON for game engines
- `projects/active/moonlight/exports/godot/` — Dialogic-compatible timeline files
- `projects/active/moonlight/exports/novel/` — outline exports, prose drafts, and manuscript Markdown
- `projects/active/moonlight/exports/screenplay/` — Fountain-format screenplay

Novel export is a derived prose pass. It should transform approved Story Bible, scene, character, and dialogue content into readable manuscript form without inventing new canon.


### Iteration Cycle

Lore Forge is designed for continuous iteration, not one-shot generation:

```
1. Interview (deferred write) → Story Bible grows
2. New content written (characters, scenes, dialogue)
3. Lore Auditor checks consistency
4. Fix issues, re-interview if gaps found
5. Repeat until Story Bible is complete
6. Export
```

You can revisit any phase at any time. The Story Bible is the persistent source of truth — adding a new character in month 6 is the same process as creating the first character on day 1.

For large projects, run targeted audits during active development and full-project audits at milestone gates (end of an act, before export).

---

## Agent Lifecycle

```
Concept Discovery  →  Character Discovery  →  Timeline  →  Memory Graph
        ↓                                                         ↓
  Export           ←  Consistency Review  ←  Dialogue  ←  Narrative Design
```

All 8 phases are orchestrated through the prompts and agents defined in the framework. Each agent reads from upstream modules, writes to its own domain, and delegates cross-domain changes to the responsible agent.

---

## Documentation

Full documentation is available at **[lore-forge docs](https://immane.github.io/lore-forge/)**.

| Doc | Description |
|-----|-------------|
| [Architecture](https://immane.github.io/lore-forge/architecture) | Framework design & components |
| [Workflow](https://immane.github.io/lore-forge/workflow) | Agent lifecycle & data flow |
| [Project Structure](https://immane.github.io/lore-forge/project-structure) | Directory layout & Story Bible design |

---

## License

MIT
