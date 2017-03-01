## Practice: Install a Package for Enumeration

- What package did you install for enumeration?

```md
`enum`
```
https://www.npmjs.com/package/enum

## Research: Popular NPM Packages

Package 1:
```md
`express`
```
1.  What problem does this package solve?
```md
express is an unopinionated web framework that makes things like routing and handling requests, responses and rendering templates easier.
```
1.  How can I use this package in my own code? What steps are involved?
```md
// After install, require the package and then create a variable which invokes the express function.

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```
1.  How well-maintained is this package? What criteria did I use to decide?
```md
It is very well-maintained. I chose express because it is the number one download on npm with over 10m downloads in the last month.
```

Package 2:
```md
`gulp`
```
1.  What problem does this package solve?
```md
Gulp is an automator and task runner that helps to make tasks like compiling sass, coffeescript or template files easier. It can also be used to run tests, watch for changes to files and many other things.
```
1.  How can I use this package in my own code? What steps are involved?
```md
Using Gulp is not as simple as some packages. You must gloablly install the gulp-cli package and then install gulp as a devDependency in your project. Depending on what you want to do you may then need to install other packages such as gulp-coffee. Finally you need to create a gulp.js file in your project and write configuration options for your needs.
```
1.  How well-maintained is this package? What criteria did I use to decide?
```md
This package seems to be well-maintained. It has a loyal following and an active community on GitHub reporting issues and making pull requests. 
```

Package 3:
```md
`chalk`
```
1.  What problem does this package solve?
```md
It colorizes output to the terminal
```
1.  How can I use this package in my own code? What steps are involved?2.
```md
Install the package and require it in your file.

Then call it like so:

chalk.blue('Hello world!');
```
1.  How well-maintained is this package? What criteria did I use to decide?2.
```md
The package does not appear to have a lot of activity on GitHub. However, it has a ton of downloads in npm. I'm thinking it might be simple enough that it doesn't need a ton of tweaking.
```
