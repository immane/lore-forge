# Quest Index

## Registry

| ID | Title | Type | Giver | Target | Chapter Unlock | Status |
|----|-------|------|-------|--------|---------------|--------|
| Q-001 | {quest name} | main / side / character / faction | {NPC} | {objective} | Ch.{N} | planned / drafted / complete |
| Q-002 | ... | ... | ... | ... | ... | ... |

## Quest Details

Each quest file (`quests/{name}.md`) should contain:
- **Synopsis**: one-sentence summary
- **Quest Type**: main / side / character / faction
- **Quest Giver**: who initiates this quest
- **Prerequisites**: quests or conditions that must be completed first
- **Objectives**:
  1. {objective}
  2. {objective}
- **Rewards**: items, abilities, story progression, character development
- **Choices & Consequences**: decision points and their outcomes
- **Required Characters**: who must be in the party
- **Required Locations**: where the quest takes place
- **Stages**: quest log entries per stage
- **Failure State**: what happens if the player fails or abandons
- **Narrative Purpose**: what this quest contributes to the story (theme, character growth, worldbuilding)

## Quest Dependency Graph

```
Q-001 → Q-002 → Q-004
          ↘ Q-003 ↗
```

## Chapter-Quest Matrix

| Chapter | Main Quest | Side Quests Available |
|---------|-----------|----------------------|
| Ch.01 | Q-001 (start) | — |
| Ch.02 | Q-001 (mid) | Q-003, Q-005 |
