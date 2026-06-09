# 开始使用

Lore Forge 设计为与 AI 编程助手协作使用。框架提供结构、Agent、Prompt 和模板；你提供创意方向、回答问题并做最终决策。

本页基于 README 中定义的完整用法，给出从空仓库到可导出 Story Bible 的完整流程。

## 1. 克隆框架

```bash
git clone https://github.com/immane/lore-forge.git
cd lore-forge
```

然后在你的 AI 助手中打开该仓库。

## 2. 先验证框架本身

在创建项目之前，先让 AI 检查 Lore Forge 框架是否完整：

```text
读取 .bootstrap/architect.md。你现在是 Lore Forge 架构师。
验证框架结构是否完整并准备好使用。
```

这一步会检查：

- `.bootstrap/` 是否包含框架自举指令
- `agents/` 是否包含五个专用 Agent
- `prompts/` 是否包含六个工作流 Prompt
- `templates/` 是否包含三类项目模板

也就是确保框架不是半成品，而是已经具备完整的生产骨架。

## 3. 创建一个新项目

使用 Project Creator 创建 Story Bible 工作区：

```text
读取 .bootstrap/project_creator.md。我想创建一个新项目。

项目名称：月光
体裁：叙事 RPG
灵感来源：To The Moon、Finding Paradise
主题：遗憾、宽恕、记忆
目标时长：6-8 小时
目标平台：PC
```

预期输出：

```text
projects/moonlight/
├── project.md
├── story/
├── characters/
├── memories/
├── locations/
├── dialogue/
├── quests/ 或 events/
├── knowledge/
└── exports/
```

这一步不会直接写剧情，而是先建立项目骨架。

## 4. 进入概念探索

项目目录建好之后，开始概念访谈：

```text
读取 .bootstrap/story_interviewer.md。
读取 prompts/interview.md。
以 Lore Architect 的身份行动。

分析 projects/moonlight/ 的当前 Story Bible。
开始概念探索访谈。一次问我一个问题。
```

Lore Architect 会围绕以下内容持续提问：

- 情感核心
- 类型与基调
- 主题
- 世界规则
- 结局设计
- 约束与边界

这一阶段会逐步填充：

- `story/vision.md`
- `story/themes.md`
- `story/emotional_core.md`
- `story/ending_design.md`
- `knowledge/canon.md`
- `knowledge/rules.md`
- `knowledge/glossary.md`

你不需要一开始就知道所有答案。Lore Forge 的目标是通过访谈把隐含的故事知识挖出来。

## 5. 创建角色阵容

使用 Character Therapist 创建具有心理一致性的角色：

```text
读取 agents/character-therapist/agent.md。
读取 prompts/generate_character.md。
以 Character Therapist 的身份行动。

读取 projects/moonlight/ 的 Story Bible。
我想创建主角。她的名字是 Luna。
开始角色探索访谈。
```

对于每个主要角色，Character Therapist 会定义：

- 核心创伤
- 欲望金字塔
- 恐惧阶梯
- 防御机制
- 声音特征
- 关系图谱
- 成长弧线

输出写入 `characters/{name}.md`。

然后继续让它补齐主角、反派、导师、盟友等核心角色。

## 6. 构建时间线与记忆图谱

角色具备基本轮廓后，使用 Narrative Designer 处理时间和记忆：

```text
读取 agents/narrative-designer/agent.md。
以 Narrative Designer 的身份行动。

读取 projects/moonlight/ 下所有 story 和 characters 文件。
构建世界时间线和角色时间线。
然后构建记忆图谱。
```

这一阶段会创建：

- `story/timeline.md`
- `memories/_index.md`
- 项目所需的各角色记忆文件

这里要区分两层：

- **时间线** 是客观事实
- **记忆图谱** 是主观回忆

如果角色记错了某件事，这种"记忆偏差"应体现在记忆图谱，而不是直接改写客观时间线。

## 7. 规划章节与场景

接下来把 Story Bible 转化为可执行的叙事结构。

先生成章节或路线大纲：

```text
读取 prompts/chapter_planning.md。
以 Narrative Designer 的身份行动。

读取 projects/moonlight/ 的完整 Story Bible。
规划章节结构。定义幕结构、章节分配、依赖图和逐场景大纲。
```

随后生成每个场景的定义：

```text
读取 prompts/generate_scene.md。
以 Narrative Designer 的身份行动。

为 Moonlight 的 Chapter 01 生成所有场景定义。
```

一个标准场景定义至少包括：

- 戏剧功能
- 张力位置
- POV 与出场角色
- 地点与时间
- 信息流
- 伏笔埋设或回收

## 8. 编写对白

场景定义完成后，把它交给 Dialogue Writer：

```text
读取 agents/dialogue-writer/agent.md。
读取 prompts/generate_dialogue.md。
以 Dialogue Writer 的身份行动。

读取场景文件 projects/moonlight/story/chapters/01-opening.md。
读取相关角色文件。
为这个场景写对白，并加上潜台词标注。
```

对白输出至少包含：

- 说话人标记
- 每句的情绪状态
- 潜台词说明
- 关系张力注释

输出写入 `dialogue/`。

## 9. 进行一致性审查

在任何内容被视为 canon 之前，都应运行 Lore Auditor：

```text
读取 agents/lore-auditor/agent.md。
读取 prompts/review_consistency.md。
以 Lore Auditor 的身份行动。

对 projects/moonlight/ 进行完整一致性审计。
报告所有违规、警告和建议。
```

Lore Auditor 重点检查：

- 时间线冲突
- 角色知识泄漏
- 声音不一致
- 世界规则违背
- 未回收的伏笔
- 不可达的结局

建议在开发中频繁做局部审计，在里程碑阶段做全量审计。

## 10. 导出项目

当 Story Bible 稳定后，再导出为生产可用格式：

```text
projects/moonlight/ 的 Story Bible 已完成并审计通过。
导出为以下格式：
1. JSON Event Graph
2. Godot Dialogic 时间线
3. 剧本格式
```

导出结果进入：

- `exports/json/`
- `exports/godot/`
- `exports/screenplay/`

## 11. 持续迭代

Lore Forge 不是一次性生成器。标准迭代循环如下：

```text
访谈 → Story Bible 增长
生成新内容
Lore Auditor 检查一致性
发现缺口
重新访谈或修正模块
重复
```

你可以在任何阶段返回重新访谈、重做角色、重构章节或重审对白。整个项目始终以 Story Bible 为单一事实来源。

## 推荐顺序

如果你想走最稳妥的流程，推荐顺序如下：

1. 验证框架
2. 创建项目
3. 进行概念访谈
4. 创建核心角色
5. 构建时间线与记忆图谱
6. 规划章节或路线
7. 生成场景
8. 编写对白
9. 审计
10. 导出

## 下一步阅读

- [架构](/zh/architecture)
- [工作流](/zh/workflow)
- [项目结构](/zh/project-structure)
