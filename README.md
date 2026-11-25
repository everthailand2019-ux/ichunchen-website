# I-Chun Chen — 學術個人網站（可上線檔案）

一個純靜態、雙語（English / 繁體中文）的學術個人網站。無需伺服器或建置工具，直接把這個資料夾上傳即可上線。

## 檔案說明

| 檔案 | 用途 |
| --- | --- |
| `index.html` | 網站主檔（結構）。**要改版面結構時改這裡。** |
| `styles.css` | 所有樣式（配色、字體、版型）。改顏色或間距改這裡。 |
| `script.js` | 中英文內容字典與語言切換。**要改文字內容改這裡。** |
| `README.md` | 本說明 |

## 改內容（最常用）

所有文字都在 `script.js` 最上方的 `DICT` 物件裡，分成 `en`（英文）與 `zh`（繁體中文）兩組，鍵名相同、一一對應。
找到要改的鍵（例如 `"hero.lede"`），同時更新 `en` 與 `zh` 兩邊即可。英文論文標題與機構專有名詞刻意保留原文，不翻譯。

- 換**年份**：年份（如 `2024–25`）直接寫在 `index.html` 的 `datepill` 裡，不在字典中。
- 換**連結**（Scholar／ORCID／LinkedIn／ResearchGate／Email）：在 `index.html` 搜尋對應網址替換。

## 語言切換

右上角「中文 / EN」按鈕即可切換，選擇會記在瀏覽器裡。預設語言為英文；要改預設，把 `script.js` 最後 `initial()` 函式的 `return "en";` 改成 `return "zh";`。

## 上線方式（擇一）

**A. Netlify（最簡單，拖放即上線）**
1. 到 app.netlify.com → Add new site → Deploy manually
2. 把整個 `ichunchen-website` 資料夾拖進去即可，會立刻得到一個網址。

**B. GitHub Pages**
1. 建一個 repo，把這三個檔案推上去。
2. Settings → Pages → Source 選 `main` 分支根目錄 → 存檔，幾分鐘後上線。

**C. Vercel**
1. vercel.com → Add New → Project → 匯入 repo（或 `vercel` CLI 在資料夾內執行）。
2. 框架選「Other」，無需 build 指令，直接部署。

**換自有網域 / 取代現有 Notion 站**：上述任一平台都可綁定 `ichunchen.org`，在平台的 Domain 設定加入網域，並到你的網域商把 DNS 指向平台即可（取代目前指向 Notion 的設定）。

## 備註

- 字體用 Google Fonts（Fraunces／Inter／Noto Sans・Serif TC），需連網載入；離線時會自動退回系統字體。
- 內容取自你的現有網站（ichunchen.org），未虛構。公開 email 沿用網站上的 `smartechagingsolutions@gmail.com`。
- 網站鎖為明亮版面，不受瀏覽器深色模式影響。
