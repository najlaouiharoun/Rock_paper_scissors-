
function playGame(humanSelection,rounds,humanScore,computerScore) {
        computerSelection = getComputerChoice();
        let winner = playRound(humanSelection,computerSelection)
        switch (winner) {
            case COMPUTER:
                computerScore++
                break;
            case HUMAN:
                humanScore++
                break;
            default:
                
                break;
        }
    rounds++        
    //hotfix. the values aren't being modified after leaving the function scope
    return [rounds,humanScore,computerScore]

}
