var wins = 0;
var losses = 0;
var ABC = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var computerChoices = ["harry", "snape", "dumbledore", "hermoine", "ron", "malfoy", "voldemort"];
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var lettersGuessedText = document.getElementById("lettersGuessed");
var guessRemainText = document.getElementById("guessRemain");
var randomWordText = document.getElementById("randomWord");
var beginText = document.getElementById("Begin")
var userGuess = [];
var computerGuess;
var currentWord;

function resetGame(){
    guessRemainText.textContent = 16;
    userGuess = [];
    lettersGuessedText.textContent = "";
    guessCount = 0;
    computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    currentWord = "_".repeat(computerGuess.length);
    randomWordText.textContent = currentWord;
}

window.onload = function(){
    resetGame();
}

document.onkeyup = function(event){
    var letters_guessed = event.key.toLowerCase();

    for(var i = 0; i <computerGuess.length; i++){
        if (computerGuess[i] === letters_guessed){
            currentWord = currentWord.split('');
            currentWord[i] = letters_guessed;
            currentWord = currentWord.join("");
            randomWordText.textContent = currentWord;
        }
    }

    if(ABC.indexOf(letters_guessed)> -1){
        if(userGuess.indexOf(letters_guessed) > -1){
            alert( "Please choose a different letter" );
        }else {
            beginText.textContent = "";
            userGuess.push(letters_guessed);
            lettersGuessedText.textContent = userGuess.join();
            guessRemainText.textContent = 16 - userGuess.length;

            if(currentWord === computerGuess && userGuess.length< 16){
                wins++;
                winsText.textContent = wins;
                alert("Yay! You won!");
                resetGame();
            } else if (currentWord != computerGuess && userGuess.length===16){
                losses++;
                lossesText.textContent = losses;
                alert ("Oh no! I'm sorry, the computer guessed: " + computerGuess);
                resetGame();
            }

        }

        


    } else if (letters_guessed != "f5"){
        alert("please choose a valid key between A-Z")
    }
}