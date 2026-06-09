# Architecture

Lore Forge is an AI-assisted narrative design framework. It treats story creation as **knowledge engineering** rather than text generation.

## Directory Structure

See [Project Structure](/project-structure) for the complete directory tree.

## Design Principles

- **Maintainability > Feature Count**
- **Consistency > Creativity**
- **Long-term Collaboration > One-shot Generation**

## Key Components

| Layer | Directory | Purpose |
|-------|-----------|---------|
| Bootstrap | `.bootstrap/` | Framework self-construction |
| Agents | `agents/` | 5 long-lived AI agents with defined boundaries |
| Prompts | `prompts/` | 6 workflow templates for agent invocation |
| Templates | `templates/` | 3 genre project scaffolds |
| Projects | `projects/` | Isolated user workspaces |
| Docs | `docs/` | Framework documentation |
