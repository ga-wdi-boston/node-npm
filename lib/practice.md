## Practice: Install a Package for Enumeration

- What package did you install for enumeration?

https://www.npmjs.com/package/enumerable-component

## Research: Popular NPM Packages

Package 1: [browserify](https://www.npmjs.com/package/browserify)

1.  What problem does this package solve?

"browserify will recursively analyze all the require() calls in your app in
order to build a bundle you can serve up to the browser in a single
`<script>` tag." It lets you avoid having to include multiple scripts in your
HTML markup.

2.  How can I use this package in my own code? What steps are involved?

After installing:

- use `require()` statements in a JS file
- use `module.exports` to export functionality
- run `browserify myfile.js > bundle.js` in the command line to bundle everything into a single file. 
- use `<script src="bundle.js"></script>` in your html file to access all of the other scripts

3.  How well-maintained is this package? What criteria did I use to decide?

It has over 450 releases (and nearly 2 million downloads in the past month).
I'm pretty sure we use it at GA (though we don't run the command line command
ourselves; `grunt build` handles this for us).

Package 2: [gulp](https://www.npmjs.com/package/gulp)

1.  What problem does this package solve?

gulp helps automate tasks (like, for example, minifying a bunch of JS files,
copying images, and rerunning tasks when files change.)

2.  How can I use this package in my own code? What steps are involved?

After installing:

- create a gulpfile.js and `require('gulp')` to use it
- decide what you need to do, then write a task. maybe one of these [recipes](https://github.com/gulpjs/gulp/tree/master/docs/recipes) can help? for example, you can [automatically run all of your Mocha tests when files change](https://github.com/gulpjs/gulp/blob/master/docs/recipes/mocha-test-runner-with-gulp.md)

3.  How well-maintained is this package? What criteria did I use to decide?

It was last updated less than a month ago. It has 2.5 million downloads in the
last month. The issue tracker is active. We use it at GA.

Package 3: [grunt](https://www.npmjs.com/package/grunt)

1.  What problem does this package solve?

grunt automates tasks.


2.  How can I use this package in my own code? What steps are involved?

After installing:

- you probably also want `grunt-cli` so you can run things from the command line
- create a Gruntfile.js
- identify what you need to do, and find an appropriate plugin (to minify your JS code, to test, etc.) and set up a task.
- run `grunt [task]` from the command line

3.  How well-maintained is this package? What criteria did I use to decide?

It has nearly 2 million downloads in the past month. It has an active issue tracker. We use it at GA.
