# SVGO 安裝與使用指南

## 安裝 SVGO

```bash
# 檢查 Node.js 與 npm 版本
npm --version
node --version

# 初始化專案（如果還沒有 package.json）
npm init -y

# 安裝 SVGO 作為開發依賴
npm install --save-dev svgo
```

## 基本使用

### 命令列操作
```bash
# 最佳化單一檔案
npx svgo _old/common-icons.svg --pretty

# 最佳化所有 SVG 檔案（如果有設定 npm scripts）
npm run optimize

# 針對精靈圖示最佳化（保留標題與描述）
npm run optimize-sprites
```

## SVGO 配置說明

專案已針對圖示精靈系統進行最佳化配置：

### 保留的元素
- ✅ `viewBox` 屬性（縮放必需）
- ✅ `title` 和 `desc` 元素（無障礙功能）
- ✅ Symbol ID（如 `icon-`, `actions-icon-`, `social-icon-` 前綴）

### 最佳化項目
- 🗑️ 移除設計工具產生的屬性（`data-name`, 樣式類別）
- 📐 路徑精度降至 2 位小數
- 🧹 清理空容器
- 📝 屬性排序一致化

## 實際應用範例

```bash
# 最佳化專案中的 SVG 檔案
npx svgo _old/common-icons.svg --config=svgo.config.js --pretty
npx svgo _old/actions-icons.svg --config=svgo.config.js --pretty
npx svgo _old/social-icons.svg --config=svgo.config.js --pretty
```

## 注意事項

- SVGO 配置專為精靈圖示系統設計
- 保留無障礙相關屬性
- 維持圖示的可用性與品質
- 適合生產環境使用

---

**狀態**: 已配置完成 ✅  
**用途**: SVG 檔案最佳化與壓縮  
**版本**: 支援最新 SVGO 版本
