
var givenWords = ["fish", "world", "cat", "insanity", "crazy"];
var word = givenWords[Math.floor(Math.random() * givenWords.length)];
console.log(word);
var gameWord = document.getElementById("gameword").innerHTML = word;
var wordArray = gameWord.split("");
var originalLength = wordArray.length;
    //for (var i = 0; i < originalLength; i ++) {
    //wordArray[i] = "_";
    //}
var chosenWord = "";
var answerArray = [];
var numBlanks = 0;
var blankAndSuccesses = [];
var wrongGuesses =[];
    //for (var i = 0; i < word.length; i++) {
    //answerArray[i] = "_";
    //}
var guessingWord = [];
var currentWordIndex;

var remainingLetters = word.length;

var tries = 10;
var counter = 0;
var space = 0;


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
var cnvEl1 = document.getElementById("hangman");
var currentWordIndex = 0;
var select = 0;

//for (var i = 0; i < word[currentWordIndex].length; i++) {
  //guessingWord.push("_");
//}

var triesCount = function () {
  var sEl1 = document.getElementById("span1").innerHTML = tries;
  tries = tries - 1;
};

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
  document.getElementById("word-blanks").innerHTML = wrongGuesses.join(" ");

  if (answerArray.toString() === blankAndSuccesses.toString()) {
    alert("You win!");
    console.log("You win!");

    startGame();
  }
  else if (tries === 0) {
    alert("Game over!");
    console.log("Game over!");

    startGame();
  }
};

startGame();


document.onkeyup = function(e) {
  var letterGuessed = String.fromCharCode(e.which).toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();
}


btnEl1.addEventListener("click", function(e) {
  var letterInput = inputElLtr.value;
  var ansLetters = String.fromCharCode(e.which).toLowerCase();
  inputElLtr.value = ""; 
  answerArray = answerArray + letterInput;
  //pEl1.textContent = answerArray;
  console.log(answerArray);
  if (tries <= 0){
    alert("Game over!");
    console.log("Game over!");
  }

  /*
  if (wordArray.toString() === answerArray.toString()) {
    for (var i = 0; i < wordArray.length; i++) {
    wordArray.push(pEl1.textContent);
    wordArray.toString("");
  } else {
    tries = tries - 1;
  } 
} 
*/
  
    
  checkLetters(ansLetters);
  roundComplete();
   
  triesCount();
  showTries();
  //checkLetters(answerStr);
  //evaluateGuess();
  //makeGuess();
  //result();
});


btnEl3.addEventListener("click", function(e) {
var reset = inputElLtr.value;
updateDisplay();
btnEl3.reset();

});

var showTries = function () {
sEl1.innerHTML = tries;
if (tries < 1) {
  document.getElementById("tries").textContent = "Game Over";
  console.log("Game over!")
} else {
for (var i = 0; i < wordArray.length; i++) {
  if (counter + space === wordArray.length) {
    document.getElementById("tries").textContent = "You Win!";
    console.log("You win!")
  }
}
}};
  





 