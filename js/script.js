
var givenWords = ["fish", "world", "cat", "insanity", "crazy"];
var word = givenWords[Math.floor(Math.random() * givenWords.length)];
var gameWord = document.getElementById("gameword").innerHTML = word;
var wordArray = gameWord.split("");
var originalLength = wordArray.length;
    for (var i = 0; i < originalLength; i ++) {
    wordArray[i] = "_";
    }
var answerArray = [];
//for (var i = 0; i < word.length; i++) {
  //answerArray[i] = "_";
//}
var remainingLetters = word.length;

var tries = 10;
var counter = 0;
var space = 0;


var inputElLtr = document.querySelector('[name="letterinput"]');
var pEl1 = document.getElementById("givenword");
var pEl2 = document.getElementById("playletter");
var pEl3 = document.getElementById("output");
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

for (var i = 0; i < word.length; i++) {
  word[i] = "_";
}

var triesCount = function () {
  var sEl1 = document.getElementById("span1").innerHTML = tries;
  tries = tries - 1;
};


btnEl1.addEventListener("click", function(e) {
  var letterInput = inputElLtr.value;
  inputElLtr.value = ""; 
  wordArray = wordArray + letterInput;
  pEl1.textContent = wordArray;
  if (tries <= 0){
    alert("You lost!");
  }
  triesCount();
  showTries();
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
} else {
for (var i = 0; i < wordArray.length; i++) {
  if (counter + space === wordArray.length) {
    document.getElementById("tries").textContent = "You Win!";
  }
}
}};
  
var result = function () {
    var wordHolder = inputEl1;
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      answerArray.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  };
  



 