<p align="center">
  <img src="https://img.shields.io/badge/status-v0.1-blue" alt="状态">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="许可证">
</p>

# Lore Forge

**AI 辅助叙事设计框架。通过结构化访谈、知识管理和一致性检查，构建并维护一个活生生的 Story Bible。**

Lore Forge 将故事创作视为**知识工程**——而非文本生成。它帮助创作者设计叙事型 RPG、视觉小说、互动小说和桌面战役，以长期可维护性为首要目标。

---

## 理念

| 传统 AI 写作 | Lore Forge |
|------------------------|------------|
| 想法 → 生成故事 | 想法 → 访谈 → Story Bible → 角色设计 → 时间线 → 记忆图谱 → 叙事设计 → 对话 → 导出 |

**Story Bible 是唯一的事实来源。** 所有其他内容均由此衍生。

---

## 框架

```
lore-forge/
├── AGENTS.md          跨平台 AI 智能体指令
├── CLAUDE.md          Claude Code 适配器；指向 AGENTS.md
├── .bootstrap/        框架自建工具
├── agents/            5 个具有明确边界的专业化 AI 智能体
├── prompts/           6 个工作流模板，用于调用智能体
├── templates/         3 种类型的项目脚手架
├── docs/              框架文档内容
├── site/              用于 GitHub Pages 的 VitePress 站点容器
└── projects/          用户工作区（active / archived / templates）
```

### 五大智能体

| 智能体 | 角色 | 阶段 |
|-------|------|-------|
| **Lore Architect** | 世界观构建与知识层 | 1 — 概念发现 |
| **Character Therapist** | 角色心理学与成长弧 | 2 — 角色发现 |
| **Narrative Designer** | 章节/场景结构与节奏 | 3–5 — 时间线 → 叙事 |
| **Dialogue Writer** | 角色声音与潜台词 | 6 — 对话创作 |
| **Lore Auditor** | 跨模块一致性检查 | 7 — 一致性审查 |

### 六大工作流

| 工作流 | 输入 | 输出 |
|----------|-------|--------|
| 访谈 | 用户回答 | 愿景、主题、世界规则 |
| 生成角色 | 角色概念 | 完整的心理画像 |
| 章节规划 | Story Bible | 章节大纲 + 依赖关系图 |
| 生成场景 | 章节上下文 | 场景定义 |
| 生成对话 | 场景 + 角色画像 | 带注释的对话脚本 |
| 一致性审查 | 所有 Story Bible 模块 | 审计报告（违规/警告） |

### 三种模板

| 模板 | 骨架 | 游戏特定模块 |
|----------|----------|---------------------|
| `narrative_rpg` | 章节 + 任务 | `quests/` |
| `visual_novel` | 共同路线 + 分支 | `story/routes/` |
| `interactive_fiction` | 状态图 + 节点 | `events/` |

---

## 使用指南

Lore Forge 设计用于与 AI 编码和文档智能体协作，如 Codex、Claude Code、OpenCode、Cursor、GitHub Copilot agents、Gemini CLI 等类似工具。

首先在你的 AI 助手中打开此仓库。大多数智能体平台会自动读取 `AGENTS.md`，或者只需一次提示即可读取。Claude Code 可以使用 `CLAUDE.md`，后者会指向 `AGENTS.md`。

你扮演创意总监的角色。AI 读取框架指令，选择合适的 Lore Forge 智能体，并遵循相应的工作流。

---

### 设置

克隆仓库并在 AI 助手中打开：

```bash
git clone https://github.com/immane/lore-forge.git
cd lore-forge
```

如果你的助手没有自动加载仓库指令，请从以下开始：

```
读取 AGENTS.md 并确认 Lore Forge 已就绪可用。
```

这是大多数平台需要的唯一设置提示。

---

### 快速开始

创建新项目：

```
创建一个新的 Lore Forge 项目。

项目名称：月光
类型：叙事型 RPG
灵感来源：To The Moon、Finding Paradise
主题：遗憾、原谅、记忆
目标时长：6-8 小时
目标平台：PC
```

