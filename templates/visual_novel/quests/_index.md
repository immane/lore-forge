# Quest Index

## Purpose

Track optional objectives, route-specific goals, character requests, and player-facing tasks that affect scene access, relationship state, or ending conditions.

## Registry

| ID | Title | Type | Route | Trigger | Resolution State |
|----|-------|------|-------|---------|------------------|
| Q-001 | {quest name} | route / character / mystery / optional | {route} | {scene or condition} | planned / drafted / complete |

## Quest Details

Each quest file (`quests/{name}.md`) should contain:

- **Synopsis**: one-sentence summary
- **Quest Type**: route / character / mystery / optional
- **Route Scope**: common route, specific route, or cross-route
- **Trigger Conditions**: flags, scenes, choices, or relationship thresholds
- **Objectives**: player-facing tasks or discoveries
- **Choices & Consequences**: decisions that alter route state
- **Required Characters**: characters involved
- **Required Locations**: locations involved
- **Resolution State**: success, failure, partial, or hidden outcome
- **Narrative Purpose**: what this quest contributes to theme, character growth, or ending design

## Route-Quest Matrix

| Route | Quest | Unlock Condition | Ending Impact |
|-------|-------|------------------|---------------|
| {route} | Q-001 | {condition} | {impact} |
