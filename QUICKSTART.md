# Quickstart

Use this file when you want to start a Lore Forge project quickly without reading the full documentation first.

## Before You Start

Lore Forge needs **file read/write**, **cross-session memory**, and **content search**.

The easiest way to set up: ask your agent to install everything for you:

```text
Read REQUIREMENT.md. Detect which platform you are running on.
Set up the minimum required MCP servers for this platform.
After setup, verify and report which capabilities are now available.
```

Then restart your platform. That's it.

See [REQUIREMENT.md](./REQUIREMENT.md) for manual setup and per-platform details.

## 1. Open The Repository

```bash
git clone https://github.com/immane/lore-forge.git
cd lore-forge
```

Open the folder in your AI assistant or agent platform.

Supported tools include Codex, Claude Code, OpenCode, Hermes Agent, Cursor, GitHub Copilot agents, Gemini CLI, and similar coding or document agents.

Most platforms should read `AGENTS.md` automatically. If not, send:

```text
Read AGENTS.md and verify that Lore Forge is ready to use.
```

## 2. Create A Project

Copy this prompt into your AI assistant:

```text
Create a new Lore Forge project.

Project Name: Moonlight
Genre: Narrative RPG
Inspirations: To The Moon, Finding Paradise
Themes: Regret, Forgiveness, Memory
Target Length: 6-8 hours
Target Platform: PC
```

The assistant should create the project under:

```text
projects/active/moonlight/
```

Then it should start the concept discovery interview in **deferred write mode** — questions are fast and conversational, answers go to a scratch file, and Story Bible files are built in one batch when you say `build` or `commit`.

## 3. Continue The Interview

Use this whenever you return to the project:

```text
Continue the Moonlight project.
Read the current Story Bible, find the highest-impact missing information, and ask me the next focused questions.
```

Answer the questions naturally. Your answers are recorded to a scratch file for fast conversation flow. When ready, say `build` to write Story Bible files, or `commit` to build and git commit.

## 4. Create Characters

```text
For Moonlight, create the protagonist Luna.
Use the Character Therapist workflow and start the character discovery interview.
```

Then repeat for major characters:

```text
For Moonlight, create the antagonist Sol.
Use the Character Therapist workflow and make sure their psychology, voice, and relationship to Luna are distinct.
```

## 5. Build The Story Structure

Timeline:

```text
For Moonlight, construct the world timeline and character timelines from the approved Story Bible.
```

Memory graph:

```text
For Moonlight, construct the memory graph for all major characters.
Track formative memories, triggers, false memories, repressed memories, and conflicts between memory and truth.
```

Chapters or routes:

```text
For Moonlight, plan the chapter structure from the current Story Bible.
Define acts, chapter allocation, dependency graph, and scene-by-scene outline.
```

Scenes:

```text
For Moonlight, generate scene definitions for Chapter 01.
Use the Narrative Designer workflow and preserve Story Bible canon.
```

## 6. Write Dialogue

```text
For Moonlight, write dialogue for the Chapter 01 opening scene.
Use established character profiles, voice signatures, subtext, relationship tension, and knowledge boundaries.
```

## 7. Audit Before Export

Run targeted audits during development:

```text
For Moonlight, run a targeted audit on Luna.
Check her dialogue, decisions, knowledge boundaries, and growth arc against her character profile.
```

Run a full audit before export:

```text
Run a full Lore Forge consistency audit on projects/active/moonlight/.
Report critical contradictions, warnings, and suggested fixes with file references.
```

## 8. Export

After the Story Bible passes audit:

```text
The Story Bible at projects/active/moonlight/ is complete and audited.
Export JSON Event Graph, Godot Dialogic timeline, novel manuscript Markdown, and screenplay reference files.
```

Expected output locations:

```text
projects/active/moonlight/exports/json/
projects/active/moonlight/exports/godot/
projects/active/moonlight/exports/novel/
projects/active/moonlight/exports/screenplay/
```

For novel-only export:

```text
Export Moonlight as a novel manuscript.
Use the approved Story Bible, scene plan, character profiles, dialogue, and audit results.
Create an outline export, chapter prose drafts, and a continuous manuscript Markdown file.
Do not invent new canon; mark missing information as TODOs.
```

## Useful Short Prompts

```text
Continue the active Lore Forge project.
```

```text
Find the next missing Story Bible decision and ask me one question.
```

```text
Audit the current chapter for timeline, character knowledge, and canon conflicts.
```

```text
Summarize the current project state and recommend the next workflow step.
```

## Rule Of Thumb

Do not ask the assistant to "write the whole story" first.

Use this loop instead:

```text
Interview -> Story Bible -> Characters -> Timeline -> Memory Graph -> Chapters -> Scenes -> Dialogue -> Audit -> Export
```
