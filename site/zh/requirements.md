# 运行需求

Lore Forge 是一个纯 Markdown 框架，只需要你的 AI 平台提供三项能力。本文档说明每项能力是什么，以及在各平台上如何配置。

| # | 能力 | 原因 |
|---|---|---|
| 1 | **文件读写** | 所有智能体都读写 `.md` 文件 — Story Bible 本质上是一棵文件树。 |
| 2 | **跨会话记忆** | Story Bible 需要在多次会话中长期演化。没有记忆，每次会话都从零开始。 |
| 3 | **内容搜索** | Lore Auditor 需要跨所有模块交叉引用以发现矛盾。没有搜索，审计形同虚设。 |

> 如果平台缺少记忆能力，Lore Forge 将降级为单次会话的头脑风暴工具，而非 Story Bible Engine。

---

## 各平台配置

### OpenCode

OpenCode 原生提供基础文件读写和内容搜索。其余能力需要安装 MCP 服务器，与其他平台一致。

在 `opencode.json`（项目级）或 `~/.config/opencode/opencode.json`（用户级）中添加：

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

| 能力 | 来源 | 说明 |
|---|---|---|
| 文件读写 | 原生（`read`/`write`/`edit`）+ MCP（`@modelcontextprotocol/server-filesystem`） | 原生工具足以完成大部分操作；filesystem MCP 增加目录树、搜索等功能 |
| 内容搜索 | 原生（`grep`/`glob`） | 内置，无需 MCP |
| 跨会话记忆 | MCP（`@agentmemory/mcp`） | 关键 — OpenCode 没有原生会话记忆 |
| 网络搜索 | MCP（`duckduckgo-mcp-server`）或 `firecrawl-mcp` | Firecrawl 需要 API Key |

---

### Claude Code

文件操作原生支持。通过 MCP 添加记忆和网络搜索。

在项目根目录创建 `.mcp.json`：

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

或通过命令行：

```bash
claude mcp add -s project memory -- npx -y @modelcontextprotocol/server-memory
claude mcp add -s project brave-search -e BRAVE_API_KEY="$BRAVE_API_KEY" -- npx -y @anthropic/mcp-server-brave-search
```

验证：`claude mcp list`。重启 Claude Code。

---

### Cursor

文件读写和内容搜索原生支持。记忆和网络搜索需要 MCP。

在项目根目录创建 `.cursor/mcp.json`：

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

验证：**Cursor Settings > MCP**。如未显示，重启 Cursor。

---

### Codex (OpenAI)

文件读写和内容搜索原生支持。记忆和网络搜索需额外配置。

| 能力 | 配置方式 |
|---|---|
| 文件读写 | 原生 |
| 内容搜索 | 原生 |
| 跨会话记忆 | 在 Codex 设置中按项目启用 **Project Memory** |
| 网络搜索 | 原生（需在设置中启用）或通过 MCP 添加 |

如果 Codex 支持 MCP，创建 `.codex/mcp.json`：

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

### GitHub Copilot（VS Code）

文件读写和内容搜索原生支持。记忆必须通过 MCP 添加。

在 VS Code 中打开 `settings.json`（Cmd+Shift+P → "Open User Settings (JSON)"）并添加：

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

或通过 UI：Copilot Chat → 🔧 → "Add More Tools..." → "Add MCP Server" → "NPX Package" → `@modelcontextprotocol/server-memory`。

> **Copilot 没有内置会话记忆。** 此 MCP 是 Copilot 上运行 Lore Forge 最关键的安装项。

---

### Gemini CLI

文件读写和网络搜索原生支持。内容搜索和记忆缺失。

Gemini CLI 对 MCP 支持有限。替代方案：

- 维护 `_session.md` 文件记录每次会话的决策
- 每次会话开始先读取 `_session.md` 和知识层
- 每次会话结束追加摘要到 `_session.md`
- 如有 shell 访问权限，用 `grep` 进行内容搜索

---

## 验证你的配置

运行以下提示词检查平台是否满足 Lore Forge 需求：

```
Read AGENTS.md. Then verify:
1. Can you read files from this project tree?
2. Can you write a new file to projects/active/?
3. Can you search across all .md files for the word "timeline"?
4. Do you have access to previous session context? If so, summarize what was last worked on.
```

---

## 可选增强

| 能力 | 为什么安装 | 推荐包 |
|---|---|---|
| **网络搜索** | 类型研究、参考作品分析、心理学框架（Phase 1–2） | `duckduckgo-mcp-server`（无需 API Key）或 `@anthropic/mcp-server-brave-search`（免费 API Key） |
| **Shell 执行** | 导出管道：`npm run docs:build`、Godot CLI | 大多数平台已内置 |
| **Obsidian MCP** | 基于图谱的 Story Bible 导航 | `@bitbonsai/mcpvault` |
| **Git MCP** | Story Bible 版本快照 | `@modelcontextprotocol/server-github` |
| **网页抓取** | 从 URL 提取参考资料 | `firecrawl-mcp`（需 API Key） |

---

*[返回使用指南](/zh/guide)*
