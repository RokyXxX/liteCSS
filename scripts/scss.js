const sass = require('node-sass');
const fs = require('fs');

const scssFilePath = 'src/scss/lite.scss';
const scssContent = fs.readFileSync(scssFilePath, 'utf-8');

// css: reg
const regularCss = sass.renderSync({
  data: scssContent,
  outputStyle: 'expanded',
}).css.toString();

// map: regular
const mapOfRegularCss = sass.renderSync({
  data: scssContent,
  outputStyle: 'expanded',
  sourceMap: true,
}).css.toString();

// css: min
const minifiedCss = sass.renderSync({
  data: scssContent,
  outputStyle: 'compressed',
}).css.toString();

// map: compressed
const mapOfMinifiedCss = sass.renderSync({
  data: scssContent,
  outputStyle: 'compressed',
  sourceMap: true,
}).css.toString();

fs.writeFileSync('dist/css/lite.css', regularCss);
fs.writeFileSync('dist/css/lite.css.map', mapOfRegularCss);
fs.writeFileSync('dist/css/lite.min.css', minifiedCss);
fs.writeFileSync('dist/css/lite.min.css.map', mapOfMinifiedCss);

console.log('[liteCSS]: Files Generated!');