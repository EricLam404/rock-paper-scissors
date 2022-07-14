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
            return "You lost! Paper beats Rock" 
        }
        if(computerSelection == "scissor"){
            return "You won! Rock beats Scissor" 
        }     
    }
    if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            return "You won! Paper beats Rock" 
        }
        if(computerSelection == "paper"){
            return "You tied! Paper ties with paper" 
        }
        if(computerSelection == "scissor"){
            return "You lost! Scissor beats Paper" 
        }     
    }
    if(playerSelection == "scissor"){
        if(computerSelection == "rock"){
            return "You lost! Rock beats Scissor" 
        }
        if(computerSelection == "paper"){
            return "You won! Scissor beats Paper" 
        }
        if(computerSelection == "scissor"){
            return "You tied! Scissor ties with Scissor" 
        }     
    }
    return "That is not a valid choice!"
}

for(let i = 0; i < 5; i++){
    let playerSelection = prompt("Rock Paper or Scissors?")
    const computerSelection = computerPlay();
    console.log(playerSelection + " vs " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}