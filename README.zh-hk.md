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

## 快速開始

```bash
# 複製框架
git clone https://github.com/immane/lore-forge.git

# 框架可同任何 AI 編程助手配合使用。
# 要建立新項目，向你的 AI Agent 發送指令：

"讀取 .bootstrap/project_creator.md。建立一個叫「月光」嘅新項目。
體裁：敘事 RPG。主題：遺憾同寬恕。"
```

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