AI 应在 `projects/active/moonlight/` 下搭建项目结构，随后开始概念发现访谈。

继续已有项目：

```
继续「月光」项目。
找出影响最大的缺失 Story Bible 信息，然后向我提出下一个问题。
```

创建角色：

```
为「月光」创建主角 Luna。
使用 Character Therapist 工作流，开始角色发现访谈。
```

规划章节或路线：

```
为「月光」根据当前 Story Bible 规划章节结构。
定义幕、章节分配、依赖关系图以及逐场景大纲。
```

编写场景：

```
为「月光」生成第一章的场景定义。
使用 Narrative Designer 工作流，并保持与 Story Bible 正典一致。
```

编写对话：

```
为「月光」编写第一章开场场景的对话。
使用已建立的角色档案、声音签名、潜台词和知识边界。
```

运行审计：

```
对 projects/active/moonlight/ 运行完整的 Lore Forge 一致性审计。
报告关键矛盾、警告和建议修复方案，并附上文件引用。
```

导出：

```
projects/active/moonlight/ 下的 Story Bible 已完成并通过审计。
导出 JSON Event Graph、Godot Dialogic 时间线、小说手稿 Markdown 和剧本参考文件。
```

如果你使用 OpenCode，`opencode.json` 还定义了用于新项目创建、项目继续和审计的快捷命令。

---

### 完整工作流

以下是从空白文件夹到游戏或手稿就绪导出的完整流程。你可以用自然语言调用每个步骤；AI 会自动使用 `AGENTS.md`、`agents/` 中的文件以及 `prompts/` 中匹配的提示。

---

### 阶段 1 — 概念发现

这是故事开始的地方。Lore Architect 智能体通过访谈提取你世界观的基石。你不需要事先想好一切——访谈过程会与你一同发现故事。

示例请求：

```
创建一个新的 Lore Forge 项目并开始概念发现访谈。

项目名称：月光
类型：叙事型 RPG
灵感来源：To The Moon、Finding Paradise
主题：遗憾、原谅、记忆
目标时长：6-8 小时
目标平台：PC
```

AI 在 `projects/active/moonlight/` 下搭建项目，包含完整的 Story Bible 目录结构，然后开始访谈。

Lore Architect 会问你以下结构性问题：

- **情感核心** —— "玩家在故事结束后应该带着怎样的感受？"
- **类型与基调** —— "它在乐观—悲观谱系上处于什么位置？"
- **主题锚点** —— "这个故事探索的核心问题是什么？"
- **世界规则** —— "是否存在魔法体系、先进科技或超自然元素？"
- **结局设计** —— "故事应该有哪些结局？每个结局如何让人觉得值得？"
- **内容边界** —— "需要避免哪些主题、基调或内容类型？"

回答每个问题。AI 会将你的答案写入：
- `projects/active/moonlight/story/vision.md`
- `projects/active/moonlight/story/themes.md`
- `projects/active/moonlight/story/emotional_core.md`
- `projects/active/moonlight/story/ending_design.md`
- `projects/active/moonlight/knowledge/canon.md`
- `projects/active/moonlight/knowledge/rules.md`
- `projects/active/moonlight/knowledge/glossary.md`

预计会有 20–50 个问题，分多个会话进行。你可以随时暂停和恢复——Story Bible 是持久化的。

### 阶段 2 — 角色发现

世界观基础稳固后，Character Therapist 智能体帮助你发现角色阵容。

```
为「月光」创建主角 Luna。
使用 Character Therapist 工作流，开始角色发现访谈。
```

Character Therapist 深入挖掘每个角色的心理学：

- **核心创伤** —— 是什么伤害了他们？何时？他们如何应对？
- **欲望金字塔** —— 表面的欲望 → 更深层的欲望 → 真正的需求
- **恐惧阶梯** —— 轻微焦虑 → 主要恐惧 → 存在性恐惧
- **防御机制** —— 他们如何保护自己？
- **自我欺骗** —— 他们对自己撒了什么谎？
- **声音签名** —— 说话模式、词汇、口头禅、沉默模式
- **成长弧** —— 故事开始时他们是谁 vs 结束时？是什么改变了他们？

