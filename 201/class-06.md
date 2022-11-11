# Class 06

## [JavaScript Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

* How would you describe an object to a non-technical friend you grew up with?
  * An object stores data with an attribute. Kind of like a phone book listing that stores and links information about a person such as first and last name and links their address and phone number back details or attributes to the listing. 
* What are some advantages to creating object literals?
  * Flexibility and less code. Good code organization.
* How do objects differ from arrays?
  * Objects store data in pairs (characteristics/properties) while arrays create and store lists of data in a single variable. 
* Give an example for when you would need to use bracket notation to access an object’s property instead of dot notation.   
  * Bracket notation is used to access an object's property if is is two words with a space, when it is a number or includes a symbol.
* Evaluate the code below. What does the term this refer to and what is the advantage to using this?
  * Allows for the reuse of functions in different contexts. In this example, this.name refers to dog name is Spot. The dog is 14 in human years.
> const dog = {
>  name: 'Spot',
>  age: 2,
>  color: 'white with black spots',
>  humanAge: function (){
>    console.log(`${this.name} is ${this.age*7} in human years`);
>  }
>}

## [Introduction To The DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

* What is the DOM?
  * Document Object Model which is an interface that treats HTML document as a tree structure where each node is an object representing a part of the document. 
* Briefly describe the relationship between the DOM and JavaScript.
  * JavaScript can access and manipulate the DOM to alter the display of a web page. DOM allows for manipulation of tags, IDs, classes, Attributes or Elements of HTML using commands or methods provided by the document object. [Reference](https://www.geeksforgeeks.org/dom-document-object-model/)

## Bookmark and Review
* Understanding the problem domain is the hardest part of programming
* [What’s the difference between primitive values and object references in JavaScript?](https://betterprogramming.pub/intermediate-javascript-whats-the-difference-between-primitive-values-and-object-references-e863d70677b)
  * Primitive values are immutable and cannot be change after being created. Object references are mutable and can be changes. 

## Things I want to know more about