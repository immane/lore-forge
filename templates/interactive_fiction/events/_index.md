# Event Index

## Purpose

In Interactive Fiction, events replace the quest system. Events are discrete, player-triggered or conditional occurrences in the world. They may be optional, required, or hidden.

## Event Registry

| ID | Title | Type | Trigger | Node(s) | State Changes | Status |
|----|-------|------|---------|---------|---------------|--------|
| EV-001 | {event name} | discovery / encounter / puzzle / revelation / choice | {condition or player action} | N-{NNN} | {var = value} | planned / drafted / complete |
| EV-002 | ... | ... | ... | ... | ... | ... |

## Event Types

### Discovery Events
{Player finds something — an object, a location, a piece of information.}

| ID | Discovery | Method | Consequence |
|----|-----------|--------|-------------|
| EV-{NNN} | {what is found} | {how it's found} | {what changes} |

### Encounter Events
{Player meets or interacts with a character.}

| ID | Character | Context | Dialogue Node | Outcome Options |
|----|-----------|---------|---------------|-----------------|
| EV-{NNN} | {name} | {situation} | D-{NNN} | {possible results} |

### Puzzle Events
{Player must solve something to proceed.}

| ID | Puzzle | Solution | Hints Available | Failure State |
|----|--------|----------|----------------|---------------|
| EV-{NNN} | {description} | {solution} | {N} hints | {what happens on failure} |

### Revelation Events
{Player learns something that changes their understanding.}

| ID | Revelation | Delivery Method | Affected Nodes | State Change |
|----|-----------|----------------|---------------|--------------|
| EV-{NNN} | {what is revealed} | {how it's revealed} | N-{NNN}, N-{MMM} | {var = value} |

### Choice Events
{Major decision points defined as events for tracking purposes.}

| ID | Choice Description | Options | Consequences |
|----|-------------------|---------|--------------|
| EV-{NNN} | {description} | A: {opt} / B: {opt} / C: {opt} | A → ..., B → ..., C → ... |

## Event Dependency Graph

```
EV-001 → EV-002 ─┬→ EV-004
                 └→ EV-003 → EV-005
```

## Event-Chapter Matrix

| Node Range | Required Events | Optional Events | Hidden Events |
|------------|----------------|-----------------|---------------|
| START – N-010 | EV-001 | EV-003, EV-005 | — |
| N-011 – N-020 | EV-002 | EV-007 | EV-012 |
