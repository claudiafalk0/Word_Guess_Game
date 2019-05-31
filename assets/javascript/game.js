var wins = 0;
var losses = 0;
var computerChoices = [];
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var lettersGuessedText = document.getElementById("lettersGuessed");
var guessRemainText = document.getElementById("guessRemain");
var userGuess = [];
var computerGuess;

function resetGame(){
    guessRemainText.textContent = 16;
    userGuess = [];
    lettersGuessedText.textContent = "";
    guessCount = 0;
    computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
}

window.onload = function(){
    resetGame();
}

document.onkeyup = function(event){
    var 
}