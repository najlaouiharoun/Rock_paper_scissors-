function playRound(humanChoice, ComputerChoice) {
    humanChoice = humanChoice.toLowerCase()
    //process ties
    if (humanChoice === ComputerChoice) {
        return tieMessage(humanChoice)     
    }
    //go case by case to find the winner and loser
    switch (humanChoice) {

        case ROCK:
            switch (ComputerChoice) {
                case SCISSORS:
                    return winMessage(humanChoice,ComputerChoice)
                    break;
            
                default:
                    return loseMessage(humanChoice,ComputerChoice)

                    break;
            }
            
            break;
        case PAPER:
            switch (ComputerChoice) {
                case ROCK:
                    return winMessage(humanChoice,ComputerChoice)

                    break;
                
                default:
                    return loseMessage(humanChoice,ComputerChoice)
                    break;
            }
            
            break;
        case SCISSORS:
            switch (ComputerChoice) {
                case PAPER:
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
    return HUMAN
}

function loseMessage(humanChoice,ComputerChoice) {
    const winMessage = document.querySelector("#win-message");
    winMessage.textContent='you lose!' + ComputerChoice + " beats " + humanChoice;  
    return COMPUTER
}
function tieMessage(humanChoice) {
    const winMessage = document.querySelector("#win-message");
    winMessage.textContent="it's a tie! both players chose " + humanChoice
    return TIE
}