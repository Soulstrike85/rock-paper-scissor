let computerChoice = "";            
let playerChoice = "Choose Rock";   // set playerChoice to Choose Rock to initialize do...while loop for the first time
let roundWon = "";                  
function getComputerChoice() { 
    const randomComp = Math.floor(Math.random() * 3); // get random number between 0-2, each number equals one choice
    if (randomComp === 0) {
        return computerChoice = "rock";
    } else if (randomComp === 1) {
        return computerChoice = "scissor";            
    } else {
        return computerChoice = "paper";
    }
}
/*function getPlayerChoice() {
    const playerInput = prompt("Choose your Weapon! Will it be Rock, Paper or Scissor?").toLowerCase();     // user input
    if (playerInput === "rock") {                                // compare user input and return choice
    return playerChoice = "rock";
    } else if (playerInput === "scissor") {
    return playerChoice = "scissor";
    } else if(playerInput === "paper") {
    return playerChoice = "paper";
    } else {
    return playerChoice = "Choose Rock, Paper or Scissor only!" // Error - faulty input
    } 
}*/

function playRound(computerChoice, playerChoice) { // compares both choices and returns the result in roundWon
    if (computerChoice === "rock") {
        switch (playerChoice) {
            case "paper":
                return roundWon = "You win! Paper beats rock.";
            case "scissor":
                return roundWon = "You lose! rock crushes Scissor";
            case "rock":
            default:
                return roundWon = "Draw! Try again.";
        }
    } else if (computerChoice === "paper") {
        switch (playerChoice) {
            case "scissor":
                return roundWon = "You win! Scissor cuts Paper.";
            case "rock":
                return roundWon = "You lose! Paper wraps Rock.";
            case "paper":
            default: 
                return roundWon = "Draw! Try again.";
        }
    } else if (computerChoice === "scissor") {
        switch (playerChoice) {
            case "rock":
                return roundWon = "You win! Rock crushes Scissor.";
            case "paper":
                return roundWon = "You lose! Scissor cuts paper.";
            case "scissor":
            default: 
                return roundWon = "Draw! Try again.";
        }
    }
}
/* function playGame() {                                       // game loop - counts wins, loses and draws - and displays it
    let compWins = 0;                                       // set computer wins to zero
    let playerWins = 0;                                     // set player wins to zero
    let draw = 0;                                           // set draw matches to zero
    for (let i = 0; i < 5; i++) {                           // loop the game 5 times
        getComputerChoice();
        do {                                                // loops until user inputs allowed content (rock, paper, scissor)
        getPlayerChoice();
        } while (playerChoice.startsWith("Choose Rock"));   // breaks loop if rock, paper or scissor is entered
        playRound(computerChoice, playerChoice);            
        if (roundWon.startsWith("You win!")) {
            playerWins++;
        } else if (roundWon.startsWith("You lose!")) {
            compWins++;
        } else {
            draw++;
        }
        console.log("Won: " + playerWins + " Lost: " + compWins + " Draw: " + draw);
    }
} */

// select buttons and attach eventListener
const choice = document.querySelectorAll('button');
choice.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(getComputerChoice(), playerChoice = button.className);
        console.log(roundWon);
        }); 

}); 



