/*
  This file demos arrays, loops, conditions
*/

// What is a 'truthy' value? Except true/false?
// Try guessing before evaluating!

if (undefined)
    console.log("undefined is truthy");

if (null)
    console.log("null is truthy");

if (0)
    console.log("0 is truthy");

if (100)
    console.log("100 is truthy");

if ("")
    console.log("An empty string is truthy");

if("word")
    console.log("A non empty string is truthy");

// Should I use == or === ?

if ("1" == 1)
    console.log("A string is == to a number");

if ("1" === 1)
    console.log("A string is not === to a number");

// Loops
// The while loop
var neverLooped = true;
while (neverLooped) {
    neverLooped = false;
    console.log("In a while loop");
}

//For loops
for (var i = 1; i <= 5; i++) {
    console.log("Doing pushup number " + i);
}

// Arrays 
// List of elements
var a = [1, 2, 3];
console.log("a[0] = " + a[0]);

// Looping over an array
for (var j = 0; j < a.length; j++) {
    console.log(a[j]);
}

// Is there a better way to process arrays?
// What if I want to apply a function to all elements?
// (Try this after reading about functions)

function decoratePrint(text) {
    console.log("*** " + text + " ***");
}

// For each 'element' in the array a,
// Apply the function decoratePrint(element)
a.forEach(decoratePrint);

// Check out array.filter(), array.map() etc
