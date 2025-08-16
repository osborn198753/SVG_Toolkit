// 圖示系統統一匯入管理
import commonIconsSVG from "./common-icons.svg?raw";
import actionsIconsSVG from "./actions-icons.svg?raw";
import iconsManifest from "./icons-manifest.json";
import socialIconsSVG from "./social-icons.svg?raw";

// 未來可以擴展更多圖示檔案
// import socialIconsSVG from './social-icons.svg?raw';

export const iconSets = {
  common: commonIconsSVG,
  actions: actionsIconsSVG,
  social: socialIconsSVG,
};

// 從 manifest 動態生成 iconIds
export const iconIds = iconsManifest.icons.reduce((acc, icon) => {
  acc[icon.id] = icon.symbolId;
  return acc;
}, {});

// 匯出完整的 manifest 資料
export const manifest = iconsManifest;

// 載入所有圖示到 DOM
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

  // 合併所有圖示集
  const allIconsHTML = Object.values(iconSets).join("");
  svgContainer.innerHTML = allIconsHTML;

  console.log(
    `✅ All icon sets loaded successfully (${manifest.metadata.totalIcons} icons)`
  );
  console.log(
    `📦 Version: ${manifest.metadata.version}, Last updated: ${manifest.metadata.lastUpdated}`
  );
}

// 工具函數：檢查圖示是否存在
export function hasIcon(iconName) {
  return iconName in iconIds;
}

// 工具函數：取得圖示的完整 ID
export function getIconId(iconName) {
  return iconIds[iconName] || null;
}

// 工具函數：取得所有可用圖示清單
export function getAvailableIcons() {
  return Object.keys(iconIds);
}

// 新增：從 manifest 取得圖示詳細資訊
export function getIconInfo(iconName) {
  return manifest.icons.find((icon) => icon.id === iconName) || null;
}

// 新增：依分類取得圖示
export function getIconsByCategory(categoryName) {
  return manifest.icons.filter((icon) => icon.category === categoryName);
}

// 新增：搜尋圖示（根據關鍵字）
export function searchIcons(keyword) {
  const searchTerm = keyword.toLowerCase();
  return manifest.icons.filter(
    (icon) =>
      icon.keywords.some((k) => k.toLowerCase().includes(searchTerm)) ||
      icon.name.toLowerCase().includes(searchTerm) ||
      icon.description.toLowerCase().includes(searchTerm)
  );
}

// 新增：取得圖示的無障礙資訊
export function getIconAccessibility(iconName) {
  const iconInfo = getIconInfo(iconName);
  return iconInfo ? iconInfo.accessibility : null;
}

// 新增：快速查看所有圖示清單
export function listAllIcons() {
  console.log(`\n📋 圖示清單總覽 (共 ${manifest.metadata.totalIcons} 個)`);
  console.log(
    `📦 版本: ${manifest.metadata.version} | 更新: ${manifest.metadata.lastUpdated}\n`
  );

  // 依分類顯示
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
  }));
}

// 新增：快速查看圖示名稱清單
export function getIconNames() {
  return manifest.icons.map((icon) => icon.name);
}

// 新增：快速查看圖示 ID 清單
export function getIconIdList() {
  return manifest.icons.map((icon) => icon.id);
}

// 新增：取得圖示統計資訊
export function getIconStats() {
  const stats = {
    total: manifest.metadata.totalIcons,
    byCategory: {},
    byStatus: {},
    version: manifest.metadata.version,
    lastUpdated: manifest.metadata.lastUpdated,
  };

  // 依分類統計
  manifest.icons.forEach((icon) => {
    stats.byCategory[icon.category] =
      (stats.byCategory[icon.category] || 0) + 1;
    stats.byStatus[icon.status] = (stats.byStatus[icon.status] || 0) + 1;
  });

  return stats;
}

// 新增：在控制台顯示圖示統計
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
