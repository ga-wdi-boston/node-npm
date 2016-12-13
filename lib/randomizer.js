'use strict';

const fs = require('fs');
const _ = require('lodash');
const colors = require('colors');
const emoji = require('node-emoji');
const arrayShuffle = require('array-shuffle');
const stdin = '/dev/stdin';

let inFile = process.argv[2] === '-' ? stdin : process.argv[2];

fs.readFile(inFile, 'utf-8', (error, data) => {
  if (error) {
    console.error(error.stack);
    return;
  }

  let dataArray = _.trimEnd(data).split(' ');
  let shuffledArray = arrayShuffle(dataArray);

  _.forEach(shuffledArray, function(name){
    console.log(name.random + ' ' + emoji.random().emoji);
  });
});
