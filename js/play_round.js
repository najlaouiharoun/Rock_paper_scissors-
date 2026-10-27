//get the player choice, get the computer choice
// compare them, if they're the same, print a  a tie message in console log
// if the human won, display "winner" string, if the human lost, display  "loser" string else display "tie" string
//return the round score, 0 if it's a tie, -1 if it's a loss, and +1 if it's a victory

function playRound(humanChoice, ComputerChoice) {
    humanChoice = humanChoice.toLowerCase()
    //process ties
    if (humanChoice ===ComputerChoice) {
        console.log("it's a tie! both players chose " + humanChoice);
        return 0       
    }
    //go case by case to find the winner and loser
    switch (humanChoice) {
        
        case "rock":
            switch (ComputerChoice) {
                case "scissors":
                    winMessage(humanChoice,ComputerChoice)
                    return 1
                    break;
            
                default:
                    loseMessage(humanChoice,ComputerChoice)
                    return -1

                    break;
            }
            
            break;
        case "paper":
            switch (ComputerChoice) {
                case "rock":
                    winMessage(humanChoice,ComputerChoice)
                    return 1

                    break;
                
                default:
                    loseMessage(humanChoice,ComputerChoice)
                    return -1
                    break;
            }
            
            break;
        case "scissors":
            switch (ComputerChoice) {
                case "paper":
                    winMessage(humanChoice,ComputerChoice)
                    return 1

                    break;
            
                default:
                    loseMessage(humanChoice,ComputerChoice)
                    return -1
                    break;
            }
            
            break;
    }
}

//display the victory or defeat message

function winMessage(humanChoice,ComputerChoice) {
    console.log('you win!' + humanChoice + " beats " + ComputerChoice );
    
}
function loseMessage(humanChoice,ComputerChoice) {
    console.log('you lose!' + ComputerChoice + " beats " + humanChoice );
    
}