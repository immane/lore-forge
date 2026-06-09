# Chapter Planning

## 作用

`Chapter Planning` 负责把 Story Bible 的宏观信息组织成章节、路线或分支的大纲结构，是 Narrative Designer 的核心规划流程。

## 触发条件

- `story/vision.md`、`story/themes.md`、`story/emotional_core.md`、`story/timeline.md` 已建立
- 主要角色已存在
- `story/ending_design.md` 已定义
- 用户要求规划章节或故事大纲
- 用户显式要求进入 Phase 3 或 Phase 5

## 负责 Agent

Narrative Designer

## 依赖

- `story/vision.md`
- `story/themes.md`
- `story/emotional_core.md`
- `story/timeline.md`
- `story/ending_design.md`
- `characters/_index.md`
- 角色档案
- `knowledge/canon.md`
- `knowledge/rules.md`

## 工作流结构

### Step 1：定义幕结构

1. 使用几幕结构？
2. 每幕的闭合事件是什么？
3. 全局张力曲线如何变化？

### Step 2：分配章节职责

4. 每章突出哪个主题？
5. 每章推进哪个角色弧？
6. 每章主导情绪是什么？
7. 每章释放哪些信息？

### Step 3：构建依赖图

8. 哪些章节必须先发生？
9. 哪些线程可以并行？
10. 哪些地方会发生线索汇聚？

### Step 4：细化章节

11. 标题
12. 2-3 句概要
13. POV
14. 戏剧功能
15. 情感弧线
16. 所需场景
17. 所需角色
18. 伏笔任务
19. 节奏

### Step 5：与结局对齐

20. 从结局反推每条路径
21. 标记不可逆节点
22. 确认所有结局都能从章节结构中到达

## 输入

- Story Bible 宏观模块
- 角色档案与索引

## 输出

- `story/chapters/_outline.md`
- `story/chapters/` 占位结构
- `story/timeline.md` 更新
- `story/foreshadowing.md` 更新
- `story/emotional_map.md` 更新

## 校验规则

- 每章至少推进剧情、角色弧或主题之一
- 章节顺序不得违背已知时间线
- 每个结局都必须能从结构中追溯到路径
- 引入新规则时必须更新 `knowledge/rules.md`
- 依赖图必须无环