每个角色的输出：`projects/active/moonlight/characters/luna.md`

对每个主要角色重复此过程。Character Therapist 确保：
- 每个角色都有内在矛盾（没有完美角色）
- 声音签名各不相同（没有两个角色听起来一样）
- 关系是双向的（如果 A 害怕 B，B 的档案也反映这一点）

```
现在创建反派，名字叫 Sol。
同时创建 Luna 的导师角色和她的童年好友。
```

### 阶段 3 — 时间线构建

角色定义完成后，Narrative Designer 构建世界层面的编年史。

```
为「月光」构建世界时间线和角色时间线。
从已确认的故事文件和角色文件中填充 Story Bible 时间线。
```

AI 构建：
- **世界纪元** —— 标志性事件、社会状态、每个时期的关键人物
- **故事时间线** —— 章节级别的编年史，包含世界日期和持续时间
- **角色时间线** —— 每个角色的出生、成长事件、故事入场、故事退场
- **交汇点** —— 角色线索相交之处

输出：`projects/active/moonlight/story/timeline.md`

### 阶段 4 — 记忆图谱

Narrative Designer 绘制主观记忆——每个角色记住了什么、何时记住、以及这些记忆是否可靠。

```
为「月光」构建记忆图谱。
对每个主要角色，追溯他们的记忆链：
哪些成长记忆塑造了他们，什么触发点唤起了这些记忆，
以及是否存在被压抑或虚假的记忆？
```

输出：`projects/active/moonlight/memories/_index.md` 以及每个角色的记忆文件。

记忆图谱不同于时间线——时间线是客观的，记忆是主观的。角色对事件的记忆可能与实际发生的情况不同。记忆与真相之间的差距创造了戏剧张力。

### 阶段 5 — 叙事设计

现在原材料已经就绪。Narrative Designer 将它们组织成章节和场景。

```
为「月光」根据当前 Story Bible 规划章节结构。
定义幕、章节分配、依赖关系图以及逐场景大纲。
```

AI 产出：

- **幕结构** —— 三幕或五幕，包含幕间事件
- **张力曲线** —— 跨所有章节的戏剧张力映射
- **依赖关系图** —— 哪些章节必须在前，哪些可以并行
- **章节详情** —— 梗概、视角角色、情感弧、每章所需的场景

输出：`projects/active/moonlight/story/chapters/_outline.md`

然后生成单个场景：

```
为「月光」第一章生成所有场景定义。
```

每个场景包含：
- 戏剧功能（揭示 / 升级 / 反转 / 缓解 / 铺垫）
- 在章节弧中的张力位置
- 情感转折（读者的起始情绪 → 结束情绪）
- 视角角色、在场角色、地点、时间
- 信息流（读者了解到什么、角色了解到什么、戏剧性反讽）
- 伏笔整合（要埋下的种子或要兑现的伏笔）

输出：`projects/active/moonlight/story/chapters/01-*.md`

### 阶段 6 — 对话创作

场景已定义。现在 Dialogue Writer 赋予每个角色声音。

```
为「月光」编写第一章开场场景的对话。
为每一行注释情感状态、潜台词和关系张力说明。
```

Dialogue Writer 产出带注释的对话：

```markdown
**Luna** [状态：焦虑，带着希望]
{潜台词：她在试探 Sol 是否还记得——她不想直接问}
"你还会想起那个夜晚吗？"

**Sol** [状态：防备，不以为意]
{潜台词：他记得清清楚楚，但不想让她得逞}
"哪个夜晚？夜晚有很多。"
```

输出：`projects/active/moonlight/dialogue/01-opening.md`

