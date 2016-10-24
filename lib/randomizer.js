'use strict';
const fs = require('fs');
const shuffle = require('shuffle-array');

let inFile = process.argv[2];


fs.readFile(inFile, { encoding: 'utf8' }, (error, content) => {
  //first thing is check error
  if (error){
    console.error(error);
  }
  let lines = content.split('\n');
  //clean up the array
  lines.pop();
  shuffle(lines);


  lines.forEach((line) => {
    console.log(line);
  });
});
