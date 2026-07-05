const fs = require('fs');
const path = require('path');

const directory = './src';
const replacements = [
  { regex: /\b([pm]|gap|top|bottom|left|right|[wh]|mt|mb|ml|mr|pt|pb|pl|pr|px|py|mx|my)-xs\b/g, replacement: '$1-1' },
  { regex: /\b([pm]|gap|top|bottom|left|right|[wh]|mt|mb|ml|mr|pt|pb|pl|pr|px|py|mx|my)-sm\b/g, replacement: '$1-2' },
  { regex: /\b([pm]|gap|top|bottom|left|right|[wh]|mt|mb|ml|mr|pt|pb|pl|pr|px|py|mx|my)-md\b/g, replacement: '$1-4' },
  { regex: /\b([pm]|gap|top|bottom|left|right|[wh]|mt|mb|ml|mr|pt|pb|pl|pr|px|py|mx|my)-lg\b/g, replacement: '$1-6' },
  { regex: /\b([pm]|gap|top|bottom|left|right|[wh]|mt|mb|ml|mr|pt|pb|pl|pr|px|py|mx|my)-xl\b/g, replacement: '$1-10' },
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      for (const { regex, replacement } of replacements) {
        content = content.replace(regex, replacement);
      }
      // Revert max-w-4, max-w-6 etc if accidentally changed (though 'max-w' wasn't in the regex group but let's be careful)
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(directory);
