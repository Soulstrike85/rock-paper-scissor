const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();

function getComputerChoice() {
    const randomComp = Math.floor(Math.random() * 3);
    if (randomComp === 0) {
        return "Stone";
    } else if (randomComp === 1) {
        return "Scissor";            
    } else {
        return "Paper";
    }
}
function getPlayerChoice() {
    const playerInput = prompt("Choose your Weapon! Will it be Rock, Paper or Scissor?").toLowerCase();
    console.log(playerInput);
    if (playerInput === "rock") {
        return "Rock";
    } else if (playerInput === "scissor") {
        return "Scissor";
    } else if(playerInput === "paper") {
        return "Paper";
    } else {
        return "Choose Rock, Paper or Scissor only!"
    }
}