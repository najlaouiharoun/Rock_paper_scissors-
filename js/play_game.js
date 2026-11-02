
function playGame(humanSelection,rounds,humanScore,computerScore) {
        computerSelection = getComputerChoice();
        let winner = playRound(humanSelection,computerSelection)
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
    rounds++        
    //hotfix. the values aren't being modified after leaving the function scope
    return [rounds,humanScore,computerScore]

}
