
function events(rpsChoiceList,rounds,humanScore,computerScore){
rpsChoiceList.addEventListener("click",(event)=>{
    
    let target = event.target
    let outcome = []
    if (target.id && (target.id === ROCK ||target.id ===  PAPER ||target.id === SCISSORS )) {
        //playgame isn't modifying the variables outside it's scope, it's now returning an array
        //0 = rounds, 1 = humanScore, 2 = computerScore 
        outcome = playGame(target.id,rounds,humanScore,computerScore)
        rounds = outcome[0]
        humanScore = outcome[1]
        computerScore = outcome[2] 
        soreBoardMessage(rounds,humanScore,computerScore) 
        if (rounds === 5) {
            appendRoundHistory(humanScore,computerScore);
            rounds = 0;
            computerScore = 0;
            humanScore = 0;
        }
    }

})
}

function soreBoardMessage(rounds,humanScore,computerScore) {
    const scoreBoard = document.querySelector("#score-board")
    scoreBoard.textContent = "ROUND " + rounds + " PLAYER SCORE: " +humanScore + " COMPUTER SCORE: " + computerScore
}

function appendRoundHistory(humanScore,computerScore) {
    const roundHistory = document.querySelector("#round-history")
    const winnerOfTheSet = document.createElement("div")
    winnerOfTheSet.textContent = "Set:  " + (roundHistory.childElementCount + 1) + " final score! computer: " + computerScore + "   human:" + humanScore;
    roundHistory.appendChild(winnerOfTheSet)
}