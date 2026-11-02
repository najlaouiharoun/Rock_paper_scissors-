
function events(rpsChoiceList,rounds,humanScore,computerScore){
rpsChoiceList.addEventListener("click",(event)=>{
    
    let target = event.target
    let outcome = []
    if (target.id && (target.id == "rock" ||target.id == "paper" ||target.id == "scissors" )) {
        //playgame isn't modifying the variables outside it's scope, it's now returning an array
        //0 = rounds, 1 = humanScore, 2 = computerScore 
        outcome = playGame(target.id,rounds,humanScore,computerScore)
        rounds = outcome[0]
        humanScore = outcome[1]
        computerScore = outcome[2] 
        if (rounds === 5) {
            console.log("final score! computer: " + computerScore + "   human:" + humanScore);
            rounds = 0;
            computerScore = 0;
            humanScore = 0;
        }
    }

})
}
