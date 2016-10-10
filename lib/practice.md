## Practice: Install a Package for Enumeration

- What package did you install for enumeration?

enum (https://www.npmjs.com/package/enum)

## Research: Popular NPM Packages

Package 1: Mocha

1.  What problem does this package solve?
  -simplifies testing asynchronous code
  -can use multiple libraries, not just Node.js
  -it is very useful in BDD
2.  How can I use this package in my own code? What steps are involved?
  -npm install mocha
  -uses a library called chai
  -after installation, you can use it in a number of ways, including describing
  features that we want to implement, converting colors, testing HTTP requests

3.  How well-maintained is this package? What criteria did I use to decide?
-well maintained. it is on version 3.0. There are also multiple discussion
groups and contributors who are invested in using it.

sources: http://mochajs.org/#more-information,
https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha

Package 2: Browserify

source: https://github.com/substack/node-browserify#usage

1.  What problem does this package solve?
-analyzes all require() calls in an app, bundles them, and applies them in
one script file in the browser.
2.  How can I use this package in my own code? What steps are involved?
-npm install -g browserify
-by writing 'require' and a filepath within our files, we can use variables and
functions that exist in other files within our project.
3.  How well-maintained is this package? What criteria did I use to decide?
-well maintained
-has a list of many transformations, has many stars on npm website

Package 3: Mongoose

sources: http://mongoosejs.com/docs/guide.html,
https://devcenter.heroku.com/articles/nodejs-mongoose

1.  What problem does this package solve?
Provides an easier way to model application data and to make CRUD requests.
2.  How can I use this package in my own code? What steps are involved?
npm install mongoose
must be able to connect to MongoDb by using mongoose.connect(link to MongoDB
database).
3.  How well-maintained is this package? What criteria did I use to decide?
Very well. Has support by large organizations, including LinkedIn and Trello.
