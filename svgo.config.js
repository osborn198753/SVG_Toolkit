// SVGO 配置檔 - 專為 SVG 圖示精靈圖優化
// SVGO Configuration - Optimized for SVG icon sprites
module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // 保留精靈圖重要屬性 / Preserve important attributes for sprites
          removeDesc: false,                    // 保留描述以維持無障礙功能 / Keep descriptions for accessibility
          removeUselessDefs: false,             // 保留可能被引用的定義 / Keep defs that might be referenced
          removeUnusedNS: false,                // 保留命名空間 / Keep namespaces
          removeUnknownsAndDefaults: false,     // 保留未知屬性 / Keep unknown attributes
          removeUselessStrokeAndFill: false,    // 保留 stroke 和 fill 屬性 / Keep stroke and fill
          removeHiddenElems: false,             // 保留隱藏元素 / Keep hidden elements
          removeEmptyContainers: false,         // 保留空容器 / Keep empty containers
          
          // 清理屬性但保持結構 / Clean up attributes but preserve structure
          cleanupIds: {
            minify: false,                      // 不縮短 ID (對 symbol 引用很重要) / Don't minify IDs (important for symbol references)
            preserve: ['icon-', 'actions-icon-', 'social-icon-']
          }
        }
      }
    },
    
    // 單獨處理這些插件 / Handle these plugins separately
    {
      name: 'removeViewBox',
      active: false                  // 保留 viewBox / Keep viewBox
    },
    {
      name: 'removeTitle',
      active: false                  // 保留標題 / Keep titles
    },
    
    // 圖示精靈圖額外優化 / Additional optimizations for icon sprites
    {
      name: 'removeAttrs',
      params: {
        attrs: [
          'data-name',               // 移除設計工具產生的屬性 / Remove design tool artifacts
          'class:st*',               // 移除樣式類別 (st0, st1 等) / Remove style classes (st0, st1, etc.)
          'xml:space'                // 移除 xml:space / Remove xml:space
        ]
      }
    },
    
    // 清理未使用的樣式 / Clean up unused styles
    {
      name: 'removeStyleElement'
    },
    
    // 優化路徑 / Optimize paths
    {
      name: 'convertPathData',
      params: {
        floatPrecision: 2,           // 減少小數精度 / Reduce decimal precision
        transformPrecision: 2
      }
    },
    
    // 移除空容器 / Remove empty containers
    {
      name: 'removeEmptyContainers'
    },
    
    // 排序屬性以保持一致性 / Sort attributes for consistency
    {
      name: 'sortAttrs'
    }
  ]
};