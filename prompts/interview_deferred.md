# Interview (Deferred) — Conversational Discovery + Batch Build

## Design Principle

Separate discovery from construction. Keep the interview conversational — rapid Q&A with no multi-file modification overhead. Build structured Story Bible files only when the user explicitly confirms.

**This is the default interview mode for Lore Forge.**

## Trigger Conditions

- New project created via `project_creator.md`
- User requests "start a new story", "explore a story idea", or "interview"
- User explicitly invokes Phase 1 (Concept Discovery)

## Responsible Agent

Lore Architect

## Dependencies

- Project template from `templates/{genre}/` must exist
- `project.md` must be initialized (even if empty)
- `.pending/interview_scratch.md` created on first round

## Phase A: Conversation Loop

### Per-Round Steps

1. Read `.pending/interview_scratch.md` + existing Story Bible files
2. Identify highest-priority unanswered areas (Vision > Themes > Emotional Core > Characters > Conflict > Timeline > Memories > Chapters > Endings)
3. Ask at most **3 questions** per round
4. After user answers, append Q&A to scratch file
5. Inform user: answers recorded — continue or build?
6. If user signals "continue" — loop to step 1
7. If user triggers build — proceed to Phase B

### Question Rules

- Questions must be concise, specific, high-impact
- Never ask filler questions: appearance, names, irrelevant details
- If answer is vague, ask 1-2 clarifying follow-ups before moving on
- Never exceed 3 questions per round
- Never invent answers — mark unknowns as `_pending`

### Scratch File Format

**Location:** `projects/active/<name>/.pending/interview_scratch.md`

```markdown
# Interview Scratch — <Project Name>
# Started: YYYY-MM-DD

## [Round 1] — YYYY-MM-DD HH:MM

### Q: <question text>
**Area:** <area-tags>
**A:** <user answer>

### Q: <follow-up>
**Area:** <area-tags>
**A:** <user answer>

---

## [Round 2] — YYYY-MM-DD HH:MM

...
```

### Area Tags

Map each Q&A to its target Story Bible file(s):

| Area Tag | Target File(s) |
|----------|---------------|
| `vision` | `story/vision.md`, `project.md` |
| `themes` | `story/themes.md` |
| `emotional_core` | `story/emotional_core.md` |
| `characters` | `characters/<name>.md` |
| `timeline` | `story/timeline.md` |
| `canon` | `knowledge/canon.md` |
| `rules` | `knowledge/rules.md` |
| `glossary` | `knowledge/glossary.md` |
| `factions` | `knowledge/canon.md` |
| `endings` | `story/ending_design.md` |
| `foreshadowing` | `story/foreshadowing.md` |
| `symbolism` | `knowledge/symbolism.md` |
| `emotional_map` | `knowledge/emotional_map.md` |

## Phase B: Batch Build

### Trigger Phrases

| Action | Phrases (EN) | Phrases (ZH) |
|--------|-------------|-------------|
| **Write only** (build files, no git) | `build`, `save` | `写入`, `保存`, `构建`, `好了`, `写入吧`, `就这么写` |
| **Write + commit** (build files + `git add` + `git commit`) | `commit`, `git commit` | `提交`, `提交代码`, `提交并保存` |

### Build Steps

1. Parse all accumulated Q&A from `.pending/interview_scratch.md`
2. Distribute answers to target Story Bible files by area tags
3. Write all modified Story Bible files
4. Apply validation rules:
   - `story/vision.md` must be exactly one paragraph
   - Every theme must link to at least one proposed scene or chapter
   - `knowledge/rules.md` must be falsifiable — rules must have clear violations
5. Report build summary: files written, remaining gaps, next recommended areas
6. If "commit" trigger: `git add` modified files + auto-generate commit message summarizing what was built
7. Archive scratch file: move to `.pending/archive/interview_scratch_YYYY-MM-DD.md`

### Build Rules

- Never overwrite user-authored canon unless the new answer explicitly contradicts and user confirms the override
- Mark unresolved/under-answered items as `_pending` — do not invent
- If two answers contradict, surface the conflict before writing — do not silently merge

## Outputs (After Build)

- Populated `project.md`
- Populated `story/vision.md`
- Populated `story/themes.md`
- Populated `story/emotional_core.md`
- Initial `story/timeline.md`
- Initial `story/ending_design.md`
- Initial `story/foreshadowing.md`
- Initial `knowledge/canon.md`
- Initial `knowledge/glossary.md`
- Initial `knowledge/rules.md`
- Initial `knowledge/symbolism.md`
- Initial `knowledge/emotional_map.md`
- Initial character stub files in `characters/`
- Archived scratch file in `.pending/archive/`

## Example Interaction

```
AI: Q1: What is the core emotional experience of this story?
User: About rebuilding oneself after loss, ultimately feeling warmth
AI: Noted. Q2: Are there any special rules or power systems in this world?
User: There's moonlight magic, but using it consumes memories
AI: Noted. Continue interviewing or build now?
User: Continue
AI: Q3: Who are the main conflicting parties?
User: Three families fighting over the inheritance of the Moonstone
AI: Noted. Continue or build?
User: commit
AI: [parsing scratch → writing vision, themes, rules, canon, factions]
    [git add -A && git commit -m "Build Story Bible from interview — vision, themes, canon, rules, factions"]
    Done. Next phase: Character Discovery.
```

## Validation Rules

- `story/vision.md` must be one paragraph — no more, no less
- Every theme in `story/themes.md` must link to at least one proposed scene/chapter
- `knowledge/rules.md` must be falsifiable — rules must have clear violations
- If user cannot answer a question, mark it as `_pending` — do not invent
