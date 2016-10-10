'use strict';
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

  // attempting to use shuffle-array package

  let shuffle = require('shuffle-array'),
    randomLines = lines;

    shuffle(randomLines);
    console.log(randomLines);

  // let randomLines = lines.sort(function(){
  //   return 0.5 - Math.random();
  });
