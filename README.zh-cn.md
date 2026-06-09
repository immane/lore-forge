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

## 使用指南

Lore Forge 设计为与任何 AI 编程助手配合使用（Claude、ChatGPT、Cursor 等）。框架提供结构化的指令，AI 读取并执行。你担任创意总监——AI 是你专属的写作团队。

以下是从空白文件夹到可导出游戏的完整工作流。

---

### 阶段 0 —— 框架初始化

克隆仓库并在 AI 助手中打开。

```bash
git clone https://github.com/immane/lore-forge.git
cd lore-forge
```

首次使用时，告诉你的 AI 助手：

```
读取 .bootstrap/architect.md。你现在是 Lore Forge 架构师。
验证框架结构是否完整并准备好使用。
```

AI 将检查所有 Agent、Prompt 和模板是否就位。

---

### 阶段 1 —— 概念探索

故事从这里开始。Lore Architect Agent 通过访谈来提取你的世界观基础。你不需要把一切都想清楚——访谈过程会与你一起发现故事。

告诉你的 AI 助手：

```
读取 .bootstrap/project_creator.md。我想创建一个新项目。

项目名称：月光
体裁：叙事 RPG
灵感来源：To The Moon、Finding Paradise
主题：遗憾、宽恕、记忆
目标时长：6-8 小时
目标平台：PC
```

AI 会在 `projects/moonlight/` 搭建你的项目，包含完整的 Story Bible 目录结构。

然后开始访谈：

```
读取 .bootstrap/story_interviewer.md。
读取 prompts/interview.md。
以 Lore Architect 的身份行动。

分析 projects/moonlight/ 的当前 Story Bible。
开始概念探索访谈。一次问我一个问题。
```

Lore Architect 会按结构化顺序提问：

- **情感核心** — "玩家通关后应该带着什么感受离开？"
- **类型与基调** — "在乐观—悲观的光谱上，这个故事位于哪个位置？"
- **主题锚点** — "这个故事探索的核心问题是什么？"
- **世界规则** — "是否存在魔法系统、先进科技或超自然元素？"
- **结局设计** — "故事应该有哪些结局？怎样才算真正打动人心？"
- **内容边界** — "有哪些主题、基调或内容类型需要避免？"

逐一回答每个问题。AI 将你的回答写入：
- `projects/moonlight/story/vision.md`
- `projects/moonlight/story/themes.md`
- `projects/moonlight/story/emotional_core.md`
- `projects/moonlight/story/ending_design.md`
- `projects/moonlight/knowledge/canon.md`
- `projects/moonlight/knowledge/rules.md`
- `projects/moonlight/knowledge/glossary.md`

预计 20–50 个问题，可跨多次会话进行。你可以随时暂停和恢复——Story Bible 是持久化的。


### 阶段 2 —— 角色探索

世界基础扎实后，Character Therapist Agent 帮你发现角色阵容。

```
读取 agents/character-therapist/agent.md。
读取 prompts/generate_character.md。
以 Character Therapist 的身份行动。

读取 projects/moonlight/ 的 Story Bible。
我想创建主角。她的名字是 Luna。
开始角色探索访谈。
```

Character Therapist 深入挖掘每个角色的心理：

- **核心创伤** — 什么伤害了他们？什么时候？他们如何应对？
- **欲望金字塔** — 表层欲望 → 深层欲望 → 真正需求
- **恐惧阶梯** — 轻微焦虑 → 主要恐惧 → 存在性恐惧
- **防御机制** — 他们如何保护自己？
- **自我欺骗** — 他们对自己说了什么谎？
- **声音特征** — 说话方式、词汇量、口头禅、沉默模式
- **成长弧** — 故事开始 vs 结束时是谁？什么改变了他们？

每个角色的输出：`projects/moonlight/characters/luna.md`

对每个主要角色重复此流程。Character Therapist 确保：
- 每个角色都有内在矛盾（不允许完美角色）
- 声音特征互不相同（没有两个角色听起来一样）
- 关系是双向的（如果 A 害怕 B，B 的档案必须体现这一点）

```
现在创建反派。他的名字是 Sol。
还要创建 Luna 的导师和她的童年好友。
```


### 阶段 3 —— 时间线构建

角色定义完成后，Narrative Designer 构建世界级时间线。

```
读取 agents/narrative-designer/agent.md。
以 Narrative Designer 的身份行动。

读取 projects/moonlight/story/ 和 projects/moonlight/characters/ 下的所有文件。
构建世界时间线和角色时间线。
填充 projects/moonlight/story/timeline.md。
```

AI 构建：
- **世界纪元** — 每个时代的定义事件、社会状态、关键人物
- **故事时间线** — 章节级时间线，含游戏内日期和持续时长
- **角色时间线** — 每个角色的出生、成长事件、进入故事、离开故事
- **汇聚点** — 角色线索交汇的位置

输出：`projects/moonlight/story/timeline.md`


### 阶段 4 —— 记忆图谱

Narrative Designer 绘制主观记忆——每个角色记得什么、何时记起、这些记忆是否可靠。

```
以 Narrative Designer 的身份行动。

读取 projects/moonlight/characters/ 和 projects/moonlight/story/timeline.md。
构建记忆图谱。对每个主要角色，追溯他们的记忆链：
哪些成长记忆塑造了他们？什么触发了这些回忆？是否有被压抑或虚假的记忆？
```

