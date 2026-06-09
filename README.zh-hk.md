<p align="center">
  <img src="https://img.shields.io/badge/status-v0.1-blue" alt="狀態">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="許可">
</p>

# Lore Forge

**AI 輔助敘事設計框架。透過結構化訪談、知識管理同一致性檢查，建立同維護一個活嘅 Story Bible。**

Lore Forge 將故事創作視為**知識工程**——而唔係文字生成。佢幫創作人設計敘事 RPG、視覺小說、互動小說同桌上 RPG 戰役，將長期可維護性放喺第一位。

---

## 核心理念

| 傳統 AI 寫作 | Lore Forge |
|-------------|------------|
| 諗法 → 生成故事 | 諗法 → 訪談 → Story Bible → 角色設計 → 時間線 → 記憶圖譜 → 敘事設計 → 對白 → 匯出 |

**Story Bible 係唯一嘅事實來源。** 所有嘢都由佢衍生出嚟。

---

## 框架結構

```
lore-forge/
├── .bootstrap/        框架自舉工具
├── agents/            5 個職責邊界明確嘅 AI Agent
├── prompts/           6 個 Agent 調用工作流模板
├── templates/         3 種敘事體裁嘅項目 Scaffold
├── docs/              框架文件（VitePress）
└── projects/          用戶工作區（active / archived / templates）
```

### 五個 Agent

| Agent | 職責 | 階段 |
|-------|------|------|
| **Lore Architect**（世界觀架構師） | 世界構建同知識層 | 1 — 概念探索 |
| **Character Therapist**（角色心理治療師） | 角色心理學同成長弧 | 2 — 角色探索 |
| **Narrative Designer**（敘事設計師） | 章節／場景結構同節奏 | 3–5 — 時間線 → 敘事 |
| **Dialogue Writer**（對白編寫師） | 角色聲音同潛台詞 | 6 — 對白創作 |
| **Lore Auditor**（設定審計師） | 跨模組一致性檢查 | 7 — 一致性審查 |

### 六個工作流

| 工作流 | 輸入 | 輸出 |
|--------|------|------|
| 訪談 (Interview) | 用戶回答 | 願景、主題、世界規則 |
| 生成角色 (Generate Character) | 角色概念 | 完整心理畫像 |
| 章節規劃 (Chapter Planning) | Story Bible | 章節大綱 + 依賴圖 |
| 生成場景 (Generate Scene) | 章節上下文 | 場景定義 |
| 生成對白 (Generate Dialogue) | 場景 + 角色檔案 | 標註對白腳本 |
| 一致性審查 (Review Consistency) | 全部 Story Bible 模組 | 審計報告（違規／警告） |

### 三種模板

| 模板 | 骨架 | 體裁特有模組 |
|------|------|------------|
| `narrative_rpg` | 章節 + 任務 | `quests/` |
| `visual_novel` | 共通路線 + 分支 | `story/routes/` |
| `interactive_fiction` | 狀態圖 + 節點 | `events/` |

---

## 使用指南

Lore Forge 設計嚟同任何 AI 編程助手配合使用（Claude、ChatGPT、Cursor 等）。框架提供結構化嘅指令，AI 讀取並執行。你擔任創意總監——AI 係你專屬嘅寫作團隊。

以下係由空白文件夾到可以匯出遊戲嘅完整工作流程。

---

### 階段 0 —— 框架初始化

複製 Repository 並喺 AI 助手入面打開。

```bash
git clone https://github.com/immane/lore-forge.git
cd lore-forge
```

第一次用嗰陣，同你嘅 AI 助手講：

```
讀取 .bootstrap/architect.md。你而家係 Lore Forge 架構師。
驗證框架結構係咪完整同準備好使用。
```

AI 會檢查所有 Agent、Prompt 同模板係咪就位。

---

### 階段 1 —— 概念探索

