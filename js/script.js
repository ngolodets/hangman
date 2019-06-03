//General variables
var givenWords = ["fish", "world", "cat", "insanity", "crazy"];
var word = givenWords[Math.floor(Math.random() * givenWords.length)];
console.log(word);
var gameWord = document.getElementById("gameword").innerHTML = word;
document.getElementById("gameword").style.color = "rgb(204, 255, 255)";
var wordArray = gameWord.split("");
var originalLength = wordArray.length;
var chosenWord = "";
var answerArray = [];
var numBlanks = 0;
var blankAndSuccesses = [];
var wrongGuesses =[];
var guessingWord = [];
var tries = 10;

//HTML element references:
var inputElLtr = document.querySelector('[name="letterinput"]');
var pEl1 = document.getElementById("givenword");
var pEl2 = document.getElementById("playletter");
var pEl3 = document.getElementById("output");
var pEl4 = document.getElementById("blanksandsuccesses");
var sEl1 = document.getElementById("span1");
var inputEl1 = document.getElementById("letter1");
inputEl1.style.display = 'inline';
var letters = document.getElementById("gameword");
letters.style.textAlign = "left";
var btnEl1 = document.getElementById("letter");
var btnEl3 = document.getElementById("reset");

//function to count number of tries left
var triesCount = function () {
  document.getElementById("span1").innerHTML = tries;
  tries = tries - 1;
};

//function to initialize the game
function startGame() {
  tries = 10;
  chosenWord = gameWord;
  answerArray = chosenWord.split("");
  numBlanks = answerArray.length;
  console.log(chosenWord);
  blankAndSuccesses = [];
  wrongGuesses = [];

  for (var i = 0; i <numBlanks; i++) {
    blankAndSuccesses.push("_");
  }

  console.log(blankAndSuccesses);
  document.getElementById("span1").innerHTML = tries;
  document.getElementById("word-blanks").innerHTML = blankAndSuccesses.join(" ");
};

//function to see if letters entered are correct
function checkLetters(letter) {
  var letterInWord = false;

  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      letterInWord = true;
    }
  }
  if (letterInWord) {
    for (var j = 0; j < numBlanks; j++) {
      if (chosenWord[j] === letter) {
        blankAndSuccesses[j] = letter;
      }
    }
    console.log(blankAndSuccesses);
    document.getElementById("blanksandsuccesses").innerHTML = blankAndSuccesses.join(" ");
    } else {
      wrongGuesses.push(letter);
    }
};


function roundComplete() {
  document.getElementById("word-blanks").innerHTML = "Wrong guesses: " + wrongGuesses.join(" ");
  checkWin();
};

startGame();

/*
document.onkeyup = function(e) {
  var letterGuessed = String.fromCharCode(e.which).toLowerCase();
}
*/

//Event listener for the Enter Your Letter button
btnEl1.addEventListener("click", function(e) {
  var letterInput = inputElLtr.value;
  var ansLetters = String.fromCharCode(e.which).toLowerCase();
  inputElLtr.value = ""; 
  answerArray = answerArray + letterInput;
 
  console.log(answerArray);
  
  checkWin();
  checkLetters(letterInput);
  triesCount();
  roundComplete();
});


//Event listener for the Start New Game button
btnEl3.addEventListener("click", function(e) {
  var reset = inputElLtr.value;
  updateDisplay();
  btnEl3.reset();
});
  
//function to see if the player had guessed the word correctly
var checkWin = function() {
  sEl1.innerHTML = tries;
  if (tries < 1) {
    document.getElementById("tries").textContent = "Game Over... Try Again";
    //alert("Game over!");
    console.log("Game over!");
  } else {
    for (var j = 0; j< word.length; j++) {
      if (blankAndSuccesses.join("").includes("_") === false && blankAndSuccesses.join("") === word) {
  
  document.getElementById("tries").textContent = "You win!";
  console.log("You win!!");  
  //alert("You win!");

    }}}};





