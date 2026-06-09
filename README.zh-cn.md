<p align="center">
  <img src="https://img.shields.io/badge/status-v0.1-blue" alt="状态">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="许可">
</p>

# Lore Forge

**AI 辅助叙事设计框架。通过结构化访谈、知识管理和一致性检查，构建并维护一个活的 Story Bible。**

Lore Forge 将故事创作视为**知识工程**——而非文本生成。它帮助创作者设计叙事 RPG、视觉小说、互动小说和桌面跑团战役，将长期可维护性作为第一优先级。

---

## 核心理念

| 传统 AI 写作 | Lore Forge |
|-------------|------------|
| 想法 → 生成故事 | 想法 → 访谈 → Story Bible → 角色设计 → 时间线 → 记忆图谱 → 叙事设计 → 对白 → 导出 |

**Story Bible 是唯一的事实来源。** 一切内容都从它派生。

---

## 框架结构

```
lore-forge/
├── .bootstrap/        框架自举工具
├── agents/            5 个职责边界明确的 AI Agent
├── prompts/           6 个 Agent 调用工作流模板
├── templates/         3 种叙事体裁的项目脚手架
├── docs/              框架文档（VitePress）
└── projects/          用户工作区（active / archived / templates）
```

### 五个 Agent

| Agent | 职责 | 阶段 |
|-------|------|------|
| **Lore Architect**（世界观架构师） | 世界构建与知识层 | 1 — 概念探索 |
| **Character Therapist**（角色心理治疗师） | 角色心理学与成长弧 | 2 — 角色探索 |
| **Narrative Designer**（叙事设计师） | 章节/场景结构与节奏 | 3–5 — 时间线 → 叙事 |
| **Dialogue Writer**（对白编写师） | 角色声音与潜台词 | 6 — 对白创作 |
| **Lore Auditor**（设定审计师） | 跨模块一致性检查 | 7 — 一致性审查 |

### 六个工作流

| 工作流 | 输入 | 输出 |
|--------|------|------|
| 访谈 (Interview) | 用户回答 | 愿景、主题、世界规则 |
| 生成角色 (Generate Character) | 角色概念 | 完整心理画像 |
| 章节规划 (Chapter Planning) | Story Bible | 章节大纲 + 依赖图 |
| 生成场景 (Generate Scene) | 章节上下文 | 场景定义 |
| 生成对白 (Generate Dialogue) | 场景 + 角色档案 | 标注对白脚本 |
| 一致性审查 (Review Consistency) | 全部 Story Bible 模块 | 审计报告（违规/警告） |

### 三种模板

| 模板 | 骨架 | 体裁特有模块 |
|------|------|------------|
| `narrative_rpg` | 章节 + 任务 | `quests/` |
| `visual_novel` | 共通路线 + 分支 | `story/routes/` |
| `interactive_fiction` | 状态图 + 节点 | `events/` |

---

## 快速开始

```bash
# 克隆框架
git clone https://github.com/immane/lore-forge.git

# 框架可与任何 AI 编程助手配合使用。
# 要创建新项目，向你的 AI Agent 发送指令：

"读取 .bootstrap/project_creator.md。创建一个名为「月光」的新项目。
体裁：叙事 RPG。主题：遗憾与宽恕。"
```

---

## Agent 生命周期

```
概念探索  →  角色探索  →  时间线  →  记忆图谱
    ↓                                              ↓
  游戏导出  ←  一致性审查  ←  对白  ←  叙事设计
```

全部 8 个阶段通过框架中定义的 prompts 和 agents 编排。每个 Agent 从上游模块读取数据，写入自己的领域，跨域变更委托给对应的 Agent 处理。

---

## 文档

完整文档请访问 **[Lore Forge 文档站](https://immane.github.io/lore-forge/)**。

| 文档 | 说明 |
|------|------|
| [架构](https://immane.github.io/lore-forge/architecture) | 框架设计与组件 |
| [工作流](https://immane.github.io/lore-forge/workflow) | Agent 生命周期与数据流 |
| [项目结构](https://immane.github.io/lore-forge/project-structure) | 目录布局与 Story Bible 设计 |

---

## 许可

MIT
