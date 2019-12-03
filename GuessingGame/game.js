// program data:

// prompt user for their guess 

// if correct: let the user know they won

// if incorrect: let the user know

// program data:
// program data:
var number = Math.floor(Math.random() * 100);
var guess;
var limit = 10;
var won =  false;
var guesses = [];

// game control loop - iterates for each try
for (var i = 1; i <= limit; i++){
    // prompt user for their guess
    do{
        guess = parseInt(prompt("Guess a number"));
    } while(isNaN(guess) || isPreviousGuess(guess));
    
    // if correct: let the user know they won
    if(guess == number){
        document.write("Correct! You won.");
        won = true;
        break;
    }
    // if incorrect: add number to guesses array
    else if (guess > number){
        guesses[i] = guess;
        alert("incorrect, too high. \nYou have guessed: " + guesses.toString() + "\nTries remaining: " + (limit - i));
    }
    else if (guess < number){
        guesses[i] = guess;
        alert("incorrect, too low. \nYou have guessed: " + guesses.toString() + "\nTries remaining: " + (limit - i));
    }
}

// if the user ran out of tries, let them know the game is over
if(!won){
    document.write("Sorry, you ran out of tries. Game over.  The correct number was: " + number);
}

function isPreviousGuess(){
    for(var i = 1; i < guesses.length; i++){
        if(guesses[i] == guess){
            return true;
        }
    }
    return false;
}