# Symbol Format SVG Files

此資料夾存放轉換為 symbol 格式的 SVG 檔案 / This directory stores SVG files converted to symbol format.

## 用途 / Purpose

- 存放轉換為 `<symbol>` 格式的 SVG 檔案
- 準備合併到主要 sprite 檔案中的檔案
- 用於測試 symbol 格式是否正確

## Symbol 格式要求 / Symbol Format Requirements

```xml
<symbol id="unique-icon-id" viewBox="0 0 24 24">
  <!-- SVG 內容 -->
</symbol>
```

## 注意事項 / Notes

- 每個 symbol 必須有唯一的 id
- 移除外層的 `<svg>` 標籤
- 保留 viewBox 屬性