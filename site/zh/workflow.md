# 工作流

## Agent 生命周期（8 个阶段）

| 阶段 | 名称 | 负责 Agent |
|------|------|-------------|
| 1 | Concept Discovery | Lore Architect |
| 2 | Character Discovery | Character Therapist |
| 3 | Timeline Construction | Narrative Designer |
| 4 | Memory Graph | Narrative Designer |
| 5 | Narrative Design | Narrative Designer |
| 6 | Dialogue Creation | Dialogue Writer |
| 7 | Consistency Review | Lore Auditor |
| 8 | 导出 | Export Layer |

## 端到端流程

```text
框架验证
  -> 创建项目
  -> 概念探索
  -> 角色发现
  -> 时间线构建
  -> 记忆图谱
  -> 章节 / 路线规划
  -> 场景设计
  -> 对白创作
  -> 一致性审查
  -> 导出
```

## 各阶段说明

### Phase 1：概念探索

- 负责 Agent：`Lore Architect`
- 主要 Prompt：`Interview`
- 目标：建立世界的情感核心、主题、规则与结局方向
- 主要输出：
  - `story/vision.md`
  - `story/themes.md`
  - `story/emotional_core.md`
  - `knowledge/canon.md`
  - `knowledge/rules.md`

### Phase 2：角色发现

- 负责 Agent：`Character Therapist`
- 主要 Prompt：`Generate Character`
- 目标：建立有心理可信度、声音区分度和成长弧的角色
- 主要输出：
  - `characters/{name}.md`
  - `characters/_index.md`
  - `knowledge/emotional_map.md`

### Phase 3：时间线构建

- 负责 Agent：`Narrative Designer`
- 目标：建立客观时间顺序，把世界事件和角色人生线组织起来
- 主要输出：
  - `story/timeline.md`

### Phase 4：记忆图谱

- 负责 Agent：`Narrative Designer`
- 目标：定义主观回忆、错误记忆、压抑记忆和触发链
- 主要输出：
  - `memories/_index.md`
  - 各角色记忆文件

### Phase 5：叙事设计

- 负责 Agent：`Narrative Designer`
- 主要 Prompts：`Chapter Planning`、`Generate Scene`
- 目标：把 Story Bible 结构化为幕、章、路线、分支和场景
- 主要输出：
  - `story/chapters/_outline.md` 或等价结构
  - `story/` 下的场景定义文件
  - `story/foreshadowing.md` 更新

### Phase 6：对白创作

- 负责 Agent：`Dialogue Writer`
- 主要 Prompt：`Generate Dialogue`
- 目标：写出符合心理设定、知识边界和整体语气的场景对白
- 主要输出：
  - `dialogue/{chapter}-{scene}.md`

### Phase 7：一致性审查

- 负责 Agent：`Lore Auditor`
- 主要 Prompt：`Review Consistency`
- 目标：检测矛盾、漂移、信息泄漏和不可达的叙事状态
- 主要输出：
  - `_audit/{date}-{scope}-report.md`

### Phase 8：导出

- 负责层：Export Layer
- 目标：把 Story Bible 转换成引擎可消费或手稿可修订的输出
- 主要输出：
  - `exports/json/`
  - `exports/godot/`
  - `exports/novel/`
  - `exports/screenplay/`

## 数据流

Agents 通过 Story Bible 模块协作。每个 Agent 从上游读取信息，只写自己负责的边界，不能直接篡改其他 Agent 的产出。

## 工作模式

Lore Forge 的正常工作方式是一个迭代循环：

1. 访谈并发现缺失信息
2. 写入或更新 Story Bible 模块
3. 生成结构化叙事产物
4. 运行一致性审查
5. 修复缺口与矛盾
6. 重复，直到 Story Bible 稳定

## 推荐理解方式

如果你第一次接触 Lore Forge，建议按这个顺序阅读：

1. [开始使用](/zh/getting-started)
2. [架构](/zh/architecture)
3. [项目结构](/zh/project-structure)

然后再看各个 Agent 和 Prompt 的页面，理解每个阶段的角色边界与输入输出。
