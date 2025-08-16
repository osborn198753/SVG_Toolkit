// SVG 圖示系統統一管理 / SVG Icon System Management
import spriteIconsSVG from "./sprite-icons.svg?raw";
import iconsManifest from "./icons-manifest.json";

// 匯出圖示精靈圖 / Export icon sprite
export const iconSprite = spriteIconsSVG;

// 從 manifest 動態生成 iconIds / Generate iconIds from manifest
export const iconIds = iconsManifest.icons.reduce((acc, icon) => {
  acc[icon.id] = icon.symbolId;
  return acc;
}, {});

// 匯出完整的 manifest 資料 / Export complete manifest data
export const manifest = iconsManifest;

// 載入圖示精靈圖到 DOM / Load icon sprite into DOM
export function loadAllIcons() {
  const svgContainer =
    document.getElementById("global-svg-icons") ||
    (() => {
      const container = document.createElement("div");
      container.id = "global-svg-icons";
      container.style.display = "none";
      document.body.appendChild(container);
      return container;
    })();

  // 載入合併後的精靈圖 / Load merged sprite
  svgContainer.innerHTML = iconSprite;

  console.log(
    `✅ Icon sprite loaded successfully (${manifest.metadata.totalIcons} icons)`
  );
  console.log(
    `📦 Version: ${manifest.metadata.version}, Last updated: ${manifest.metadata.lastUpdated}`
  );
  
  return true;
}

// 工具函數：檢查圖示是否存在 / Utility: Check if icon exists
export function hasIcon(iconName) {
  return iconName in iconIds;
}

// 工具函數：取得圖示的完整 symbol ID / Utility: Get icon's complete symbol ID
export function getIconId(iconName) {
  return iconIds[iconName] || null;
}

// 工具函數：建立圖示使用的 SVG 元素 / Utility: Create SVG element for icon usage
export function createIconSVG(iconName, options = {}) {
  const symbolId = getIconId(iconName);
  if (!symbolId) {
    console.warn(`⚠️ Icon "${iconName}" not found`);
    return null;
  }

  const {
    className = '',
    width = '24',
    height = '24',
    ariaLabel,
    title
  } = options;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'currentColor');
  
  if (className) {
    svg.setAttribute('class', className);
  }
  
  if (ariaLabel) {
    svg.setAttribute('aria-label', ariaLabel);
    svg.setAttribute('role', 'img');
  } else {
    svg.setAttribute('aria-hidden', 'true');
  }

  if (title) {
    const titleElement = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    titleElement.textContent = title;
    svg.appendChild(titleElement);
  }

  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttribute('href', `#${symbolId}`);
  svg.appendChild(use);

  return svg;
}

// 工具函數：取得所有可用圖示清單 / Utility: Get all available icons list
export function getAvailableIcons() {
  return Object.keys(iconIds);
}

// 從 manifest 取得圖示詳細資訊 / Get icon details from manifest
export function getIconInfo(iconName) {
  return manifest.icons.find((icon) => icon.id === iconName) || null;
}

// 依分類取得圖示 / Get icons by category
export function getIconsByCategory(categoryName) {
  return manifest.icons.filter((icon) => icon.category === categoryName);
}

// 搜尋圖示（根據關鍵字）/ Search icons by keyword
export function searchIcons(keyword) {
  const searchTerm = keyword.toLowerCase();
  return manifest.icons.filter(
    (icon) =>
      icon.keywords.some((k) => k.toLowerCase().includes(searchTerm)) ||
      icon.name.toLowerCase().includes(searchTerm) ||
      icon.description.toLowerCase().includes(searchTerm)
  );
}

// 取得圖示的無障礙資訊 / Get icon accessibility info
export function getIconAccessibility(iconName) {
  const iconInfo = getIconInfo(iconName);
  return iconInfo ? iconInfo.accessibility : null;
}

