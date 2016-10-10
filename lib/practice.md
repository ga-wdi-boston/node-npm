## Practice: Install a Package for Enumeration

- What package did you install for enumeration?

lodash

## Research: Popular NPM Packages

Package 1: Express

1.  What problem does this package solve?

Express is a lightweight framework for building a web application in Node.js.
It allows developers to get a Node back end up and running very quickly by
writing a lot of the HTTP boilerplate.

2.  How can I use this package in my own code? What steps are involved?

- Install express from the command line using `npm install --save express`
- Inside project directory, create a file called `app.js`
- Inside `app.js`, make the following `require` statements:
  - `let express = require('express');`
  - `let app = express();`
- Build your web app from there, using the various shortcuts for routing, responding, and other API functionality that Express comes with.

3.  How well-maintained is this package? What criteria did I use to decide?

Express is very well maintained. Many popular Node frameworks, including the
MEAN stack, incorporate Express as a back-end framework. This indicates that
Express is a reliable and well-maintained package. The GitHub repository for
Express includes thousands of commits, made on a regular basis, with the vast
majority of issues being closed.


Package 2: bodyparser

1.  What problem does this package solve?

body-parser expedites the process of parsing incoming requests in a web API.
When set up properly, it allows the body of an incoming request to be accessed
via `req.body`. Depending on how body-parser is invoked, `req.body` can point to
a buffer object, a text string, a JSON string, or URL encoded data.

2.  How can I use this package in my own code? What steps are involved?

- Install body-parser with `npm install --save body-parser`
- Require body-parser with `let bodyParser = require('body-parser')`
- Set your app to use body-parser with `app.use(bodyParser());`
- The body of any incoming request is now accessible via `req.body`.

3.  How well-maintained is this package? What criteria did I use to decide?

body-parser has been regularly maintained since the project's inception in 2014.
It has seen roughly 5-10 commits per month over the last year. Nearly all of
body-parser's commits come from a single author, which can potentially make a
module fragile.


Package 3:

1.  What problem does this package solve?

Grunt uses vast library of plugins, configured through a project's Gruntfile,
to automate various tasks via minimal command-line input.

2.  How can I use this package in my own code? What steps are involved?

- Install the Grunt command-line utility with `grunt install -g grunt-cli`
- List grunt, plus any required plugins, under `devDependencies` in the project's `package.json` file
- Add a Gruntfile (either `Gruntfile.js` or `Gruntfile.coffee`) to the project's root directory
- Configure the desired tasks in the Gruntfile.
- Run the configured tasks from the command line with `grunt` or whatever other command has been configured

3.  How well-maintained is this package? What criteria did I use to decide?

Grunt is reasonably well-maintained. It has seen a marked drop in commits since
2013, and about 100 issues are open (compare to about 1000 closed). A major
indicator of Grunt's reliability is the the number of plugins available - nearly
6,000, some with over a million downloads in the last 30 days.
