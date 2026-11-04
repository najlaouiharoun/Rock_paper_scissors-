function recolorBackground(result) {
    bodyElement = document.querySelector("body");
    roundHistory = document.querySelector(".round-history")
    switch (result) {
        case TIE:
            bodyElement.style.backgroundColor = "rgb(137, 56, 16)";

            break;
        case HUMAN:
            bodyElement.style.backgroundColor = "rgb(27, 94, 0)";

            break;
        case COMPUTER:
            bodyElement.style.backgroundColor = "rgb(137, 16, 16)";

            break;
        case LOSE:
            bodyElement.style.backgroundColor = "rgb(0, 0, 0)";
            roundHistory.style.color = "white"

            break;
        case WIN:
            bodyElement.style.backgroundColor = "rgb(116, 95, 0)";

            break;
    
        default:
            break;
    }
}
