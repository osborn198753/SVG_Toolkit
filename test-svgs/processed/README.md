# Processed SVG Files

此資料夾存放經過 SVGO 優化的 SVG 檔案 / This directory stores SVG files processed with SVGO.

## 用途 / Purpose

- 存放經過 SVGO 優化的 SVG 檔案
- 檔案大小已被優化，但尚未轉換為 symbol 格式
- 可用於單獨使用的圖示檔案

## 處理流程 / Processing Workflow

1. 從 `raw/` 資料夾取得原始檔案
2. 使用 SVGO 進行優化：`svgo input.svg -o processed/output.svg`
3. 檢查優化結果是否正確