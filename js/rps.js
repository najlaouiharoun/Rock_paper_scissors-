//create initial scoreboard to keep track of wins and losses
// take a user input and save it in variable humanChoice
//randomize the computers choice using the rand function and save it in variable ComputerChoice 
//compare the choice and display the winner
//update the scoreboard for the winner
//ask if user wants to play another round, if yes: go again, if no, exit
let humanScore = 0
let conputerScore = 0 

function rps() {
    console.log(playRound(getHumanChoice(),getComputerChoice()));
}
rps()