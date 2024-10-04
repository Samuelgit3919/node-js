const path = require("path");

console.log(__filename);
console.log(__dirname);

console.log(path.basename(__dirname));
console.log(path.basename(__filename));

console.log(path.format(path.parse(__filename)));
console.log(path.parse(__dirname));

console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute('./main.mjs'));

console.log(path.join('forder1', 'folder2', 'folder3', 'index.html'));
