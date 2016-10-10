## Practice: Install a Package for Enumeration

- What package did you install for enumeration?
- https://www.npmjs.com/package/enum

## Research: Popular NPM Packages

Package 1: grunt

  What problem does this package solve?
    It is a task runner. This solves automation.
  How can I use this package in my own code? What steps are involved?
    With a task runner, you can easily allow yourself to have less tasks to care
    of for a particular project, and instead automate the process of doing
    minifications, compile tasks, testing, code linting, and so forth.
    Assuming that the Grunt CLI has been installed and that the project has
    already been configured with a package.json and a Gruntfile, to start
    working with Grunt:
        -Change to the project's root directory.
        -Install project dependencies with npm install.
        -Run Grunt with grunt.
        -That's really all there is to it. Installed Grunt tasks can be listed
        by running grunt --help but it's usually a good idea to start with the
        project's documentation.
  How well-maintained is this package? What criteria did I use to decide?
    https://www.npmjs.com/package/grunt-documentation
    Seems to be in every list of top npm install packages.

Package 2: passport

What problem does this package solve?
    Passport's sole purpose is to authenticate requests, which it does through
    an extensible set of plugins known as strategies.
How can I use this package in my own code? What steps are involved?
    Passport does not mount routes or assume any particular database schema,
    which maximizes flexibility and allows application-level decisions to be
    made by the developer. The API is simple: you provide Passport a request to
    authenticate, and Passport provides hooks for controlling what occurs when
    authentication succeeds or fails. Before authenticating requests, the
    strategy (or strategies) used by an application must be configured.
How well-maintained is this package? What criteria did I use to decide?
    http://passportjs.org/docs
    There are many tutorials online and documentation for this package. Plus,
    it lists providers such as Facebook, twitter and google

Package 3: less

What problem does this package solve?
    Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions and many other techniques that allow you to make CSS that is more maintainable, themeable and extendable.
How can I use this package in my own code? What steps are involved?
    Make sure you include your stylesheets before the script.
    Once installed, you can invoke the compiler from the command-line, as such:
    lessc styles.less
    This will output the compiled CSS to stdout. To save the CSS result to a
    file of your choice use: lessc styles.less styles.css
    http://lesscss.org/
How well-maintained is this package? What criteria did I use to decide?
    Well-documented with a github page in which users can post issues.
