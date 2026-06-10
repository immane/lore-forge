# Quest Index

## Purpose

Track objectives, investigations, tasks, and player goals across branching interactive fiction states. Quests may be explicit, hidden, optional, or inferred from player choices.

## Registry

| ID | Title | Type | Branch Scope | Trigger | Status |
|----|-------|------|--------------|---------|--------|
| Q-001 | {quest name} | main / optional / investigation / hidden | {branch or global} | {node or condition} | planned / drafted / complete |

## Quest Details

Each quest file (`quests/{name}.md`) should contain:

- **Synopsis**: one-sentence summary
- **Quest Type**: main / optional / investigation / hidden
- **Branch Scope**: global, branch-specific, or conditional
- **Prerequisites**: variables, previous choices, flags, or remembered facts
- **Objectives**: player-facing or hidden goals
- **Choices & Consequences**: decision points and branch outcomes
- **Required Characters**: characters involved
- **Required Locations**: locations involved
- **State Changes**: variables, flags, memory updates, or unlocked nodes
- **Failure State**: what happens if the goal becomes impossible
- **Narrative Purpose**: what this quest contributes to theme, agency, or ending design

## Branch-Quest Matrix

| Branch | Quest | Unlock Condition | State Changes |
|--------|-------|------------------|---------------|
| {branch} | Q-001 | {condition} | {variables or flags} |
