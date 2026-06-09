# 开始使用

Lore Forge 设计为与 AI 编程助手协作使用。框架提供结构、Agent、Prompt 和模板；你提供创意方向、回答问题并做最终决策。

本页基于 README.md 中定义的完整用法，给出从空仓库到可导出 Story Bible 的完整流程。

## 1. 克隆框架

```bash
git clone https://github.com/immane/lore-forge.git
cd lore-forge
```

然后在你的 AI 助手中打开该仓库。

## 2. 先验证框架本身

在创建项目之前，先让 AI 检查 Lore Forge 框架是否完整：

```text
Read .bootstrap/architect.md. You are now the Lore Forge Architect.
Verify the framework structure is complete and ready for use.
```

这一步会检查：

- `.bootstrap/` contains the framework bootstrap instructions
- `agents/` contains the five specialized agents
- `prompts/` contains the six workflow prompts
- `templates/` contains the three project templates

也就是确保框架不是半成品，而是已经具备完整的生产骨架。

## 3. 创建一个新项目

使用 Project Creator 创建 Story Bible 工作区：

```text
Read .bootstrap/project_creator.md. I want to create a new project.

Project Name: Moonlight
Genre: Narrative RPG
Inspirations: To The Moon, Finding Paradise
Themes: Regret, Forgiveness, Memory
Target Length: 6-8 hours
Target Platform: PC
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
├── quests/ or events/
├── knowledge/
└── exports/
```

这一步不会直接写剧情，而是先建立项目骨架。

## 4. 进入概念探索

项目目录建好之后，开始概念访谈：

```text
Read .bootstrap/story_interviewer.md.
Read prompts/interview.md.
Act as Lore Architect.

Analyze the current Story Bible at projects/moonlight/.
Start the concept discovery interview. Ask me questions one at a time.
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
Read agents/character-therapist/agent.md.
Read prompts/generate_character.md.
Act as Character Therapist.

Read the Story Bible at projects/moonlight/.
I want to create the protagonist. Their name is Luna.
Start the character discovery interview.
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
Read agents/narrative-designer/agent.md.
Act as Narrative Designer.

Read all story and character files in projects/moonlight/.
Construct the world timeline and character timelines.
Then build the memory graph.
```

这一阶段会创建：

- `story/timeline.md`
- `memories/_index.md`
- any per-character memory files needed by the project

这里要区分两层：

- **时间线** 是客观事实
- **记忆图谱** 是主观回忆

如果角色记错了某件事，这种“记忆偏差”应体现在记忆图谱，而不是直接改写客观时间线。

## 7. 规划章节与场景

接下来把 Story Bible 转化为可执行的叙事结构。

先生成章节或路线大纲：

```text
Read prompts/chapter_planning.md.
Act as Narrative Designer.

Read the full Story Bible at projects/moonlight/.
Plan the chapter structure. Define acts, chapter allocation, dependency graph,
and the scene-by-scene outline.
```

随后生成每个场景的定义：

```text
Read prompts/generate_scene.md.
Act as Narrative Designer.

For Chapter 01 of Moonlight, generate all scene definitions.
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
Read agents/dialogue-writer/agent.md.
Read prompts/generate_dialogue.md.
Act as Dialogue Writer.

Read the scene at projects/moonlight/story/chapters/01-opening.md.
Read the related character files.
Write the dialogue for this scene with subtext annotations.
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
Read agents/lore-auditor/agent.md.
Read prompts/review_consistency.md.
Act as Lore Auditor.

Run a full consistency audit on projects/moonlight/.
Report all violations, warnings, and suggestions.
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
The Story Bible at projects/moonlight/ is complete and audited.
Export to:
1. JSON Event Graph
2. Godot Dialogic timeline
3. Screenplay format
```

导出结果进入：

- `exports/json/`
- `exports/godot/`
- `exports/screenplay/`

## 11. 持续迭代

Lore Forge 不是一次性生成器。标准迭代循环如下：

```text
Interview -> Story Bible grows
New content is generated
Lore Auditor checks consistency
Gaps are found
Interview again or revise modules
Repeat
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

- [架构](/architecture)
- [工作流](/workflow)
- [项目结构](/project-structure)
