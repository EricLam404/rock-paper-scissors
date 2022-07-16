var playerScore = 0;
var computerScore = 0;
var scoreboard = document.createElement('div');
const scoreContainer = document.querySelector("h1");

scoreboard.textContent = "Player: " + playerScore + " vs Computer: " + computerScore;
scoreContainer.appendChild(scoreboard)

let computerPlay = () =>{
    const choice = ["rock", "paper", "scissor"];

    return choice[Math.floor(Math.random() * 3)];
}

let playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection ? playerSelection.toLowerCase() : null; 
    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            return "You tied! Rock ties with Rock" 
        }
        if(computerSelection == "paper"){
            computerScore++;
            return "You lost! Paper beats Rock" 
        }
        if(computerSelection == "scissor"){
            playerScore++;
            return "You won! Rock beats Scissor" 
        }     
    }
    if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            playerScore++;
            return "You won! Paper beats Rock" 
        }
        if(computerSelection == "paper"){
            return "You tied! Paper ties with paper" 
        }
        if(computerSelection == "scissor"){
            computerScore++;
            return "You lost! Scissor beats Paper" 
        }     
    }
    if(playerSelection == "scissor"){
        if(computerSelection == "rock"){
            computerScore++;
            return "You lost! Rock beats Scissor" 
        }
        if(computerSelection == "paper"){
            playerScore++;
            return "You won! Scissor beats Paper" 
        }
        if(computerSelection == "scissor"){
            return "You tied! Scissor ties with Scissor" 
        }     
    }
    return "That is not a valid choice!"
}

const buttons = document.querySelectorAll("button");
var count = 0;

buttons.forEach(button => button.addEventListener('click', playerSelection))

function playerSelection(e) {
    const container = document.querySelector(".container")
    if(count < 5){
        count++;
        let playerSelection = this.className;
        const computerSelection = computerPlay();
        const winner = playRound(playerSelection, computerSelection);
        scoreboard.textContent = "Player: " + playerScore + " vs Computer: " + computerScore;
        const div = document.createElement('div');
        div.textContent = winner;
        const vs = document.createElement('div');
        vs.textContent = playerSelection + " vs " + computerSelection;
        container.appendChild(vs);
        container.appendChild(div);
    } else if(count <= 5){
        count++
        const win = document.createElement('div');
        var winner = "";
        if(playerScore > computerScore)
            winner = "You won!"
        else
            winner = "The computer won"
        win.textContent = winner;
        container.appendChild(win);
    }
    
}

/*
for(let i = 0; i < 5; i++){
    let playerSelection = prompt("Rock Paper or Scissors?")
    const computerSelection = computerPlay();
    console.log(playerSelection + " vs " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}
*/