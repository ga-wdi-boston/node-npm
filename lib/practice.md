## Practice: Install a Package for Enumeration

- What package did you install for enumeration?

npm install enum -s

## Research: Popular NPM Packages

Package 1:

1.  What problem does this package solve?
1.  How can I use this package in my own code? What steps are involved?
1.  How well-maintained is this package? What criteria did I use to decide?

Chalk
npm install --save chalk

It is a popular styling module



Package 2:

1.  What problem does this package solve?
1.  How can I use this package in my own code? What steps are involved?
1.  How well-maintained is this package? What criteria did I use to decide?

Browserify
npm install browserfy -s

It analizing files and determines the order of loading.

We always include different <script> tags for diffrent js files. We can include as many as we need, but browsefiry allows us to add those using one single file called bundle.js.

npm init // package.json is created
npm install browserfy -s // next time with npm install we will get browserfy back

It also creates bin/browserfy folder/file.
In package.json we can create entry of the script object, and reference bin/browserfy. We should name our root of all modules and which file we are going to write out to once everything is bundled.

Run npm run build. It will build bundle.js.

So, now we include bundle.js in our htlm.



Package 3:

1.  What problem does this package solve?
1.  How can I use this package in my own code? What steps are involved?
1.  How well-maintained is this package? What criteria did I use to decide?

Validator
$ sudo npm install -g jshint
It validates code before it runs.

Installing this module we get two js files. One clean/correct written js, and one with syntax errors. Running those throuhg jshint we get either no errors, or we get errors.

This can be applied to any code.
