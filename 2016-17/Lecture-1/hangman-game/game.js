// turns is a global variable which decides total allowed turns
var turns;

/*
  setupDOM(): returns list of div Elements
  This method initialized the fields inside the gameArea
  It returns a list of the initialized Elements for further use
*/
function setupDOM() {
    // get game area
    var gameArea = document.getElementById("gameArea");
    // create elements using helper function
    var word = createLabelledField("Word: ", "word");
    var turns = createLabelledField("Turns: ", "turns");
    var misses = createLabelledField("Misses: ", "misses");
    var divList = [word, turns, misses];
    // for every div, add that div to the game area
    divList.forEach(function(div) {
	gameArea.appendChild(div);
    });
    // return the list of divs
    // better idea to try: use an object so you can name the divs
    // you don't need to remember indices that way!
    return divList;
    
}

/* 
   updateDOM(...): returns nothing
   word: string with correct word
   lettersCorrect: string array with correct letters guessed till now
   lettersIncorrect: string array with correct letters guessed till now
   divList: divList made by setupDOM
   This function updates the DOM to reflect the current game state
*/
function updateDOM(word,
		   lettersCorrect,
		   lettersIncorrect,
		   divList) {
    // use helper method to get dashed version of word
    word = createDashedWord(word, lettersCorrect);
    // use helper methods to modify the DOM
    changeLastText(divList[0].lastChild, word);
    changeLastText(divList[1].lastChild, turns);
    // Try ['a', 'b', 'c'].join(':') in the console!
    changeLastText(divList[2].lastChild, lettersIncorrect.join(' '));
}

/*
  guessLetter(...): returns nothing
  letter: string containing letter guessed by user
  others are the same as above
  This function is called when the user guesses a letter
*/
function guessLetter(word,
		     lettersCorrect,
		     lettersIncorrect,
		     divList,
		     letter) {
    // if word contains this letter, then add it to lettersCorrect
    // otherwise, add the letter to lettersIncorrect
    if (word.indexOf(letter) === -1) {
	lettersIncorrect.push(letter);
    } else {
	lettersCorrect.push(letter);
    }
    // check if the end game condition is met
    // if the dashed word created does not contain any underscores,
    // we have guessed all letters, so, end the game using endGame
    // look up indexOf() on MDN!
    if (createDashedWord(word,lettersCorrect).indexOf("_") === -1)
	endGame(word, "win");
    // call nextTurn to move the game state forward
    nextTurn(word, lettersCorrect, lettersIncorrect, divList);
}

/* 
   guessWord(...) : returns nothing
   guessedWord: string containing user guessed word
   others are same as above
   This function is called when the user guesses a word
*/
function guessWord(word,
		   lettersCorrect,
		   lettersIncorrect,
		   divList,
		   guessedWord) {
    // if the user has guessed correctly, then end the game
    if (word === guessedWord)
	endGame(word, "win");
    // call nextTurn to moce the game state forward
    nextTurn(word, lettersCorrect, lettersIncorrect, divList);
}

/* 
   nextTurn(...) : returns nothing
   Parameters are same as above
   This function is called at the end of every turn to move the 
   game state forward
*/
function nextTurn(word,
		  lettersCorrect,
		  lettersIncorrect,
		  divList) {
    turns -= 1;
    // we can lose if we run out of turns
    if (turns === 0)
	endGame(word, "loss");
    // update DOM to reflect new game state
    updateDOM(word, lettersCorrect, lettersIncorrect, divList);
}

/*
  setupGame(correctWord, noOfTurns): returns nothing
  correctWord: string
  noOfTurns: number - initial number of turns
  This is the function that starts the game (initializes every thing)
*/
function setupGame(correctWord, noOfTurns) {
    // initialize stuff
    var word = correctWord;
    turns = noOfTurns;
    var lettersCorrect = [];
    var lettersIncorrect = [];
    var divList = setupDOM();
    updateDOM(
	word,
	lettersCorrect,
	lettersIncorrect,
	divList
    );
    // Set up event handlers
    // on-click event handlers for buttons
    /*
      find these dots confusing? 
      try :
      var guessWordButton = document.getElementById("guessWord");
      var fn = function() { .. }
      guessWordButton.addEventListener("click", fn);
      See if you can understand it now
     */
    document
	.getElementById("guessWord")
	.addEventListener("click",
			  function() {
			      var guessBox = document.getElementById("guess");
			      var guessedWord = guessBox.value;
			      guessBox.value = "";
			      guessWord(word,
					lettersCorrect,
					lettersIncorrect,
					divList,
					guessedWord);
			  });
    
    document.getElementById("guessLetter").onclick = function() {
	var guessBox = document.getElementById("guess");
	var guessedLetter = guessBox.value;
	guessBox.value = "";
	guessLetter(word,
		 lettersCorrect,
		 lettersIncorrect,
		 divList,
		 guessedLetter);
		 
    };
}

// set up the code for starting the entire game up
window
    .addEventListener("load",
		      function() {
			  // Check out Math on MDN. It's a set of handy math functions, like random and floor
			  // here I'm using it to choose a random word from the WORD_LIST
			  var chosenWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
			  setupGame(chosenWord, chosenWord.length + 1);
		      });
