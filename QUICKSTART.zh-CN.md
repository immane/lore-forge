# 快速开始

如果你希望快速启动一个 Lore Forge 项目，而无需事先阅读完整文档，请使用本文档。

## 1. 打开仓库

```bash
git clone https://github.com/immane/lore-forge.git
cd lore-forge
```

在 AI 助手或智能体平台中打开此文件夹。

支持的工具有：Codex、Claude Code、OpenCode、Cursor、GitHub Copilot agents、Gemini CLI 以及类似的编码或文档智能体。

大多数平台会自动读取 `AGENTS.md`。如果没有，请发送：

```text
读取 AGENTS.md 并确认 Lore Forge 已就绪可用。
```

## 2. 创建项目

将以下提示复制到你的 AI 助手中：

```text
创建一个新的 Lore Forge 项目。

项目名称：月光
类型：叙事型 RPG
灵感来源：To The Moon、Finding Paradise
主题：遗憾、原谅、记忆
目标时长：6-8 小时
目标平台：PC
```

AI 助手应在以下位置创建项目：

```text
projects/active/moonlight/
```

然后它会开始概念发现访谈。

## 3. 继续访谈

每次回到项目时使用此提示：

```text
继续「月光」项目。
阅读当前的 Story Bible，找出影响最大的缺失信息，然后向我提出下一个聚焦的问题。
```

自然地回答每个问题。AI 助手会随着进度更新 Story Bible。

## 4. 创建角色

```text
为「月光」创建主角 Luna。
使用 Character Therapist 工作流，开始角色发现访谈。
```

然后对主要角色重复操作：

```text
为「月光」创建反派 Sol。
使用 Character Therapist 工作流，确保其心理、声音以及与 Luna 的关系都有鲜明区分。
```

## 5. 构建故事结构

时间线：

```text
为「月光」从已确认的 Story Bible 中构建世界时间线和角色时间线。
```

记忆图谱：

```text
为「月光」构建所有主要角色的记忆图谱。
追踪成长记忆、触发点、虚假记忆、压抑记忆，以及记忆与真相之间的冲突。
```

章节或路线：

```text
为「月光」根据当前 Story Bible 规划章节结构。
定义幕、章节分配、依赖关系图以及逐场景大纲。
```

场景：

```text
为「月光」生成第一章的场景定义。
使用 Narrative Designer 工作流，并保持与 Story Bible 正典一致。
```

## 6. 编写对话

```text
为「月光」编写第一章开场场景的对话。
使用已建立的角色档案、声音签名、潜台词、关系张力和知识边界。
```

## 7. 导出前审计

在开发过程中进行针对性审计：

```text
为「月光」对 Luna 运行针对性审计。
对照她的角色档案，检查她的对话、决策、知识边界和成长弧。
```

在导出前进行全面审计：

```text
对 projects/active/moonlight/ 运行完整的 Lore Forge 一致性审计。
报告关键矛盾、警告和建议修复方案，并附上文件引用。
```

## 8. 导出

Story Bible 通过审计后：

```text
projects/active/moonlight/ 下的 Story Bible 已完成并通过审计。
导出 JSON Event Graph、Godot Dialogic 时间线、小说手稿 Markdown 和剧本参考文件。
```

预期输出位置：

```text
projects/active/moonlight/exports/json/
projects/active/moonlight/exports/godot/
projects/active/moonlight/exports/novel/
projects/active/moonlight/exports/screenplay/
```

只导出小说时：

```text
将「月光」导出为小说手稿。
使用已确认的 Story Bible、场景规划、角色档案、对话和审计结果。
创建大纲导出、章节小说草稿，以及连续的手稿 Markdown 文件。
不要发明新的正典；缺失信息请标记为 TODO。
```

## 实用快捷提示

```text
继续当前活跃的 Lore Forge 项目。
```

```text
找出下一个缺失的 Story Bible 决策，只问我一个问题。
```

```text
审计当前章节的时间线、角色知识和正典冲突。
```

```text
总结当前项目状态，推荐下一步工作流步骤。
```

## 经验法则

不要一开始就让 AI 助手"写整个故事"。

请改用以下循环：

```text
访谈 -> Story Bible -> 角色 -> 时间线 -> 记忆图谱 -> 章节 -> 场景 -> 对话 -> 审计 -> 导出
```
