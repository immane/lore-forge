# Review Consistency

## Purpose

`Review Consistency` is the standard cross-module audit workflow used by Lore Auditor. It checks structural, logical, knowledge-boundary, and foreshadowing consistency before content is formally accepted.

## Trigger Conditions

- new material is about to enter canon
- the user asks for consistency review or Story Bible audit
- a milestone phase has completed
- any export operation is about to run
- the user explicitly asks to enter Phase 7

## Responsible Agent

Lore Auditor

## Dependencies

- read-only access to all Story Bible modules
- target audit artifact(s)
- previous audit reports

## Workflow Structure

### Step 1: Define Audit Scope

1. is the target a single file, a module, or the full project?
2. is this targeted checking or full cross-checking?
3. which historical report is the baseline?

### Step 2: Timeline Checks

4. does causality hold?
5. are dated events in the correct order?
6. are durations plausible?
7. do concurrent events conflict?

### Step 3: Character Consistency Checks

8. are there knowledge leaks?
9. do actions match psychology?
10. does dialogue voice match character definition?
11. are relationships bidirectionally consistent?
12. does a growth arc regress without cause?

### Step 4: World Rule Checks

13. does anything violate `knowledge/rules.md`?
14. are there unexplained rule gaps?
15. does terminology stay consistent with the glossary?

### Step 5: Narrative Structure Checks

16. are all planted seeds recoverable?
17. does theme usage remain coherent?
18. does the tension curve drift from plan?
19. are intended endings still reachable?

### Step 6: Classify Findings

20. assign severity: Critical / High / Medium / Low
21. provide traceable conflict sources for each issue

### Step 7: Generate Report

22. produce a structured report
23. update the audit index
24. route issues to the responsible agent

## Inputs

- target file(s) or module(s)
- full Story Bible
- previous audit history
- scope parameter

## Outputs

- `_audit/{date}-{scope}-report.md`
- `_audit/_index.md`
- risk notes for `story/foreshadowing.md`
- recommendations for canon changes

## Validation Rules

- every Critical issue must be traceable to at least two explicit sources
- user-approved contradictions must be marked as acknowledged
- large full-project audits should recommend module-level breakdown when needed
- if there are no issues, the report must explicitly say so
- unresolved historical issues must be rechecked and status-updated
