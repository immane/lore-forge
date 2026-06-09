# Review Consistency — Cross-Module Audit Workflow

## Trigger Conditions

- A new artifact is submitted for canonization (character profile, scene, dialogue file, chapter)
- User requests "check consistency" or "audit the story bible"
- A milestone is reached (end of act, end of chapter planning, end of character creation)
- Before any export operation (Phase 8)
- User explicitly invokes Phase 7

## Responsible Agent

Lore Auditor

## Dependencies

- All Story Bible modules (read-only): `story/`, `characters/`, `memories/`, `locations/`, `dialogue/`, `quests/` or `events/`, `knowledge/`
- The specific artifact(s) to audit
- Previous audit reports in `_audit/` (for unresolved issues)

## Workflow

### Step 1: Scope Definition

1. **Target** — What artifact(s) are being audited? (single file / module / full project)
2. **Depth** — Targeted check or full cross-reference?
3. **Baseline** — Which previous audit report serves as reference for unresolved issues?

### Step 2: Timeline Checks

4. **Causality** — Does every event follow from its stated cause?
5. **Chronology** — Are all dated events in correct order?
6. **Duration** — Are elapsed times plausible? (No travel in impossible time)
7. **Concurrency** — Do simultaneous events conflict?

### Step 3: Character Consistency Checks

8. **Knowledge Boundaries** — Does any character know what they haven't been told?
9. **Behavioral Consistency** — Do character actions match their psychological profile?
10. **Voice Consistency** — Does each character's dialogue match their defined voice signature?
11. **Relationship Consistency** — Are all relationships bidirectional?
12. **Growth Arc** — Is character change progressive or does it regress without cause?

### Step 4: World Rule Checks

13. **Rule Compliance** — Does anything violate rules defined in `knowledge/rules.md`?
14. **Rule Gaps** — Is any event unexplained by existing rules? (Flag for Lore Architect)
15. **Glossary Compliance** — Are all in-world terms used consistently?

### Step 5: Narrative Structure Checks

16. **Foreshadowing** — Every planted seed must have a payoff; every payoff must have a planted seed
17. **Thematic Consistency** — Do scenes/chapters align with their assigned themes?
18. **Tension Curve** — Does the actual scene-by-scene tension match the planned curve?
19. **Ending Reachability** — Are all intended endings still reachable given current scene structure?

### Step 6: Classification

For each finding, assign:

20. **Severity**:
    - **Critical** — Hard contradiction, timeline break, knowledge leak, rule violation (blocks canonization)
    - **High** — OOC behavior, voice inconsistency, missing payoff (blocks canonization)
    - **Medium** — Tonal drift, weak motivation, minor chronology issue (advisory)
    - **Low** — Stylistic inconsistency, missed thematic opportunity (suggestion)

21. **Trace** — Which two (or more) artifacts conflict? Include file paths and line references.

### Step 7: Report Generation

22. Compile all findings into structured audit report
23. Update audit index
24. Route findings to responsible agents:
    - Knowledge issues → Lore Architect
    - Character issues → Character Therapist
    - Structure issues → Narrative Designer
    - Dialogue issues → Dialogue Writer

## Inputs

- Target artifact(s) for audit
- Full Story Bible (read-only)
- Previous audit report (if applicable)
- Scope parameter: `targeted` | `module` | `full`

## Outputs

- `_audit/{date}-{scope}-report.md` — structured audit report
- `_audit/_index.md` — updated audit log
- `story/foreshadowing.md` — flagged unfulfilled seeds
- `knowledge/canon.md` — marked newly confirmed/deprecated facts (via Lore Architect)

## Output Format

```markdown
# Audit Report: {date} — {scope}

## Summary
- Artifacts audited: {count}
- Critical: {count}
- High: {count}
- Medium: {count}
- Low: {count}
- Status: PASS / BLOCKED / ADVISORY

## Critical Findings

### [{severity}] {title}
- **Artifacts**: `path/to/file1.md#L{NN}` ↔ `path/to/file2.md#L{NN}`
- **Description**: ...
- **Recommended Fix**: ...
- **Responsible Agent**: ...

## High Findings
...

## Warnings (Medium)
...

## Suggestions (Low)
...

## Unresolved from Previous Audit
...
```

## Validation Rules

- Every Critical finding must be traceable to at least two specific artifacts
- If a finding is acknowledged by user (intentional inconsistency), mark as "acknowledged" — do not re-report
- Full-project audit must complete within reasonable scope — if story bible exceeds threshold, recommend module-by-module audit
- If zero findings: explicitly state "No inconsistencies detected" — do not fabricate issues
- Previous audit's unresolved findings must be re-checked and updated in the new report
