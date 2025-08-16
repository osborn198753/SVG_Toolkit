# SVG Icon Toolkit

一個完整的 SVG 圖示管理系統，專為網頁應用程式設計，採用精靈圖示 (sprite) 架構，整合多個 SVG 檔案為統一的圖示系統。

## ✨ 功能特色

- 🎯 **統一精靈圖示系統** - 18 個圖示整合在單一 SVG 檔案中
- 🔧 **完整 JavaScript API** - 圖示載入、搜尋、分類管理
- 🎨 **互動式展示介面** - 即時預覽、測試與程式碼生成
- 📱 **響應式設計** - 使用 Tailwind CSS，支援各種螢幕尺寸
- 🌐 **雙語支援** - 中文與英文界面
- ♿ **無障礙設計** - 完整的 ARIA 標籤與語意化標記

## 📦 專案結構

```
SVG_Toolkit/
├── sprite-icons.svg          # 統一的 SVG 精靈圖示檔案
├── index.js                  # 主要 JavaScript API
├── icons-manifest.json       # 圖示元數據與配置
├── icons-showcase.html       # 互動式展示與測試介面
├── _old/                     # 舊版檔案與開發過程
├── test-svgs/               # 測試用 SVG 檔案
├── task.md                  # 專案規格與進度追蹤
└── README.md                # 專案說明文件
```

## 🚀 快速開始

### 基本使用

1. **直接在 HTML 中使用**
```html
<!-- 載入精靈圖示 -->
<script>
  fetch('./sprite-icons.svg')
    .then(response => response.text())
    .then(svg => {
      document.body.insertAdjacentHTML('afterbegin', 
        `<div style="display:none">${svg}</div>`);
    });
</script>

<!-- 使用圖示 -->
<svg class="w-6 h-6" fill="currentColor">
  <use href="#icon-search"></use>
</svg>
```

2. **使用 JavaScript API**
```javascript
import { loadAllIcons, createIconSVG } from './index.js';

// 載入所有圖示到 DOM
loadAllIcons();

// 動態建立圖示
const searchIcon = createIconSVG('search', {
  className: 'w-6 h-6 text-blue-500',
  ariaLabel: '搜尋'
});
document.body.appendChild(searchIcon);
```

### 開發與測試

1. **開啟展示介面**
   ```bash
   # 在瀏覽器中開啟
   open icons-showcase.html
   ```

2. **使用展示功能**
   - 🎛️ 調整圖示大小與顏色
   - 🔍 搜尋與篩選圖示
   - 📋 點擊圖示複製程式碼
   - 📂 按分類瀏覽圖示

## 📚 API 文件

### 核心函數

| 函數名稱 | 說明 | 用法 |
|---------|------|------|
| `loadAllIcons()` | 載入所有圖示到 DOM | `loadAllIcons()` |
| `hasIcon(name)` | 檢查圖示是否存在 | `hasIcon('search')` |
| `getIconId(name)` | 取得圖示的符號 ID | `getIconId('search')` |
| `searchIcons(keyword)` | 搜尋圖示 | `searchIcons('購物')` |
| `getIconsByCategory(cat)` | 按分類取得圖示 | `getIconsByCategory('common')` |
| `listAllIcons()` | 列出所有圖示 | `listAllIcons()` |

### 圖示分類

| 分類 | 說明 | 圖示數量 | 範例 |
|------|------|----------|------|
| `common` | 通用 UI 圖示 | 4 個 | search, cart, user, menu |
| `actions` | 電商功能圖示 | 8 個 | benefits, delivery, store, bundle |
| `social` | 社交聯絡圖示 | 5 個 | facebook, instagram, line, envelope |
| `logo` | 品牌標誌圖示 | 1 個 | brand logo |

### 圖示命名規則

- **通用圖示**: `icon-{名稱}` (例：`icon-search`)
- **功能圖示**: `actions-icon-{名稱}` (例：`actions-icon-benefits`)
- **社交圖示**: `social-icon-{名稱}` (例：`social-icon-facebook`)
- **品牌圖示**: `brand-logo`

## 🎯 使用範例

### 電商網站標頭
```html
<header class="flex items-center justify-between p-4">
  <!-- 品牌標誌 -->
  <svg class="h-8" fill="currentColor">
    <use href="#brand-logo"></use>
  </svg>
  
  <!-- 搜尋框 -->
  <div class="flex items-center">
    <svg class="w-5 h-5 text-gray-400 mr-2" fill="currentColor">
      <use href="#icon-search"></use>
    </svg>
    <input type="text" placeholder="搜尋商品...">
  </div>
  
  <!-- 使用者選單 -->
  <div class="flex space-x-4">
    <svg class="w-6 h-6" fill="currentColor">
      <use href="#icon-user"></use>
    </svg>
    <svg class="w-6 h-6" fill="currentColor">
      <use href="#icon-cart"></use>
    </svg>
  </div>
</header>
```

### 功能按鈕群組
```html
<div class="grid grid-cols-4 gap-4">
  <button class="flex flex-col items-center p-4">
    <svg class="w-8 h-8 mb-2 text-amber-500" fill="currentColor">
      <use href="#actions-icon-benefits"></use>
    </svg>
    <span>會員福利</span>
  </button>
  
  <button class="flex flex-col items-center p-4">
    <svg class="w-8 h-8 mb-2 text-blue-500" fill="currentColor">
      <use href="#actions-icon-delivery"></use>
    </svg>
    <span>當日配送</span>
  </button>
</div>
```

## 🛠️ 技術規格

- **圖示總數**: 18 個
- **檔案格式**: SVG (精靈圖示)
- **支援框架**: 原生 JavaScript、任何支援 SVG 的框架
- **樣式系統**: Tailwind CSS (展示介面)
- **瀏覽器支援**: 所有現代瀏覽器
- **無障礙**: WCAG 2.1 AA 標準

## 📈 專案狀態

✅ **已完成**
- SVG 檔案整合與最佳化
- JavaScript API 開發
- 互動式展示介面
- 完整文件與範例
- 無障礙功能實作

## 🤝 貢獻指南

1. **新增圖示**
   - 將 SVG 檔案放入 `test-svgs/` 目錄
   - 使用展示介面測試圖示邊界
   - 更新 `icons-manifest.json`
   - 重新生成 `sprite-icons.svg`

2. **修改功能**
   - 在 `index.js` 中添加新 API
   - 更新 `icons-showcase.html` 展示功能
   - 測試並確保向下相容

## 📝 授權

此專案為內部使用，請遵循公司相關授權政策。

## 🔗 相關連結

- [Tailwind CSS 文件](https://tailwindcss.com)
- [SVG Symbols 規範](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol)
- [Web 無障礙指南](https://www.w3.org/WAI/WCAG21/quickref/)

---

**製作團隊**: 內部開發 | **最後更新**: 2025-08-16 | **版本**: 2.0.0