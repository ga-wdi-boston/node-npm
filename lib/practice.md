## Practice: Install a Package for Enumeration

- What package did you install for enumeration?

```md
enum
```

## Research: Popular NPM Packages

Package 1:
```md
Grunt
```
1.  What problem does this package solve?
```md
Automating code tests and other repetitve tasks like linter, installing dependencies
```
1.  How can I use this package in my own code? What steps are involved?
```md
install with npm install and run with grunt
```
1.  How well-maintained is this package? What criteria did I use to decide?
```md
Very very very well maintained. It's used by most large companies and is installed and managed by npm
```

Package 2:
```md
gulp
```
1.  What problem does this package solve?
```md
more automation!
lint checks an JS in our JS directory
sass compiles all of our sass from scss into css file and saves the compiled css
scripts concatenates all files in js directory and saves output to dist/js then gulp takes that concatenated file, minifies it, renames it and saves it to the dist/js directory alongside the concatenated file.
```
1.  How can I use this package in my own code? What steps are involved?
```md
npm install jshint gulp-jshint gulp-sass gulp-concat gulp-uglify gulp-rename --save-dev
create a gulp.js file
```
1.  How well-maintained is this package? What criteria did I use to decide?
```md
it's pretty new and was developed to solve problems associated with grunt
```

Package 3:
```md
forever
```
1.  What problem does this package solve?
```md
runs scripts continuously
```
1.  How can I use this package in my own code? What steps are involved?2.
```md
$ [sudo] npm install forever -g

forever start app.js to run app.js script FOR.EV.VER.
```
1.  How well-maintained is this package? What criteria did I use to decide?2.
```md
Wasn't able to find any documentation on how well-maintained it is.
This leads me to believe that it is not very well-maintained.
```
