# Branch Outline

## Branch Philosophy

{What is the player's relationship to the story? Are they a character with defined motives, or a blank-slate reader making choices? Are branches about moral dilemmas, strategic decisions, exploration, or relationship building?}

## World State Design

{Define the key state variables that track player decisions.}

| Variable | Type | Initial Value | Range | Description |
|----------|------|---------------|-------|-------------|
| {var_name} | boolean / int / string | {default} | {range} | {what this tracks} |
| {var_name} | boolean / int / string | {default} | {range} | ... |

## Passage/Node Structure

### Opening

| Node ID | Title | Function | Choices | Leads To |
|---------|-------|----------|---------|----------|
| START   | {title} | Hook / Setup | {choice list} | N-001, N-002 |

### Act / Section {N}: {Name}

| Node ID | Title | Function | Prerequisites | Choices | Leads To | State Changes |
|---------|-------|----------|---------------|---------|----------|---------------|
| N-{NNN} | {title} | {revelation / decision / exploration / confrontation} | {conditions} | {choices} | {targets} | {var = value} |

### Endings

| Node ID | Title | Type | Conditions | Resolution |
|---------|-------|------|------------|------------|
| END-001 | {title} | {good/bad/neutral/secret} | {required state} | {what happens} |

## Branch Map

```
                    ┌──→ N-003 ──→ N-004 ──→ END-001
START → N-001 → N-002 ──→ N-005 ──→ N-006 ──┬──→ END-002
                    │                        └──→ END-003
                    └──→ N-007 ──→ N-008 ──→ END-004
```

## Major Decision Points

| Decision | Node | Stakes | Short-Term Consequence | Long-Term Consequence |
|----------|------|--------|----------------------|----------------------|
| {description} | N-{NNN} | {what's at stake} | {immediate effect} | {later effect} |

## State Gate Definitions

{Conditions that gate access to nodes.}

| Gate | Condition | Gated Nodes | Purpose |
|------|-----------|-------------|---------|
| G-001 | {var} >= {value} | N-{NNN} | {why this gate exists} |
| G-002 | {var} == {value} AND {var2} == true | N-{NNN}, N-{MMM} | ... |

## Dead Ends & Fail States

| Node ID | Type | Cause | Recovery |
|---------|------|-------|----------|
| N-{NNN} | soft dead end (can backtrack) | {what went wrong} | return to N-{MMM} |
| N-{NNN} | hard fail (game over) | {what went wrong} | restart from checkpoint |

## Replay Value Design

{What makes a second playthrough different from the first?}

- **Knowledge Gaps**: information hidden on first playthrough that changes context on replay
- **Locked Content**: nodes only accessible with certain state combinations
- **Narrative Layers**: surface story vs. what's really happening (only visible on replay)
