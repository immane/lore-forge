# Generate Character

## 作用

`Generate Character` 是角色发现阶段的核心工作流。它把一个模糊的角色概念转化为心理完整、行为一致、声音鲜明的角色档案。

## 触发条件

- `story/vision.md` 与 `story/themes.md` 已建立
- 用户要求创建角色或设计阵容
- `characters/_index.md` 中缺少必要角色位
- 用户显式要求进入 Phase 2

## 负责 Agent

Character Therapist

## 依赖

- `story/vision.md`
- `story/themes.md`
- `story/emotional_core.md`
- `knowledge/canon.md`
- `knowledge/rules.md`
- `characters/_index.md`

## 工作流结构

### Step 1：定义叙事角色

1. 识别角色的叙事功能
2. 明确其与故事核心问题的关系
3. 把角色放进世界中的阵营与结构中

### Step 2：建立心理画像

4. 核心创伤
5. 欲望金字塔
6. 恐惧阶梯
7. 防御机制
8. 自我欺骗

### Step 3：建立行为签名

9. 声音特征
10. 肢体表现
11. 决策方式

### Step 4：建立关系锚点

12. 至少定义与两个角色的关系
13. 写出权力结构、共同历史与未解张力

### Step 5：建立成长弧

14. 起始状态
15. 终局状态
16. 变化催化剂
17. 抵抗变化的原因

## 输入

- 用户给出的角色概念
- Knowledge Layer
- 现有角色索引

## 输出

- `characters/{name}.md`
- `characters/_index.md` 更新
- `story/emotional_map.md` 更新
- 必要时更新其他角色的关系图

## 校验规则

- 每个角色都必须有可追溯到创伤的行为动机
- 每个角色都必须存在至少一个内部矛盾
- 声音特征必须与现有角色区分开
- 关系必须是双向定义
- 角色掌握的信息不得超出时间线暴露范围
