'use strict';
const fs = require('fs');
const _ = require('lodash');

let inFile = process.argv[2];

fs.readFile(inFile, { encoding: 'utf8' }, (error, content) => {
  //first thing is check error
  if (error){
    console.error(error);
  }
  let lines = content.split('\n');
  //clean up the array
  lines.pop();

  let randomLines = lines.sort(function(){
    return 0.5 - _.random();
  });

  randomLines.forEach((line) => {
    console.log(line);
  });
});
