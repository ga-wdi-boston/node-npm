## Practice: Install a Package for Enumeration

-   What package did you install for enumeration?

findit

## Research: Popular NPM Packages

Package 1: forever

-   What problem does this package solve?

It allows you to keep a process running indefinitely and restart it if it fails
unexpectedly (for example a server crashing).

-   How can I use this package in my own code? What steps are involved?

Install forever with 'npm install forever -g' then call it in your code or via
the command line (for example 'forever start app.js').

-   How well-maintained is this package? What criteria did I use to decide?

It doesn't seem very well maintained but it still seems to be functional; it
has ~350k downloads per month and has comprehensive documentation.  However,
the last update was 9 months ago.

Package 2: async

-   What problem does this package solve?

It allows you to use important methods such as map, reduce etc with Node.js

-   How can I use this package in my own code? What steps are involved?

It is installed with 'npm install --save async', then prefixed to methods (for
example, 'async.map').

-   How well-maintained is this package? What criteria did I use to decide?

It is very well maintained, it has ~18,000 stars on github and multiple commits
per day.

Package 3: moment

-   What problem does this package solve?

It makes converting dates and times by in JavaScript easier by provided a
standardized conversion format as opposed to needing to convert dates into
objects and concatenating, or similar workarounds.

-   How can I use this package in my own code? What steps are involved?

Install with 'npm install moment', then use require(). Example:
let moment = require('moment');

-   How well-maintained is this package? What criteria did I use to decide?

It seems moderately well maintained.  It has good documentation, 25k stars
on github, and a relatively stable commit history.  However, it also has 153
outstanding issues at the moment.