Dialogue Writer 强制执行：
- 每个角色听起来各不相同（移除说话者标签——你还能分辨谁在说话吗？）
- 没有角色知道他们未被告知的信息（知识边界检查）
- 所有世界术语与术语表一致
- 每段交流中都有潜台词（角色很少直接说出他们的真实想法）

### 阶段 7 — 一致性审查

在任何内容被视为最终版之前，Lore Auditor 检查所有内容。

```
对 projects/active/moonlight/ 运行完整的一致性审计。
报告所有违规、警告和建议。
```

审计师交叉引用每个模块：

- **时间线检查** —— 事件 B 是否发生在事件 A 引用它之前？
- **角色知识** —— 是否有角色知道他们未被告知的信息？
- **声音一致性** —— 每个角色的对话是否符合他们的声音签名？
- **规则合规性** —— 是否有内容违反了 `knowledge/rules.md` 中定义的世界规则？
- **伏笔** —— 每个埋下的种子必须有回报；每个回报必须有种子
- **结局可达性** —— 所有预设结局是否仍然可达？

输出：`projects/active/moonlight/_audit/YYYY-MM-DD-full-report.md`

发现的问题分为以下几类：
- **严重** — 硬性矛盾，必须在确定为正典前修复
- **高** — 角色行为不符、声音不一致，阻碍确定为正典
- **中** — 基调偏移、动机薄弱（建议性）
- **低** — 风格建议

可以随时运行针对性审计（单个角色、单个章节）：

```
为「月光」对角色 Luna 运行针对性审计。
对照她的心理档案检查她的对话。
```

### 阶段 8 — 导出

当 Story Bible 通过审计后，导出为游戏就绪或手稿就绪格式。

```
projects/active/moonlight/ 下的 Story Bible 已完成并通过审计。
导出为以下格式：
1. JSON Event Graph（用于 Unity/自定义引擎）
2. Godot Dialogic 时间线
3. 小说手稿 Markdown（用于散文修订）
4. 剧本格式（用于参考/配音录制）
```

输出：
- `projects/active/moonlight/exports/json/` —— 供游戏引擎使用的结构化 JSON
- `projects/active/moonlight/exports/godot/` —— 兼容 Dialogic 的时间线文件
- `projects/active/moonlight/exports/novel/` —— 大纲导出、小说草稿和手稿 Markdown
- `projects/active/moonlight/exports/screenplay/` —— Fountain 格式的剧本

小说导出是一个派生散文流程。它应将已确认的 Story Bible、场景、角色和对话内容转化为可读手稿，不应发明新的正典。

### 迭代循环

Lore Forge 是为持续迭代而设计的，而非一次性生成：

```
1. 访谈 → Story Bible 增长
2. 编写新内容（角色、场景、对话）
3. Lore Auditor 检查一致性
4. 修复问题，如有空白则重新访谈
5. 重复直至 Story Bible 完成
6. 导出
```

你可以随时重新访问任何阶段。Story Bible 是持久化的事实来源——在第六个月添加一个新角色与第一天创建第一个角色的过程完全相同。

对于大型项目，在活跃开发期间运行针对性审计，在里程碑节点（如幕结束、导出前）运行全项目审计。

---

## 智能体生命周期

```
概念发现  →  角色发现  →  时间线  →  记忆图谱
    ↓                              ↓
 导出      ←  一致性审查  ←  对话  ←  叙事设计
```

所有 8 个阶段通过框架中定义的提示和智能体协同编排。每个智能体从上游模块读取，写入自己的领域，并将跨域变更委托给负责的智能体。

---

## 文档

完整文档请访问 **[Lore Forge 文档](https://immane.github.io/lore-forge/)**。

| 文档 | 描述 |
|-----|-------------|
| [架构](https://immane.github.io/lore-forge/architecture) | 框架设计与组件 |
| [工作流](https://immane.github.io/lore-forge/workflow) | 智能体生命周期与数据流 |
| [项目结构](https://immane.github.io/lore-forge/project-structure) | 目录布局与 Story Bible 设计 |

---

## 许可证

MIT
