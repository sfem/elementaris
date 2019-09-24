const path = require('path');
const fs = require('fs');
const tildeImporter = require('node-sass-tilde-importer');

const sass = require('sass');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const flexbugsFixes = require('postcss-flexbugs-fixes');
const csso = require('postcss-csso');

const disFile = path.join('.', 'dist', 'sfem-grid.css');

var css = sass.renderSync({
  file: path.join('.', 'src', 'sfem-grid.scss'),
  importer: tildeImporter
}).css;

const postcssResult = postcss([
  autoprefixer,
  mqpacker({
    sort: true
  }),
  flexbugsFixes
]).process(css, { from: undefined, to: undefined }).css


fs.writeFile(disFile, postcssResult, (err) => {
  if (err) throw err;
  console.log('CSS file has been saved!');
});

const minifyCss = postcss([
  csso({
    comments: false
  })
]).process(postcssResult, { from: undefined, to: undefined }).css

fs.writeFile(disFile.replace('.css', '.min.css'), minifyCss, (err) => {
  if (err) throw err;
  console.log('MinifyCss file has been saved!');
});
