/*
  This is a demo file showing various ways to make
  functions. 
*/

// A really simple function to sum two numbers
function sum(a, b) {
    var result = a+b;
    return a+b;
}

// This is another way to define a function
// subtract(1, 2) will work! What's the difference then?
// Look at http://stackoverflow.com/questions/1013385/ 
var subtract = function(a, b) {
    return a-b;
};

// Anonymously defining a function
// A function need not have a name
// The () at the end execute it immediately

(function () {
    console.log("Inside functions demo");
})();


// A functions can be parts of objects
// Try calling myMath.mySum(a,b);
var myMath = {
    mySum: sum,
    mySubtract: subtract
};

// A function can return a function

function addN(n) {
    var adder = function(num) {
	return num+n;
    };
    return adder;
}

// Try addTen(5);
var addTen = addN(10);

// A functions can be stored in arrays, passed as arguments
// This function accepts a list of functions having 2
// arguments and calls them on 2, 1
function processList(list) {
    for(var i = 0; i != list.length; i++) {
	console.log(list[i](2, 1));
    }
}

// Try this!
var myList = [sum, subtract];
processList(myList);
