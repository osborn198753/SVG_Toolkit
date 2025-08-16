// 合併 SVG 精靈圖腳本 / SVG Sprite Merger Script
const fs = require('fs');
const path = require('path');

// 輸入檔案 / Input files
const inputFiles = [
  '_old/common-icons.svg',
  '_old/actions-icons.svg', 
  '_old/social-icons.svg',
  '_old/logo.svg'
];

// 輸出檔案 / Output file
const outputFile = 'sprite-icons.svg';

function extractSymbols(svgContent) {
  // 提取 symbol 標籤 / Extract symbol tags
  const symbolRegex = /<symbol[^>]*>[\s\S]*?<\/symbol>/g;
  const symbols = svgContent.match(symbolRegex) || [];
  return symbols;
}

function mergeSvgSprites() {
  console.log('🔄 開始合併 SVG 精靈圖... / Starting SVG sprite merge...');
  
  let allSymbols = [];
  
  // 讀取並提取每個檔案的 symbols / Read and extract symbols from each file
  inputFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`📖 讀取檔案 / Reading file: ${file}`);
      const content = fs.readFileSync(file, 'utf8');
      const symbols = extractSymbols(content);
      allSymbols = allSymbols.concat(symbols);
      console.log(`✅ 找到 ${symbols.length} 個 symbols`);
    } else {
      console.warn(`⚠️  檔案不存在 / File not found: ${file}`);
    }
  });
  
  // 建立合併後的 SVG / Create merged SVG
  const mergedSvg = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
${allSymbols.map(symbol => '  ' + symbol).join('\n')}
</svg>`;
  
  // 寫入檔案 / Write to file
  fs.writeFileSync(outputFile, mergedSvg, 'utf8');
  console.log(`🎉 合併完成！/ Merge completed!`);
  console.log(`📄 輸出檔案 / Output file: ${outputFile}`);
  console.log(`📊 總共 ${allSymbols.length} 個 symbols`);
  
  return outputFile;
}

// 執行合併 / Execute merge
if (require.main === module) {
  mergeSvgSprites();
}

module.exports = { mergeSvgSprites };