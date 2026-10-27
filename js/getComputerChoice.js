function getComputerChoice() {
    //get a random number from 1 to 3 using the rand function and save it in variable ComputerChoice 
    ComputerChoice = rand()
    //return a string: rock, paper, or scissors depending on the computers choice
    switch (ComputerChoice) {
        case 1:
            return "rock"
            break;
        case 2:
            return "paper"
            
            break;
        case 3:
            return "scissors"
            
            break;
    }
    return "unknown error encountered with computer choice " + ComputerChoice
}