'use strict';

let random = require("random-js")(); // uses the nativeMath engine
let value = random.integer(1, 100);

const fs = require('fs');

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
    return 0.5 - random.engines.nativeMath(value);
  });

  randomLines.forEach((line) => {
    console.log(line);
  });
});
