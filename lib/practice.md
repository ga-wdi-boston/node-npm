## Practice: Install a Package for Enumeration

- What package did you install for enumeration?

## Research: Popular NPM Packages

Package 1:
enum
1.  What problem does this package solve?
enum assigns a variable's name to its value.  This means that a key can be obtained from its attribute, or a class's instances can be checked with instanceOf
1.  How can I use this package in my own code? What steps are involved?
This could be used to build up combinations of key values, values can be obtained in an object A by stating myEnum.A.value or key myEnum.A.key.
It can be used:
$ npm install enum
var Enum = require('enum');

1.  How well-maintained is this package? What criteria did I use to decide?
There have been 17 releases and 21,243 downloads in the past month.

Package 2:

1.  What problem does this package solve?
Assigns a symbol to a value, so that value will not be equal to another instance of the same value.
1.  How can I use this package in my own code? What steps are involved?
Any time I have the same value names, but I want the values to be
distinct and different from other values of the same name.
npm install es6-enum
reference Enum in instantiation of a variable.
1.  How well-maintained is this package? What criteria did I use to decide?
2.  There has been 13 releases and 2,896 downloads in the last month.

Package 3:
enumr8
1.  What problem does this package solve?
We can set a custom enum type and generate instances of that type.
1.  How can I use this package in my own code? What steps are involved?
I can take an array and assign its values to a new variable by using a number or name type as the array's value type.
In an object,  could assign a number key like 11, to a name, such as A.  This could be used to create hexidecimals.
npm install enumr8
const createEnumType = require('enumr8');
1.  How well-maintained is this package? What criteria did I use to decide?
This package has two releases and was created 6 months ago.  There was 67 downloads in the last month.
