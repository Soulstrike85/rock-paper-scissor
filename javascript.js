let computerChoice = "";            
let playerChoice = "";
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

let wins = document.getElementById("won");
wins.textContent += "Wins: 0";
let lost = document.getElementById("lost");
lost.textContent += "Lost: 0";
let draw = document.getElementById("draw");
draw.textContent += "Draw: 0";

// select buttons and attach eventListener
const choice = document.querySelectorAll("button");

let win_count = 0;
let lost_count = 0;
let draw_count = 0;
choice.forEach((button) => {
    button.addEventListener("click", () => {
            playRound(getComputerChoice(), playerChoice = button.className);
            if (roundWon.startsWith("You win!")) {
                win_count += 1;
                wins.textContent = (`Wins: ${win_count}`)
            } else if (roundWon.startsWith("You lose!")) {
                lost_count += 1;
                lost.textContent = (`Lost: ${lost_count}`)
            } else {
                draw_count += 1;
                draw.textContent = (`Draw: ${draw_count}`)
            }
            game_ends(win_count, lost_count);    
        });
});

const result_text = document.getElementById("result_text");
function game_ends(wins, lost) {
    const close_btn = document.getElementById("result_close_btn");
    if (wins === 5) {
        result_text.textContent = ("You won");
        result_screen.style.display="block";
        close_btn.onclick = () => {
            restartGame();
         }

    } else if (lost === 5) {
        result_text.textContent = ("You lost");
        result_screen.style.display="block";
        close_btn.onclick = () => {
            restartGame();   
        }
    }
}

function restartGame() {
    win_count = 0;
    wins.textContent = "Wins: 0";
    lost_count = 0;
    lost.textContent = "Lost: 0";
    draw_count = 0;
    draw.textContent = "Draw: 0";
    result_screen.style.display="none";
}

let result_screen = document.getElementById("result_modal");