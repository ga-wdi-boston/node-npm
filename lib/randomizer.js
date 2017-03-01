'use strict';
const fs = require('fs');
const _ = require('lodash');

let inFile = process.argv[2];

fs.readFile(inFile, { encoding: 'utf8' }, (error, content) => {

  //first thing is check error
  if (error) {
    console.error(error);
  }

  let lines = _.shuffle(_.dropRight(content.split('\n')));

  _.each(lines, (line) => {
    console.log(line);
  });
});
