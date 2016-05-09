## Practice: Install a Package for Enumeration

- What package did you install for enumeration?
  - enum

## Research: Popular NPM Packages

Package 1: Mongoose

1.  What problem does this package solve?

  Mongoose is a MongoDB object modeling tool.
1.  How can I use this package in my own code? What steps are involved?

  Install with ```npm install mongoose```.
  Add to your code by using:
  ```
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/my_database');
  ```
1.  How well-maintained is this package? What criteria did I use to decide?

  This package is well-maintained. It has over 6,000 commits, the latest of which was 40 minutes ago as I type this.

Package 2: Request

1.  What problem does this package solve?

  Request is a simplified HTTP request client. It is designed to be the simplest way posisble to make HTTP calls.

1.  How can I use this package in my own code? What steps are involved?

  Example code:
  ```
  var request = require('request');
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})
```

1.  How well-maintained is this package? What criteria did I use to decide?

  This package appears to be well maintained, with over 2,000 commits. The latest commit occurred a day ago.

Package 3: mocha

1.  What problem does this package solve?

    Mocha is a JavaScript test framework, which is supposed to make asynchronous testing 'simple and fun'. It allows you to automate testing.

1.  How can I use this package in my own code? What steps are involved?

  Install with: ```npm install mocha```.

  An example of using mocha:

  ```
  var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path');
    // Instantiate a Mocha instance.
var mocha = new Mocha();
var testDir = 'some/dir/test'
// Add each .js file to the mocha instance
fs.readdirSync(testDir).filter(function(file){
    // Only keep the .js files
    return file.substr(-3) === '.js';
}).forEach(function(file){
    mocha.addFile(
        path.join(testDir, file)
    );
});
// Run the tests.
mocha.run(function(failures){
  process.on('exit', function () {
    process.exit(failures);  // exit with non-zero status if there were failures
  });
});
```

1.  How well-maintained is this package? What criteria did I use to decide?

  Mocha has 1,960 commits (as of 5/8/2016). It seems to be fairly well maintained as the latest commit was 6 days ago.