故事喺呢度開始。Lore Architect Agent 透過訪談嚟提取你嘅世界觀基礎。你唔需要乜都諗清楚——訪談過程會同你一齊發現故事。

同你嘅 AI 助手講：

```
讀取 .bootstrap/project_creator.md。我想建立一個新項目。

項目名稱：月光
體裁：敘事 RPG
靈感來源：To The Moon、Finding Paradise
主題：遺憾、寬恕、記憶
目標時長：6-8 小時
目標平台：PC
```

AI 會喺 `projects/moonlight/` 搭建你嘅項目，包含完整嘅 Story Bible 目錄結構。

然後開始訪談：

```
讀取 .bootstrap/story_interviewer.md。
讀取 prompts/interview.md。
以 Lore Architect 嘅身份行動。

分析 projects/moonlight/ 嘅當前 Story Bible。
開始概念探索訪談。一次問我一個問題。
```

Lore Architect 會按結構化順序提問：

- **情感核心** — 「玩家玩完之後應該帶住咩感受離開？」
- **類型同基調** — 「喺樂觀—悲觀嘅光譜上，呢個故事位於邊個位置？」
- **主題錨點** — 「呢個故事探索嘅核心問題係咩？」
- **世界規則** — 「係咪有魔法系統、先進科技或者超自然元素？」
- **結局設計** — 「故事應該有邊啲結局？點樣先算真正打動人心？」
- **內容邊界** — 「有邊啲主題、基調或者內容類型需要避免？」

逐一回答每個問題。AI 將你嘅回答寫入：
- `projects/moonlight/story/vision.md`
- `projects/moonlight/story/themes.md`
- `projects/moonlight/story/emotional_core.md`
- `projects/moonlight/story/ending_design.md`
- `projects/moonlight/knowledge/canon.md`
- `projects/moonlight/knowledge/rules.md`
- `projects/moonlight/knowledge/glossary.md`

預計 20–50 個問題，可以跨多次會話進行。你可以隨時暫停同恢復——Story Bible 係持久化嘅。


### 階段 2 —— 角色探索

世界基礎紮實之後，Character Therapist Agent 幫你發現角色陣容。

```
讀取 agents/character-therapist/agent.md。
讀取 prompts/generate_character.md。
以 Character Therapist 嘅身份行動。

讀取 projects/moonlight/ 嘅 Story Bible。
我想建立主角。佢個名係 Luna。
開始角色探索訪談。
```

Character Therapist 深入挖掘每個角色嘅心理：

- **核心創傷** — 咩傷害咗佢哋？幾時？佢哋點樣應對？
- **慾望金字塔** — 表層慾望 → 深層慾望 → 真正需求
- **恐懼階梯** — 輕微焦慮 → 主要恐懼 → 存在性恐懼
- **防禦機制** — 佢哋點樣保護自己？
- **自我欺騙** — 佢哋對自己講咗咩大話？
- **聲音特徵** — 講嘢方式、詞彙量、口頭禪、沉默模式
- **成長弧** — 故事開始 vs 結束嗰陣係邊個？咩改變咗佢哋？

每個角色嘅輸出：`projects/moonlight/characters/luna.md`

對每個主要角色重複此流程。Character Therapist 確保：
- 每個角色都有內在矛盾（唔容許完美角色）
- 聲音特徵互不相同（冇兩個角色聽落一樣）
- 關係係雙向嘅（如果 A 驚 B，B 嘅檔案必須體現呢一點）

```
而家建立反派。佢個名係 Sol。
仲要建立 Luna 嘅導師同佢嘅童年好友。
```


### 階段 3 —— 時間線構建

角色定義完成後，Narrative Designer 構建世界級時間線。

```
讀取 agents/narrative-designer/agent.md。
以 Narrative Designer 嘅身份行動。

讀取 projects/moonlight/story/ 同 projects/moonlight/characters/ 下面嘅所有文件。
構建世界時間線同角色時間線。
填充 projects/moonlight/story/timeline.md。
```

