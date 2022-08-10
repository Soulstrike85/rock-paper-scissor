const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();
let roundWon = playRound(computerChoice, playerChoice);

function getComputerChoice() { 
    const randomComp = Math.floor(Math.random() * 3); // get random number between 0-2, each number equals one choice
    if (randomComp === 0) {
        return "rock";
    } else if (randomComp === 1) {
        return "scissor";            
    } else {
        return "paper";
    }
}
function getPlayerChoice() {
    const playerInput = prompt("Choose your Weapon! Will it be Rock, Paper or Scissor?").toLowerCase(); // user input
    if (playerInput === "rock") { // compare user input and return choice
        return "rock";
    } else if (playerInput === "scissor") {
        return "scissor";
    } else if(playerInput === "paper") {
        return "paper";
    } else {
        return "Choose Rock, Paper or Scissor only!" // Error - faulty input
    }
}
function playRound(computerChoice, playerChoice) {
    if (computerChoice === "rock") {
        switch (playerChoice) {
            case "paper":
                return "You win! Paper beats rock.";
            case "scissor":
                return "You lose! rock crushes Scissor";
            case "rock":
            default:
                return "Draw! Try again.";
        }
    } else if (computerChoice === "paper") {
        switch (playerChoice) {
            case "scissor":
                return "You win! Scissor cuts Paper.";
            case "rock":
                return "You lose! Paper wraps Rock.";
            case "paper":
            default: 
                return "Draw! Try again.";
        }
    } else if (computerChoice === "scissor") {
        switch (playerChoice) {
            case "rock":
                return "You win! Rock crushes Scissor.";
            case "paper":
                return "You lose! Scissor cuts paper.";
            case "scissor":
            default: 
                return "Draw! Try again.";
        }
    }
}
console.log(computerChoice);
console.log(playerChoice);
console.log(roundWon);