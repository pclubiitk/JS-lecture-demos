/*
  This file contains various helper functions
  These are used for stuff like changing the DOM and cutting
  down repetetion of code
*/

/*
  changeLastText(elem, text) : returns nothing
  elem: element whose text the method changes
  text: text that the element puts inside elem
  This is a method to quicky change the text in the last
  (text) node appended to the element.
  This expects the lastChild of the element to be a text node
*/
function changeLastText(elem, text) {
    // if textnode doesn't exist, create one
    // otherwise simply change the value
    if (!elem.lastChild)
	elem.appendChild(document
			 .createTextNode(text));
    else 
	elem.lastChild.nodeValue = text;
}
/*
  createDashedWord(word, lettersCorrect): returns string
  word: string containing the correct word
  lettersCorrect: string array containing letters guessed
  correctly till now
  This function uses word and letter correct to create a dashed 
  version of the word for display to the user.
  For example, if 'kicker' is the word and the correct guesses are
  'k' and 'c' then the output will be 'k _ c k _ _ '
 */
function createDashedWord(word, lettersCorrect) {
    var wordArray = Array.from(word);
    var finalWord = "";
    // For each letter in the word, apply the function dash on it
    // forEach is a method of the word array which takes another
    // function as it's input, in this case the function 'dash'
    // Think of this as calling dash(letter) for each of the letters
    // in wordArray
    wordArray.forEach(function dash(letter) {
	if (lettersCorrect.indexOf(letter) === -1) {
	    finalWord += "_ ";
	} else {
	    finalWord += letter + " ";
	}
    });
    return finalWord;
}
/*
  createLabelledField(label, id): returns created field
  label: string containing label for field
  id: string containing id attribute for field
  This method creates an Element object equivalent to
  <div id = "{id}">
  <span>{label}</span>
  <span>(space to be filled later)</span>
  </div>
*/
function createLabelledField(label, id) {
    //create outer field
    var outerField = document.createElement("div");
    outerField.id = id;

    //create label field
    var labelField = document.createElement("span");
    changeLastText(labelField, label);

    //create inner field
    var innerField = document.createElement("span");
    
    // add fields into outerField
    outerField.appendChild(labelField);
    outerField.appendChild(innerField);

    return outerField;
}
/*
  endGame(word, condition): returns nothing
  word: string with correct word
  condition: string - "win" or "loss"
  This is responsible for displaying correct word and win/loss 
  messages
*/
function endGame(word, condition) {
    // try out alert('hi') in the console!
    alert("The correct word was " + word);
    // should we check someway that condition is "win" or "lose"
    // and not anything else?
    alert("It's a " + condition);
    // reload the window
    // look window.location.reload() on MDN
    window.location.reload();
}
