# 项目结构

```text
project-root/
├── .bootstrap/          # 框架自举与升级
├── agents/              # 5 个 Agent 定义
├── prompts/             # 6 个工作流 Prompt
├── templates/           # 3 类项目模板
├── docs/                # 框架文档内容
├── site/                # GitHub Pages 站点容器
└── projects/            # 用户项目工作区
    ├── active/          # 正在开发的项目
    ├── archived/        # 已归档项目
    └── templates/       # 用户自定义模板
```

## 项目级 Story Bible 结构

```text
projects/active/my-story/
├── project.md           # 项目元信息
├── story/               # 叙事设计
│   ├── vision.md
│   ├── themes.md
│   ├── emotional_core.md
│   ├── timeline.md
│   ├── foreshadowing.md
│   ├── ending_design.md
│   └── chapters/        # 或 routes/ / branches/
├── characters/          # 角色档案
├── memories/            # 记忆图谱
├── locations/           # 地点档案
├── dialogue/            # 对白脚本
├── quests/              # 或 events/
├── knowledge/           # 知识层
│   ├── canon.md
│   ├── glossary.md
│   ├── rules.md
│   ├── symbolism.md
│   └── emotional_map.md
├── exports/             # 引擎与手稿导出结果
│   ├── json/
│   ├── godot/
│   ├── novel/
│   └── screenplay/
└── _audit/              # 一致性审计报告
```

## 各目录职责

### `.bootstrap/`

负责框架本身建设，包括：

- 架构定义
- 项目初始化
- 故事访谈入口

### `agents/`

存放长期角色 Agent 的定义。每个 Agent 都有明确的：

- Purpose
- Inputs
- Outputs
- Responsibilities
- Limitations

### `prompts/`

存放工作流级 Prompt。每个 Prompt 都规定：

- Inputs
- Outputs
- Dependencies
- Trigger Conditions

### `templates/`

定义不同类型项目的起始骨架。当前包括：

- Narrative RPG
- Visual Novel
- Interactive Fiction

### `projects/`

所有真实作品内容都必须放在这里。框架文件不得混入 `projects/`。

## 结构设计原则

- 框架与作品分离
- 内容层与展示层分离
- 文档、Agent、Prompt、模板各有独立职责
- Story Bible 必须能够长期迭代而不失控
