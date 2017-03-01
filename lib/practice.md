## Practice: Install a Package for Enumeration

- What package did you install for enumeration?

```md
enum
```

## Research: Popular NPM Packages

Package 1:
```md
express
```
1.  What problem does this package solve?
```md
provides a lightweight web framework
```
1.  How can I use this package in my own code? What steps are involved?
```md
1. install by typing 'npm install express'
2. type 'npm install -g express-generator@4' to install the executable
3. create an app as such: 'express /tmp/foo && cd /tmp/foo'
4. type 'npm install' to install dependencies
5. type 'npm start' to start the server
```
1.  How well-maintained is this package? What criteria did I use to decide?
```md
This package seems very well maintained. I know for one because I have already
heard of express which means it must be well established within the web design
field. In addition, the page on npmjs.com has a plethora of documentation on
almost everything you could imagine regarding the express npm package.
```

Package 2:
```md
gulp
```
1.  What problem does this package solve?
```md
gulp helps automate time-consuming tasks that can occur in a development workflow
```
1.  How can I use this package in my own code? What steps are involved?
```md
1. install gulp by typing 'npm install --global gulp-cli'
2. in the project directory type 'npm install --save-dev gulp' to install devDependencies
3. create a file called gulpfile.js in root of project directory with the following
contents:
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});
4. then run the gulp command in project directory and everything is all set
```
1.  How well-maintained is this package? What criteria did I use to decide?
```md
There is loads of documentation and gulp has a reputation so I determined
that gulp is a well-maintained package.
```

Package 3:
```md
grunt
```
1.  What problem does this package solve?
```md
grunt automates repetitive tasks. very useful.
```
1.  How can I use this package in my own code? What steps are involved?2.
```md
run 'npm install grunt' on the command line.
Unfortunately the rest of the getting started package is more involved but is
beautifully detailed here: https://github.com/cowboy/jquery-tiny-pubsub
```
1.  How well-maintained is this package? What criteria did I use to decide?2.
```md
There is a boat load of documentation on github and on gruntjs.com so I consider
it to be well maintained. As such, I can view when each version of the extension
was released and what changes were made to it.
```
