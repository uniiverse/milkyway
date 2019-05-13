//
// This is still experimental!
//
// Code to help you minify Sketch exported icons to svgs that can be easily converted to fonts
//
// Put icons in icons/in
// Run `nvm exec npm run build:icons`
// You'll find the converted files in icons/out
//

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const baseFolder = './icons';
const inFolder = `${baseFolder}/in`;
const outFolder = `${baseFolder}/out`;

const svgoLib = require('svgo');

svgo = new svgoLib({
  plugins: [{
    cleanupAttrs: true,
  }, {
    removeDoctype: true,
  }, {
    removeXMLProcInst: true,
  }, {
    removeComments: true,
  }, {
    removeMetadata: true,
  }, {
    removeTitle: true,
  }, {
    removeDesc: true,
  }, {
    removeUselessDefs: true,
  }, {
    removeEditorsNSData: true,
  }, {
    removeEmptyAttrs: true,
  }, {
    removeHiddenElems: true,
  }, {
    removeEmptyText: true,
  }, {
    removeEmptyContainers: true,
  }, {
    removeViewBox: false,
  }, {
    cleanupEnableBackground: true,
  }, {
    convertStyleToAttrs: true,
  }, {
    convertColors: true,
  }, {
    convertPathData: true,
  }, {
    convertTransform: true,
  }, {
    removeUnknownsAndDefaults: true,
  }, {
    removeNonInheritableGroupAttrs: true,
  }, {
    removeUselessStrokeAndFill: true,
  }, {
    removeUnusedNS: true,
  }, {
    cleanupIDs: true,
  }, {
    cleanupNumericValues: true,
  }, {
    moveElemsAttrsToGroup: true,
  }, {
    moveGroupAttrsToElems: true,
  }, {
    collapseGroups: true,
  }, {
    removeRasterImages: false,
  }, {
    mergePaths: true,
  }, {
    convertShapeToPath: true,
  }, {
    sortAttrs: true,
  }, {
    removeDimensions: true,
  }, {
    removeAttrs: { attrs: '(stroke|fill)' },
  }]
});

if (!fs.existsSync(outFolder)) {
  fs.mkdirSync(outFolder);
}

fs.readdir(inFolder, (err, files) => {
  files.forEach((file) => {
    if (file.endsWith('.svg')) {
      const filepath = path.resolve(inFolder, file);
      console.log(`[READ] reading ${filepath}`);
      fs.readFile(filepath, 'utf8', function (err, data) {
        if (err) {
          console.log(`[ERR!] reading ${filepath}`);
        } else {
          svgo.optimize(data, { path: filepath }).then(function (result) {
            const outFile = `${outFolder}/${file}`;
            const $ = cheerio.load(result.data, { xmlMode: true });
            const pathElement = $('path')[0];
            const svgElement = $('svg').first().children().remove().end();

            console.log(`[WRIT] ${outFile}`);

            fs.writeFile(outFile, $.xml(svgElement.append(pathElement)), (err, result) => {
            //fs.writeFile(outFile, result.data, (err, result) => {
              if (err) {
                console.log(`[ERR!] ${outFile}`);
              } else {
                console.log(`[DONE] ${outFile}`);
              }
            });
          });
        }
      });
    }
  });
});
