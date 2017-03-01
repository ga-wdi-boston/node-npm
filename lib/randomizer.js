'use strict';
const _ = require('lodash');

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

  let randomLines = _.sampleSize(lines, lines.length);

    console.log(randomLines);
});
