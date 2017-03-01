## Practice: Install a Package for Enumeration

- What package did you install for enumeration?

```md
npm install --save enumerated
```

## Research: Popular NPM Packages

Package 1:
```md
bluebird
```
1.  What problem does this package solve?
```md
It's a promise library. Bluebird provides all the tools and utilities needed to realize a highly expressive and fluent DSL for asynchronous JavaScript without suffering from bloat by avoiding incorporating features that are solely motivated by theoretical arguments, have extremely narrow applicability or have limited synergy and composability with existing features.

Bluebird ships with the best cross-platform long stack traces out there and a warning system. This helps you recognize common and devastating promise usage mistakes early before they lead to hard to debug code later.
Unhandled errors are not silently swallowed by default but reported along with helpful stack traces where applicable. All of this is of course configurable.
```
1.  How can I use this package in my own code? What steps are involved?
```md
npm install bluebird
```
1.  How well-maintained is this package? What criteria did I use to decide?
```md
MIT Licence, a big community, many solved bugs.
```

Package 2:
```md
mocha
```
1.  What problem does this package solve?
```md
Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on
```
1.  How can I use this package in my own code? What steps are involved?
```md
$ npm install --global mocha
To install Mocha v3.0.0 or newer with npm, you will need npm v1.4.0 or newer. Additionally, to run Mocha, you will need Node.js v0.10 or newer.

To test asynchronous code - invoke the callback when your test is complete. By adding a callback (usually named done) to it(), Mocha will know that it should wait for this function to be called to complete the test.

```
describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var user = new User('Luna');
      user.save(function(err) {
        if (err) done(err);
        else done();
      });
    });
  });
});

```

To make things even easier, the done() callback accepts an error, so we may use this directly:
```
describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var user = new User('Luna');
      user.save(done);
    });
  });
});
```



1.  How well-maintained is this package? What criteria did I use to decide?
```md
MIT Licence, A strong group on GitHub, Recent Commits
```

Package 3:
```md
browserify
```
1.  What problem does this package solve?
```md
Browserify lets you require('modules') in the browser by bundling up all of your dependencies.
```
1.  How can I use this package in my own code? What steps are involved?2.
```md
$ npm install -g browserify

Here is a tutorial on how to use Browserify on the command line to bundle up a simple file called main.js along with all of its dependencies:

```
var unique = require('uniq');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));
```

Then install the uniq module with npm:
```
$ npm install uniq
```

Now recursively bundle up all the required modules starting at main.js into a single file called bundle.js with the browserify command:

```
browserify main.js -o bundle.js
```

Browserify parses the AST for require() calls to traverse the entire dependency graph of your project.
Drop a single <script> tag into your html and you're done!

```
<script src="bundle.js"></script>
```


1.  How well-maintained is this package? What criteria did I use to decide?2.
```md
Looks like many contributers are helping the package maintain
```
