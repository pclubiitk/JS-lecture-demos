/*
  This demo covers DOM and events
  This is meant for use with DOMdemo.html
*/

// Getting elements
var myDiv = document.getElementById("myDiv");
console.log(myDiv);

var badges = myDiv.getElementsByClassName("badge");
console.log(badges);

// changing element properties
myDiv.style.color = "red";
badges[0].style.backgroundColor = "blue";

// Using innerHTML
badges[1].innerHTML += "<em> <br> Appended text </em>";

// Traversing DOM
// creating and adding element
var newSpan = document.createElement("span");
newSpan.className = "badge";
newSpan.style.color = "black";
var textInsideSpan = document.createTextNode("I am another badge");
newSpan.appendChild(textInsideSpan);
myDiv.appendChild(newSpan);

// Looking at parents and children

console.log(myDiv.childNodes);
console.log(myDiv.lastChild);
console.log(newSpan.parentNode);

// Adding action listeners!

function clickAlert(event) {
    alert("myDiv was clicked!");
}

myDiv.addEventListener("click", clickAlert);
