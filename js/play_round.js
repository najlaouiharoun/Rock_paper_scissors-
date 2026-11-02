function playRound(humanChoice, ComputerChoice) {
    humanChoice = humanChoice.toLowerCase()
    //process ties
    if (humanChoice === ComputerChoice) {
        return tieMessage(humanChoice)     
    }
    //go case by case to find the winner and loser
    switch (humanChoice) {

        case "rock":
            switch (ComputerChoice) {
                case "scissors":
                    return winMessage(humanChoice,ComputerChoice)
                    break;
            
                default:
                    return loseMessage(humanChoice,ComputerChoice)

                    break;
            }
            
            break;
        case "paper":
            switch (ComputerChoice) {
                case "rock":
                    return winMessage(humanChoice,ComputerChoice)

                    break;
                
                default:
                    return loseMessage(humanChoice,ComputerChoice)
                    break;
            }
            
            break;
        case "scissors":
            switch (ComputerChoice) {
                case "paper":
                    return winMessage(humanChoice,ComputerChoice)

                    break;
            
                default:
                    return loseMessage(humanChoice,ComputerChoice)
                     
                    break;
            }
            
            break;
    }
}

function winMessage(humanChoice,ComputerChoice) {
    const winMessage = document.querySelector("#win-message");
    winMessage.textContent = 'you win!' + humanChoice + " beats " + ComputerChoice ; 
    return "human"
}

function loseMessage(humanChoice,ComputerChoice) {
    const winMessage = document.querySelector("#win-message");
    winMessage.textContent='you lose!' + ComputerChoice + " beats " + humanChoice;  
    return "computer"
}
function tieMessage(humanChoice) {
    const winMessage = document.querySelector("#win-message");
    winMessage.textContent="it's a tie! both players chose " + humanChoice
    return "tie"
}