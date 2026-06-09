# Route Outline

## Route Philosophy

{What makes each route distinct? Routes should not be "the same story with a different love interest" — each route explores a different facet of the central question.}

## Route Structure

```
                    ┌──→ Alice Route ──→ Alice Ending A
                    │               └──→ Alice Ending B
Common Route ──────┼──→ Bob Route   ──→ Bob Ending A
  (Ch.01-03)       │               └──→ Bob Ending B
                    └──→ Carol Route ──→ Carol Ending (True)
```

## Common Route

| Scene | Title | Dramatic Function | Key Choice | Routes Affected |
|-------|-------|-------------------|------------|-----------------|
| CR-01 | {title} | Setup / Hook | {choice presented} | All |
| CR-02 | {title} | Character Intro | {choice presented} | All |
| CR-03 | {title} | Route Split | {final common choice} | Splits to routes |

## Route: {Route Name}

### Overview
- **Focus Character**: {name}
- **Thematic Lens**: {which theme is explored through this route?}
- **Emotional Arc**: {emotion} → {emotion} → {emotion}
- **Route Tone**: {how does this route feel compared to others?}

### Scene Sequence

| Scene | Title | Dramatic Function | Emotional Arc | Key Choice | Consequences |
|-------|-------|-------------------|---------------|------------|--------------|
| R-01  | {title} | ... | {emotion} → {emotion} | {choice} | {outcome} |
| R-02  | {title} | ... | ... | — | — |
| R-03  | {title} | Route Climax | ... | {final choice} | → Ending A / B |

### Endings

#### Ending A: {Name}
- **Type**: good / true / bittersweet / bad
- **Conditions**: {which choices lead here}
- **Emotional Payoff**: ...
- **Thematic Resolution**: ...

#### Ending B: {Name}
- ...

## Route Interconnections

{Do events in one route inform/affect another? Shared scenes? Parallel events seen from different perspectives?}

| Connection | Route A | Route B | Shared Element |
|------------|---------|---------|----------------|
| {description} | {route} | {route} | {scene/event/reveal} |

## Choice Design Principles

- Common route choices determine route entry, not personality flavor
- Per-route choices determine ending and character relationship depth
- No "fake choices" that lead to the same outcome (unless intentionally subverting)
- Major choices should be telegraphed (save prompt recommended)
- Maximum {N} active flags tracked simultaneously

## Scene Dependency Graph

```
CR-01 → CR-02 → CR-03 ─┬→ AR-01 → AR-02 → AR-03 ─┬→ AR-EndA
                        │                          └→ AR-EndB
                        ├→ BR-01 → BR-02 → BR-03 ──→ BR-EndA
                        └→ CR-01 → CR-02 → CR-03 ─┬→ CR-EndA
                                                    └→ CR-EndB
```