输出：`projects/moonlight/memories/_index.md` 及每个角色的记忆文件。

记忆图谱与时间线不同——时间线是客观事实，记忆是主观的。角色对事件的记忆可能与实际发生的事情不同。记忆与真相之间的差距创造戏剧张力。


### 阶段 5 —— 叙事设计

原材料就绪。Narrative Designer 将其结构化为章节和场景。

```
读取 prompts/chapter_planning.md。
以 Narrative Designer 的身份行动。

读取 projects/moonlight/ 的完整 Story Bible。
规划章节结构。定义幕结构、章节分配、依赖图以及逐场景大纲。
```

AI 产出：

- **幕结构** — 三幕或五幕，含幕间转折事件
- **张力曲线** — 跨所有章节的戏剧张力映射
- **依赖图** — 哪些章节必须在前、哪些可以并行
- **章节详情** — 概要、视角角色、情感弧线、每章所需场景

输出：`projects/moonlight/story/chapters/_outline.md`

然后生成每个场景：

```
读取 prompts/generate_scene.md。
以 Narrative Designer 的身份行动。

为 Moonlight 的 Chapter 01 生成所有场景定义。
```

每个场景包含：
- 戏剧功能（揭示/升级/逆转/缓解/铺垫）
- 在章节张力曲线上的位置
- 情感转换（读者的起始情感 → 结束情感）
- 视角角色、出场角色、地点、时间
- 信息流（读者知道什么、角色知道什么、戏剧性反讽）
- 伏笔集成（需要埋下的种子或需要回收的伏笔）

输出：`projects/moonlight/story/chapters/01-*.md`


### 阶段 6 —— 对白创作

场景已定义。Dialogue Writer 赋予每个角色声音。

```
读取 agents/dialogue-writer/agent.md。
读取 prompts/generate_dialogue.md。
以 Dialogue Writer 的身份行动。

读取场景文件 projects/moonlight/story/chapters/01-opening.md。
读取角色文件 projects/moonlight/characters/luna.md 和 sol.md。
为这个场景写对白。用情感状态、潜台词和关系张力注释标注每行。
```

Dialogue Writer 产出标注对白：

```markdown
**Luna** [状态：焦虑、期待]
{潜台词：她在试探 Sol 是否还记得——她不想直接问}
"你还记得那个晚上吗？"

**Sol** [状态：警惕、轻蔑]
{潜台词：他记得很清楚，但不会让她如愿}
"哪个晚上？晚上多着呢。"
```

输出：`projects/moonlight/dialogue/01-opening.md`

Dialogue Writer 强制规则：
- 每个角色听起来都不同（去掉说话人标签——还能分辨谁在说话吗？）
- 角色不能说他们没被告知的事情（知识边界检查）
- 所有世界内术语必须与词汇表一致
- 每段对白都要有潜台词（角色很少直说心里话）


### 阶段 7 —— 一致性审查

在任何内容被视为最终稿之前，Lore Auditor 检查一切。

```
读取 agents/lore-auditor/agent.md。
读取 prompts/review_consistency.md。
以 Lore Auditor 的身份行动。

对 projects/moonlight/ 进行完整一致性审计。
报告所有违规、警告和建议。
```

Auditor 交叉检查每个模块：

- **时间线检查** — 事件 B 是否在事件 A 引用它之前发生？
- **角色知识** — 是否有角色知道他们不该知道的事？
- **声音一致性** — 每个角色的对白是否符合其声音特征？
- **规则合规** — 是否有任何内容违反了 `knowledge/rules.md` 中的世界规则？
- **伏笔** — 每个埋下的种子都必须有回收；每个回收都必须有种子的来源
- **结局可达性** — 所有预期结局是否仍然可达？

输出：`projects/moonlight/_audit/2026-06-10-full-report.md`

发现分级：
- **严重** — 硬性矛盾，必须在定稿前修复
- **高** — OOC 行为、声音不一致，阻止定稿
- **中** — 基调漂移、动机薄弱（建议）
- **低** — 风格建议

随时可运行针对性审计（单个角色、单个章节）：

```
以 Lore Auditor 的身份行动。对角色 Luna 进行针对性审计。
将她的对白与心理档案进行比对。
```


### 阶段 8 —— 游戏导出

Story Bible 通过审计后，导出为游戏可用格式。

```
projects/moonlight/ 的 Story Bible 已完成并审计通过。
导出为以下格式：
1. JSON Event Graph（用于 Unity/自定义引擎）
2. Godot Dialogic 时间线
3. 剧本格式（用于参考/配音录制）
```

输出：
- `projects/moonlight/exports/json/` — 游戏引擎结构化的 JSON
- `projects/moonlight/exports/godot/` — Dialogic 兼容的时间线文件
- `projects/moonlight/exports/screenplay/` — Fountain 格式剧本


### 迭代循环

Lore Forge 为持续迭代而设计，而非一次性生成：

```
1. 访谈 → Story Bible 增长
2. 编写新内容（角色、场景、对白）
3. Lore Auditor 检查一致性
4. 修复问题，如发现缺口则重新访谈
5. 重复直至 Story Bible 完整
6. 导出
```

你可以随时回到任何阶段。Story Bible 是持久化的事实来源——在第 6 个月添加新角色的流程与第 1 天创建第一个角色完全相同。

对于大型项目，在活跃开发期间运行针对性审计，在里程碑节点（一幕结束、导出前）运行全项目审计。

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
