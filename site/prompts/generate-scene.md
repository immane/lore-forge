# Generate Scene

## 作用

`Generate Scene` 负责把章节大纲转换为结构化场景定义，确保每一场戏都承担明确的叙事任务。

## 触发条件

- 章节大纲已存在
- 用户要求编写某一章或某一场的结构
- Narrative Designer 发现某个叙事空缺
- 用户显式要求进入 Phase 5

## 负责 Agent

Narrative Designer

## 依赖

- `story/chapters/_outline.md`
- `story/themes.md`
- `story/emotional_core.md`
- `story/timeline.md`
- `story/foreshadowing.md`
- `story/ending_design.md`
- 相关角色文件
- `locations/`
- `knowledge/`

## 工作流结构

### Step 1：确定场景存在理由

1. 戏剧功能是什么？
2. 场景在张力曲线的哪个位置？
3. 读者的情绪会如何变化？

### Step 2：定义场景组成

4. POV 角色是谁？
5. 有哪些角色在场？他们各自要什么？
6. 地点是什么？它如何影响氛围和行为可能性？
7. 这一幕发生在时间线的什么位置？

### Step 3：定义信息流

8. 读者会知道什么？
9. 角色会知道什么？
10. 戏剧性反讽在哪里？
11. 有没有暂时无法被完全理解的隐藏层？

### Step 4：定义边界

12. 场景开始时的状态是什么？
13. 场景结束时改变了什么？
14. 有没有不可逆转的时刻？

### Step 5：处理伏笔

15. 检查是否需要埋伏笔或回收伏笔
16. 如果埋伏笔，记录到寄存表
17. 如果回收伏笔，确认其之前确实被种下过

## Inputs

- 章节上下文
- 相关角色文件
- Knowledge Layer
- 伏笔寄存表

## Outputs

- `story/chapters/{NN}-{title}.md`
- `story/chapters/_outline.md` 更新
- `story/foreshadowing.md` 更新
- `story/timeline.md` 更新
- `story/emotional_map.md` 更新

## 校验规则

- 每个场景必须有且只有一个主要戏剧功能
- 场景开头必须逻辑承接上一场结尾
- 角色获得的新信息必须和时间线一致
- 如违反世界规则，应立即中止并交给审计
- 没有戏剧功能的场景应被删除或合并
