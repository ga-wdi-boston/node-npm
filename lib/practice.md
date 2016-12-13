## Practice: Install a Package for Enumeration

- What package did you install for enumeration?
    enum

## Research: Popular NPM Packages

Package 1: chalk

1.  What problem does this package solve? Colorizes terminal. Solves problem of mundane visual cues in terminal. Create themes for errors, etc.
1.  How can I use this package in my own code? What steps are involved?
    can install using <npm install --save chalk> You'll want to require "chalk"
    at top of file to use and then implement by using <chalk.blue("Hello world");>
    as an example...
1.  How well-maintained is this package? What criteria did I use to decide?
    Over 4 million downloads in past week.

Package 2: moment

1.  What problem does this package solve? date/time
1.  How can I use this package in my own code? What steps are involved?
    In node:
      npm install moment
      let moment = require('moment');
      moment().format();
1.  How well-maintained is this package? What criteria did I use to decide?
    50 releases, over 3,000 commits on github, 9days ago most recent...

Package 3: async

1.  What problem does this package solve? working with async JS  code, managing it
1.  How can I use this package in my own code? What steps are involved?
    npm install async / has ~70 functions included
    Used by async.<method> such as map, filter, parallel, series
1.  How well-maintained is this package? What criteria did I use to decide?
      over 1500 commits, updates within last 10 days, 185 contributor, 65
      releases. Shows up as one of most popular npm packages on several sites. 
