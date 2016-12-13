'use strict';
const fs = require('fs');

const shuffle = require('shuffle-array');
// const iterate = require('lodash');
const chalk = require('chalk');
const emoji = require('node-emoji');

let inFile = process.argv[2];

fs.readFile(inFile, { encoding: 'utf8' }, (error, content) => {
  //first thing is check error
  if (error){
    console.error(error);
  }
  let lines = content.split('\n');

  let newArray = shuffle(lines);
    console.log(newArray + emoji.get('shit'));



  //clean up the array
  // lines.pop();

  // let randomLines = lines.sort(function(){
  //   return 0.5 - Math.random();
  // });

  // randomLines.forEach((line) => {
  //   console.log(line);
  // });
});
