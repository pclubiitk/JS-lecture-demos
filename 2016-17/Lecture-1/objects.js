/*
  Demo for objects in JavaScript
*/

// Basic definition : a collection of values

var employee = {
    "name": "Chaitanya Bhagwat",
    "age": 21,
    "role": "Junior Undersecretary",
    "wage": 500
};

// Accessing object values
// The former is considered better style
console.log(employee.name);
console.log(employee['name']);

// Can we have an object that contains an object?
// The object below has a property 'peopleEmployed containing
// the employee object given above
var company = {
    "name": "Goat Farm Inc.",
    "type": "Tertiary",
    "peopleEmployed": employee
};

// It can be accessed like any other value
console.log(company.peopleEmployed.role);

// Hmm... isn't it more logical to have a list(array) of
// employeed rather than just one? Let's make the change

var employee2 = {
    "name": "Pratik Kulkarni",
    "age": 21,
    "role": "CEO",
    "wage": 1000
};

// Let's change the company!
company.peopleEmployed = [ employee, employee2 ];


// If functions can be passed as arguments to other functions,
// can they also be inside an object?
// More fundamental: 
// Are functions objects? Yes, they are!

// Add a function
company.printStatus = function() {
    console.log("Everything is working fine");
}

// Try it
company.printStatus();

