'use strict';
const fs = require('fs');
var _ = require('lodash');

const randomizer = function (inFile, outFile) {
  fs.readFile(inFile, 'utf-8', (error, data) => {
    if (error) {
      console.error(error.stack);
      return;
    }

    let dataArray = data.split('\n');

    // remove line at the end of the file
    dataArray = _.compact(dataArray);

    // randomize the array
    let randomLines = dataArray.sort(function () {
        const n = Math.random();
        const randomSorter = n < 0 ? Math.floor(n) : Math.ceil(n);
        return randomSorter;
      });

    // add empty line back
    randomLines.push('');

    fs.writeFile(outFile, randomLines.join('\n'),  { flag: 'w' }, error => {
      if (error) {
        console.error(error.stack);
        return;
      }

      console.log('\nrandomized!');
    });
  });
};

module.exports = randomizer;
