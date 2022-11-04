# Class 3

## Learn HTML
### Ordered and Unordered lists.

* When should you use an unordered list in your HTML document?
  * Used to create a list of related items im no particular order
* How do you change the bullet style of unordered list items?
  * The CSS list-style-type property
  * Options available: disc, circle, square, none
* When should you use an ordered list vs an unorder list in your HTML document?
  * Used to create a list of item in a specific order. For instance, if creating directions to a location or a recipe. 
* Describe two ways you can change the numbers on list items provided by an ordered list?
  * Default numbers or Roman Numbers can be used

## Learn CSS
### [The Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)

* Describe the CSS properties of margin and padding as characters in a story. What is their role in a story titled: “The Box Model”?
  * Imagine the packaging of a sweater as a birthday gift. 
  * The sweater is the content. 
  * The sweater is wrapped in tissue paper creating a layer between the content and the border or gift box. 
  * The outermost layer wrapping up the content, padding and border is the margin or decorative wrapping paper.
  
* List and describe the four parts of an HTML elements box as referred to by the box model.
  * content: area where content is displayed
  * padding: site around the content as white space
  * border: border box wraps around the conent and padding
  * margin: outermost layer, wrapping the content, padding and border as whitespace between the box and other elements
  * Remember MBR (man bear pig)

## Learn JS
### Arrays. Operators and Expressions. Conditionals. Loops.

* What data types can you store inside of an Array?
  * number, string, boolean, null, undefined and object. A nested array can also be created.  
* Is the people array a valid JavaScript array? If so, how can I access the values stored? If not, why?
    * const people = [['pete', 32, 'librarian', null], ['Smith', 40, 'accountant', 'fishing:hiking:rock_climbing'], ['bill', null, 'artist', null]];
    * It is an array with 4 nested arrays. You could loop through the array to access the values. 
* List five shorthand operators for assignment in javascript and describe what they do.
  * ++ increment
  * -- decrement
  * += add strings
  * & AND
  * | OR
* Read the code below and evaluate the last expression and explain what the result would be and why.

 >let a = 10;
 >let b = 'dog';
 >let c = false;

 >// evaluate this
 >(a + c) + b;
    * '10dog'
    * false is a boolean with a value of 0. 10 + 0 = 10
    * + concatenates the two values, the number 10 and the string dog
* Describe a real world example of when a conditional statement should be used in a JavaScript program.
  * Request that a user enter a valid password. If the user does not enter a valid password, then they are not allowed to progress.
* Give an example of when a Loop is useful in JavaScript.
  * When iterating through an array
  * a for loop - loops through a block of code a number of times
  * while and do...while loop: loops through a block of code while a specified condition is true

## Things I want to know more about
* New ideas
  * trim()
  * includes()
  * global variables
  * short circuiting
