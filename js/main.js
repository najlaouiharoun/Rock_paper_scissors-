function main() {
    const rpsChoiceList = document.querySelector("#rps-choice-list")
    let humanScore = 0
    let computerScore = 0 
    let rounds = 0
    events(rpsChoiceList,rounds,humanScore,computerScore)
}

main()