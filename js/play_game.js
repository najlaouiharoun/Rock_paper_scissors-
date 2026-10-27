//create initial scoreboard to keep track of wins and losses
// take a user input and save it in variable humanChoice
//randomize the computers choice using the rand function and save it in variable ComputerChoice 
//compare the choice and display the winner
//update the scoreboard for the winner
//ask if user wants to play another round, if yes: go again, if no, exit
let humanScore = 0
let computerScore = 0 
let round = 5
function playGame() {
    //call the playRound X amount of rounds and then increment the appropriate score
    for (let i = 1; i <= round; i++) {
        let winner = playRound(getHumanChoice(),getComputerChoice())
        switch (winner) {
            case "computer":
                computerScore++
                break;
            case "human":
                humanScore++
                break;
            default:
                
                break;
        }
    }
    //show the final score:
    console.log("final score! computer: " + computerScore + "   human:" + humanScore);
    
}
playGame()