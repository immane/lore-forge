# 架构

Lore Forge 是一个 AI 辅助叙事设计框架。它把故事创作视为**知识工程**，而不是纯文本生成。

## 核心模型

Lore Forge 的起点不是“先写一段故事”，而是先建立结构化知识。

```text
Idea
  -> Interview
  -> Story Bible
  -> Character Design
  -> Timeline
  -> Memory Graph
  -> Narrative Design
  -> Dialogue
  -> Export
```

Story Bible 是整个项目的单一事实来源。后续的叙事输出、对白、导出结果都必须从 Story Bible 推导出来，并接受审计校验。

## 框架目录分层

Lore Forge 当前包含以下核心层：

| 层 | 目录 | 作用 |
|----|------|------|
| Bootstrap | `.bootstrap/` | 框架创建与升级、自举入口 |
| Agents | `agents/` | 长期存在的 AI 角色定义 |
| Prompts | `prompts/` | 工作流级 Prompt 规范 |
| Templates | `templates/` | 项目模板系统 |
| Docs | `docs/` | 框架文档内容 |
| Site | `site/` | 面向 GitHub Pages 的站点容器 |
| Projects | `projects/` | 实际作品与 Story Bible 工作区 |

## 设计原则

- 可维护性 > 功能数量
- 一致性 > 局部创意
- 长期协作 > 一次性生成
- 知识结构优先于文本表现

## 为什么要拆成这些层

1. `.bootstrap/` 负责框架自身建设
2. `agents/` 定义长期存在的角色边界
3. `prompts/` 定义各阶段的工作流协议
4. `templates/` 负责项目初始化结构
5. `projects/` 承载真实故事内容
6. `docs/` 负责框架说明，不混入站点展示逻辑
7. `site/` 只负责公开展示和 GitHub Pages

## 使用这套架构时的规则

- 用 `.bootstrap/` 初始化和升级框架
- 用 `templates/` 创建新项目骨架
- 用 `agents/` + `prompts/` 驱动每个生产阶段
- 把 `projects/` 视为唯一合法的故事内容存放区
- 在内容进入 canon 或导出前必须经过审计

## Story Bible 在架构中的位置

Story Bible 不是“附属说明文档”，而是整个项目的主数据层。它至少应包含：

- Vision
- Themes
- Emotional Core
- Characters
- Timeline
- Memory Graph
- Chapter Structure
- Foreshadowing
- Ending Design

这些模块共同决定角色如何行动、情节如何推进、对白如何成立、导出内容如何保持一致。

## 与站点的关系

`site/` 只是展示层。

- 真正的框架规范在 `.bootstrap/`、`agents/`、`prompts/`、`templates/`、`docs/`
- `site/` 负责把这些规范组织成便于阅读的中文文档站
- 站点内容可以解释框架，但不应该反向定义框架
