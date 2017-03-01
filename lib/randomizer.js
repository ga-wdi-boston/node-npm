'use strict';
const fs = require('fs');

let inFile = process.argv[2];

fs.readFile(inFile, { encoding: 'utf8' }, (error, content) => {

  //first thing is check error
  if (error) {
    console.error(error);
  }

  let lines = content.split('\n');

  //clean up the array
  lines.pop();

  let randomLines = lines.sort(function () {
    return 0.5 - Math.random();
  });

  randomLines.lodash((line) => {
    console.log(line);
  });
});


// Take your randomizer script from ga-wdi-boston/node-api.
// HOW??? the file or the code? there is already a file named that in the study
// repo plus it has code..
