const computerChoice = getComputerChoice();
const playerChoice = "Rock";

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