AI 構建：
- **世界紀元** — 每個時代嘅定義事件、社會狀態、關鍵人物
- **故事時間線** — 章節級時間線，含遊戲內日期同持續時長
- **角色時間線** — 每個角色嘅出生、成長事件、進入故事、離開故事
- **匯聚點** — 角色線索交匯嘅位置

輸出：`projects/moonlight/story/timeline.md`


### 階段 4 —— 記憶圖譜

Narrative Designer 繪製主觀記憶——每個角色記得咩、幾時記起、呢啲記憶係咪可靠。

```
以 Narrative Designer 嘅身份行動。

讀取 projects/moonlight/characters/ 同 projects/moonlight/story/timeline.md。
構建記憶圖譜。對每個主要角色，追溯佢哋嘅記憶鏈：
邊啲成長記憶塑造咗佢哋？咩觸發咗呢啲回憶？係咪有被壓抑或者虛假嘅記憶？
```

輸出：`projects/moonlight/memories/_index.md` 及每個角色嘅記憶文件。

記憶圖譜同時間線唔同——時間線係客觀事實，記憶係主觀嘅。角色對事件嘅記憶可能同實際發生嘅嘢唔同。記憶同真相之間嘅差距創造戲劇張力。


### 階段 5 —— 敘事設計

原材料就緒。Narrative Designer 將佢結構化為章節同場景。

```
讀取 prompts/chapter_planning.md。
以 Narrative Designer 嘅身份行動。

讀取 projects/moonlight/ 嘅完整 Story Bible。
規劃章節結構。定義幕結構、章節分配、依賴圖同逐場景大綱。
```

AI 產出：

- **幕結構** — 三幕或五幕，含幕間轉折事件
- **張力曲線** — 跨所有章節嘅戲劇張力映射
- **依賴圖** — 邊啲章節必須喺前、邊啲可以並行
- **章節詳情** — 概要、視角角色、情感弧線、每章所需場景

輸出：`projects/moonlight/story/chapters/_outline.md`

然後生成每個場景：

```
讀取 prompts/generate_scene.md。
以 Narrative Designer 嘅身份行動。

為 Moonlight 嘅 Chapter 01 生成所有場景定義。
```

每個場景包含：
- 戲劇功能（揭示／升級／逆轉／緩解／鋪墊）
- 喺章節張力曲線上嘅位置
- 情感轉換（讀者嘅起始情感 → 結束情感）
- 視角角色、出場角色、地點、時間
- 資訊流（讀者知咩、角色知咩、戲劇性反諷）
- 伏筆集成（需要埋下嘅種子或需要回收嘅伏筆）

輸出：`projects/moonlight/story/chapters/01-*.md`


### 階段 6 —— 對白創作

場景已定義。Dialogue Writer 賦予每個角色聲音。

```
讀取 agents/dialogue-writer/agent.md。
讀取 prompts/generate_dialogue.md。
以 Dialogue Writer 嘅身份行動。

讀取場景文件 projects/moonlight/story/chapters/01-opening.md。
讀取角色文件 projects/moonlight/characters/luna.md 同 sol.md。
為呢個場景寫對白。用情感狀態、潛台詞同關係張力註釋標註每行。
```

Dialogue Writer 產出標註對白：

```markdown
**Luna** [狀態：焦慮、期待]
{潛台詞：佢喺度試探 Sol 係咪仲記得——佢唔想直接問}
「你仲記唔記得嗰晚？」

**Sol** [狀態：警惕、輕蔑]
{潛台詞：佢記得一清二楚，但唔會俾佢如願}
「邊晚？晚晚都咁多晚。」
```

輸出：`projects/moonlight/dialogue/01-opening.md`

Dialogue Writer 強制規則：
- 每個角色聽落都唔同（拎走講嘢人標籤——仲分唔分辨到邊個講緊嘢？）
- 角色唔可以講佢哋未被告知嘅嘢（知識邊界檢查）
- 所有世界內術語必須同詞彙表一致
- 每段對白都要有潛台詞（角色好少直接講心底話）


