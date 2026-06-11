# Requirements

Lore Forge is a pure Markdown framework. It needs three capabilities from your AI platform. This document tells you what they are and exactly how to set them up on each platform.

| # | Capability | Why |
|---|---|---|
| 1 | **File read/write** | Every agent reads and writes `.md` files — the Story Bible is a file tree. |
| 2 | **Cross-session memory** | A Story Bible evolves over many sessions. Without memory, every session starts from zero. |
| 3 | **Content search** | The Lore Auditor cross-references all modules for contradictions. Without search, audits are blind. |

> If your platform lacks memory, Lore Forge degrades to a single-session brainstorming tool — not a Story Bible Engine.

---

## Setup by Platform

### OpenCode

OpenCode provides basic file read/write and content search natively. Everything else needs MCP servers — same as other platforms.

Add this to `opencode.json` (project-level) or `~/.config/opencode/opencode.json` (user-level):

```json
{
  "mcp": {
    "filesystem": {
      "type": "local",
      "command": ["npx", "-y", "@modelcontextprotocol/server-filesystem", "."],
      "enabled": true
    },
    "agentmemory": {
      "type": "local",
      "command": ["npx", "-y", "@agentmemory/mcp"],
      "enabled": true
    },
    "duckduckgo": {
      "type": "local",
      "command": ["npx", "-y", "duckduckgo-mcp-server"],
      "enabled": true
    }
  }
}
```

| Capability | Source | Notes |
|---|---|---|
| File read/write | Native (`read`/`write`/`edit`) + MCP (`@modelcontextprotocol/server-filesystem`) | Native tools sufficient for most operations; filesystem MCP adds directory tree, search, etc. |
| Content search | Native (`grep`/`glob`) | Built-in, no MCP needed |
| Cross-session memory | MCP (`@agentmemory/mcp`) | Critical — OpenCode has no native session memory |
| Web search | MCP (`duckduckgo-mcp-server`) or `firecrawl-mcp` | Both require API key for Firecrawl |

---

### Claude Code

File I/O is native. Add memory and web search via MCP.

Create `.mcp.json` in your project root:

```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"],
      "env": {
        "MEMORY_FILE_PATH": "./.claude-memory.json"
      }
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "${BRAVE_API_KEY}"
      }
    }
  }
}
```

Or use CLI:

```bash
claude mcp add -s project memory -- npx -y @modelcontextprotocol/server-memory
claude mcp add -s project brave-search -e BRAVE_API_KEY="$BRAVE_API_KEY" -- npx -y @anthropic/mcp-server-brave-search
```

Verify: `claude mcp list`. Restart Claude Code.

---

### Cursor

File I/O and content search are native. Memory and web search need MCP.

Create `.cursor/mcp.json` in your project root:

```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"],
      "env": {
        "MEMORY_FILE_PATH": "${workspaceFolder}/.cursor-memory.json"
      }
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "${env:BRAVE_API_KEY}"
      }
    }
  }
}
```

Verify: **Cursor Settings > MCP**. Restart if not showing.

---

### Codex (OpenAI)

File I/O and content search are native. Memory and web search need config.

| Capability | How to enable |
|---|---|
| File read/write | Native |
| Content search | Native |
| Cross-session memory | Enable **Project Memory** in Codex settings per project |
| Web search | Native (enable in settings) or via MCP |

If Codex supports MCP, create `.codex/mcp.json`:

```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "${BRAVE_API_KEY}"
      }
    }
  }
}
```

---

### GitHub Copilot (VS Code)

File I/O and content search are native. Memory requires MCP.

In VS Code, open `settings.json` (Cmd+Shift+P → "Open User Settings (JSON)") and add:

```json
{
  "mcp": {
    "servers": {
      "memory": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-memory"],
        "env": {
          "MEMORY_FILE_PATH": "./.copilot-memory.json"
        }
      }
    }
  }
}
```

Or via UI: Copilot Chat → 🔧 → "Add More Tools..." → "Add MCP Server" → "NPX Package" → `@modelcontextprotocol/server-memory`.

> **Copilot has no built-in session memory.** This MCP is the single most important install for Lore Forge on Copilot.

---

### Gemini CLI

File I/O and web search are native. Content search and memory are missing.

Gemini CLI has limited MCP support. Workarounds:

- Maintain a `_session.md` file summarizing decisions per session
- At session start, read `_session.md` and the Knowledge Layer before proceeding
- After each session, append a summary to `_session.md`
- Use shell `grep` for content search if shell access is available

---

## Verifying Your Setup

Run this prompt to check if your platform is Lore Forge-ready:

```
Read AGENTS.md. Then verify:
1. Can you read files from this project tree?
2. Can you write a new file to projects/active/?
3. Can you search across all .md files for the word "timeline"?
4. Do you have access to previous session context? If so, summarize what was last worked on.
```

---

## Optional Additions

| Capability | Why install | Recommended package |
|---|---|---|
| **Web search** | Genre research, reference works, psychology (Phases 1–2) | `duckduckgo-mcp-server` (no API key) or `@anthropic/mcp-server-brave-search` (free API key) |
| **Shell execution** | Export pipeline: `npm run docs:build`, Godot CLI | Built into most platforms |
| **Obsidian MCP** | Graph-based Story Bible navigation | `@bitbonsai/mcpvault` |
| **Git MCP** | Versioned Story Bible snapshots | `@modelcontextprotocol/server-github` |
| **Web scraping** | Extract reference material from URLs | `firecrawl-mcp` (requires API key) |

---

*[Back to User Guide](/guide)*
