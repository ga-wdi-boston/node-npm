## Practice: Install a Package for Enumeration

- What package did you install for enumeration?

[enum](https://www.npmjs.com/package/enum)

## Research: Popular NPM Packages

Package 1: Lodash

1.  What problem does this package solve?
  It makes working with arrays, objects, numbers, and strings in JavaScript way
  easier by using a lot of the same functions that Ruby has built in.
1.  How can I use this package in my own code? What steps are involved?
  After we install lodash with npm, we require either the full or core build in our
  document (lodash or lodash/core). Then we can narrow it down even further if we want
  to just load the methods for a certain datatype, like 'array' or 'object'
1.  How well-maintained is this package? What criteria did I use to decide?

  It appears to be incredibly well maintained, with nearly 7,500 commits and the latest
  commit being a day ago.

Package 2: 'Request'

1.  What problem does this package solve?
  It is meant to be the 'simplest' way to make http calls, with support for
  HTTPS and automatically follows any redirects by default.
1.  How can I use this package in my own code? What steps are involved?

  After installing request with npm and requiring it, we can just use it by calling
  'request(<url>, function(err, data){...}) ... pretty similar to the existing
  http get calls we saw in nodeschool. It has a lot of options and safeties built in, however.

1.  How well-maintained is this package? What criteria did I use to decide?
  This looks relatively well maintained, with about 2,000+ commits and the latest
  one made just over two weeks ago. It does have 345 open issues, however, and 43
  pending pull requests on Github.
  The documentation on both github and NPM are incredibly extensive, and it's listed
  as one of the most 'relied upon' packages on NPM, so it seems to have some credence.

Package 3: 'async'

1.  What problem does this package solve?
  'async' makes working with async functions in Node.js much easier, by adding
  a number of functional aspects (map, reduce, filter), as well as a lot of functionality
  for controlflow of handling callbacks.
1.  How can I use this package in my own code? What steps are involved?
  After installing and requiring, I can use any async method as long as I follow the node.js
  format of using a callback as the last argument of an asynchronous function, with 'error' being
  the first argument of that callback. It also expects that we will call the callback at least once.
1.  How well-maintained is this package? What criteria did I use to decide?
  This has about 1400 commits with the latest commit being 4 days ago. It has only 19 issues
  and 4 open pull requests, as well as extensive documentation at http://caolan.github.io/async/
