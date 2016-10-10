'use strict';
const fs = require('fs');

let inFile = process.argv[2];
let colors = require('colors');
let emoji = require('node-emoji');

fs.readFile(inFile, { encoding: 'utf8' }, (error, content) => {
  //first thing is check error
  if (error){
    console.error(error);
  }
  let lines = content.split('\n');
  //clean up the array
  lines.pop();

  let randomLines = lines.sort(function(){
    return 0.5 - Math.random();
  });

  randomLines.forEach((line) => {
    console.log(colors.rainbow('line'), line);
    console.log(emoji.get('coffee'));
  });
});