// 快速查看所有圖示清單 / Quick view of all icons list
export function listAllIcons() {
  console.log(`\n📋 圖示清單總覽 (共 ${manifest.metadata.totalIcons} 個)`);
  console.log(
    `📦 版本: ${manifest.metadata.version} | 更新: ${manifest.metadata.lastUpdated}\n`
  );

  // 依分類顯示 / Display by category
  Object.entries(manifest.categories).forEach(([catId, category]) => {
    const categoryIcons = manifest.icons.filter(
      (icon) => icon.category === catId
    );
    if (categoryIcons.length > 0) {
      console.log(`🏷️  ${category.name} (${categoryIcons.length} 個):`);
      categoryIcons.forEach((icon) => {
        console.log(`   • ${icon.name} (${icon.id}) - ${icon.description}`);
      });
      console.log("");
    }
  });

  return manifest.icons.map((icon) => ({
    id: icon.id,
    name: icon.name,
    category: icon.category,
    description: icon.description,
    symbolId: icon.symbolId
  }));
}

// 快速查看圖示名稱清單 / Quick view of icon names list
export function getIconNames() {
  return manifest.icons.map((icon) => icon.name);
}

// 快速查看圖示 ID 清單 / Quick view of icon IDs list
export function getIconIdList() {
  return manifest.icons.map((icon) => icon.id);
}

// 取得圖示統計資訊 / Get icon statistics
export function getIconStats() {
  const stats = {
    total: manifest.metadata.totalIcons,
    byCategory: {},
    byStatus: {},
    version: manifest.metadata.version,
    lastUpdated: manifest.metadata.lastUpdated,
  };

  // 依分類統計 / Statistics by category
  manifest.icons.forEach((icon) => {
    stats.byCategory[icon.category] =
      (stats.byCategory[icon.category] || 0) + 1;
    stats.byStatus[icon.status] = (stats.byStatus[icon.status] || 0) + 1;
  });

  return stats;
}

// 在控制台顯示圖示統計 / Display icon statistics in console
export function showIconStats() {
  const stats = getIconStats();
  console.log("\n📊 圖示統計資訊:");
  console.log(`   總計: ${stats.total} 個圖示`);
  console.log(`   版本: ${stats.version}`);
  console.log(`   更新: ${stats.lastUpdated}`);
  console.log("\n📂 分類統計:");
  Object.entries(stats.byCategory).forEach(([category, count]) => {
    const categoryInfo = manifest.categories[category];
    console.log(`   ${categoryInfo?.name || category}: ${count} 個`);
  });
  return stats;
}

// 驗證圖示系統完整性 / Validate icon system integrity
export function validateIconSystem() {
  const errors = [];
  const warnings = [];
  
  // 檢查 manifest 中的圖示是否都有對應的 symbol ID
  manifest.icons.forEach((icon) => {
    if (!icon.symbolId) {
      errors.push(`Icon "${icon.id}" missing symbolId`);
    }
    
    // 檢查 accessibility 資訊
    if (!icon.accessibility) {
      warnings.push(`Icon "${icon.id}" missing accessibility info`);
    }
  });
  
  // 檢查是否有重複的 symbol ID
  const symbolIds = manifest.icons.map(icon => icon.symbolId);
  const duplicateSymbolIds = symbolIds.filter((id, index) => symbolIds.indexOf(id) !== index);
  if (duplicateSymbolIds.length > 0) {
    errors.push(`Duplicate symbol IDs found: ${duplicateSymbolIds.join(', ')}`);
  }
  
  const validation = {
    isValid: errors.length === 0,
    errors,
    warnings,
    totalIcons: manifest.icons.length,
    categories: Object.keys(manifest.categories).length
  };
  
  if (validation.isValid) {
    console.log('✅ Icon system validation passed');
  } else {
    console.error('❌ Icon system validation failed:', errors);
  }
  
  if (warnings.length > 0) {
    console.warn('⚠️ Icon system warnings:', warnings);
  }
  
  return validation;
}

// 預設初始化函數（可選用）/ Default initialization function (optional)
export function initIconSystem() {
  loadAllIcons();
  const stats = getIconStats();
  const validation = validateIconSystem();
  
  console.log(`\n🚀 Icon System Initialized`);
  console.log(`📊 Loaded ${stats.total} icons across ${Object.keys(stats.byCategory).length} categories`);
  
  return {
    loaded: true,
    stats,
    validation
  };
}