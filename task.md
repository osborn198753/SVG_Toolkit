### SVG Sprites by Using SVG Symbols

### SVG BBOX Inspector HTML

---

## sprite js and config json

- index.js,icons-manifest.json

## svg src svgo

- actions-icons.svg,common-icons.svg,logo.svg,social-icons.svg
- sprite-icons.svg

---

將舊有的 4 個 svg 檔合併成 1 個 sprite-icons.svg . 並重新寫 js 與 設定檔 json
透過 svgo 套件，壓縮整理 svg 圖檔

## 測試的 html，及放要測試的 svg 的資料夾

---

## html

- show all icon . use tailwind css v4 cdn
- getbbox() test

---

## git

- every to do commit once

---

現在的進度，有些需要改變。 已經做完的有部份需要修改，你再完整分析專案內容後重新制訂 TODOLIST.

logo.svg 還未合併。 可能用手動加入？
測試的 html 是指 2 個， 1 個是展示所有的 icon ，這部份要用 tailwind css cdn 版本。且載 icon 方式要動態。 另一個是在對 getbbox 的測試 html 。
我看到你好像有要建 raw , processed 的資料夾，請繼續這部份。
getbbox() 的測試功能是， 將來我有新的 svg 圖，但因為圖中有太多空白，我會需要先來測試取得實際圖的邊界，開啟 html 後查看開發工具，取得邊界數據後，再調整 sprite 的設定值。
