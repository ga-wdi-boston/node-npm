'use strict';
const fs = require('fs');
const _ = require('lodash');

let inFile = process.argv[2];

fs.readFile(inFile, { encoding: 'utf8' }, (error, content) => {

  //first thing is check error
  if (error) {
    console.error(error);
  }

  let lines = _.shuffle(content.split('\n'));

//clean up the array
  lines.pop();
//
// let randomLines = lines.sort(function () {
//   return 0.5 - Math.random();
// });

  _.forEach(lines, (line) => {
    console.log(line);
  });
});
