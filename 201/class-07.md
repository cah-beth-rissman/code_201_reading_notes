# Class 07 - Object-Oriented Programming, HTML Tables

## [Domain Modeling](https://github.com/codefellows/domain_modeling#domain-modeling)

* Explain why we need domain modeling.
  * Domain modeling helps across an organization to maintain common language and a structure for the analysis of features and epics. The domain model is defined and continuously refactored as enterprise knowledge about the domain improves and the system functionality evolves.

## [HTML Table Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics)

* Why should tables not be used for page layouts?
  * Tables were intended to display tabular data. Tables are slow to render, causing bandwidth issues.
* List and describe 3 different semantic HTML elements used in an HTML <table>.
  1. <tbody> - encapsulates a set of table rows or tr elements, indicating that they comprise the body of the table
  2. <td> - defines a cell of a table that contains data
  3. <thead> - defines a set of rows defining the head of the columns of the table

## [Introducing Constructors](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#introducing_constructors)

* What is a constructor and what are some advantages to using it?   
  *  A constructor creates and object instance of a class. The constructor creates a new object and sets values for any existing object properties. 
* How does the term this differ when used in an object literal versus when used in a constructor?
  * Objects created using object literals are singletons. This means when a change is made to the object, it affects that object across the entire script. Objects defined with a function constructor let us have multiple instances of that object. This means change made to one instance, will not affect other instances.
## [Object Prototypes Using A Constructor](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#introducing_constructors)

* Explain prototypes and inheritance via an analogy from your previous work experience.
  * Prototypes are object instances to which a child instances delegate undefined properties. A parent child relationship could demonstrate the prototype model as the child inherits traits from their parent, such as eye color, blodd type, etc. The genes or properties of the parent filters to the the child. 
> NOTE: This is a very common front end developer interview question

## Bookmark and Review
* [HTML Table Advanced Features and Accessibility](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced)

## Things I want to know more about