### 階段 7 —— 一致性審查

喺任何內容被視為最終稿之前，Lore Auditor 檢查一切。

```
讀取 agents/lore-auditor/agent.md。
讀取 prompts/review_consistency.md。
以 Lore Auditor 嘅身份行動。

對 projects/moonlight/ 進行完整一致性審計。
報告所有違規、警告同建議。
```

Auditor 交叉檢查每個模組：

- **時間線檢查** — 事件 B 係咪喺事件 A 引用佢之前發生？
- **角色知識** — 係咪有角色知道佢哋唔應該知道嘅嘢？
- **聲音一致性** — 每個角色嘅對白係咪符合佢嘅聲音特徵？
- **規則合規** — 係咪有任何內容違反咗 `knowledge/rules.md` 入面嘅世界規則？
- **伏筆** — 每個埋下嘅種子都必須有回收；每個回收都必須有種子嘅來源
- **結局可達性** — 所有預期結局係咪仍然可達？

輸出：`projects/moonlight/_audit/2026-06-10-full-report.md`

發現分級：
- **嚴重** — 硬性矛盾，必須喺定稿前修復
- **高** — OOC 行為、聲音不一致，阻止定稿
- **中** — 基調漂移、動機薄弱（建議）
- **低** — 風格建議

隨時可以運行針對性審計（單個角色、單個章節）：

```
以 Lore Auditor 嘅身份行動。對角色 Luna 進行針對性審計。
將佢嘅對白同心理檔案進行比對。
```


### 階段 8 —— 遊戲匯出

Story Bible 通過審計後，匯出為遊戲可用格式。

```
projects/moonlight/ 嘅 Story Bible 已完成並審計通過。
匯出為以下格式：
1. JSON Event Graph（用於 Unity／自訂引擎）
2. Godot Dialogic 時間線
3. 劇本格式（用於參考／配音錄製）
```

輸出：
- `projects/moonlight/exports/json/` — 遊戲引擎結構化嘅 JSON
- `projects/moonlight/exports/godot/` — Dialogic 相容嘅時間線文件
- `projects/moonlight/exports/screenplay/` — Fountain 格式劇本


### 迭代循環

Lore Forge 為持續迭代而設計，而唔係一次性生成：

```
1. 訪談 → Story Bible 增長
2. 編寫新內容（角色、場景、對白）
3. Lore Auditor 檢查一致性
4. 修復問題，如發現缺口則重新訪談
5. 重複直至 Story Bible 完整
6. 匯出
```

你可以隨時返去任何階段。Story Bible 係持久化嘅事實來源——喺第 6 個月添加新角色嘅流程同第 1 日建立第一個角色完全一樣。

對大型項目，喺活躍開發期間運行針對性審計，喺里程碑節點（一幕結束、匯出前）運行全項目審計。

---

## Agent 生命週期

```
概念探索  →  角色探索  →  時間線  →  記憶圖譜
    ↓                                              ↓
  遊戲匯出  ←  一致性審查  ←  對白  ←  敘事設計
```

全部 8 個階段透過框架入面定義嘅 prompts 同 agents 編排。每個 Agent 從上游模組讀取數據，寫入自己嘅領域，跨域變更委託畀對應嘅 Agent 處理。

---

## 文件

完整文件請瀏覽 **[Lore Forge 文件站](https://immane.github.io/lore-forge/)**。

| 文件 | 說明 |
|------|------|
| [架構](https://immane.github.io/lore-forge/architecture) | 框架設計同組件 |
| [工作流](https://immane.github.io/lore-forge/workflow) | Agent 生命週期同數據流 |
| [項目結構](https://immane.github.io/lore-forge/project-structure) | 目錄佈局同 Story Bible 設計 |

---

## 許可

MIT
