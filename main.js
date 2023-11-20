/* Rock paper scissors
* Problem: Implement a rock-paper-scissors game in JavaScript
* Rule: Scissors beats paper, Paper beats rock, Rock beats scissors
* Plan: Develop a console implementation of RPS
*/

// Implement game mechanics
function playRound(playerChoice, computerChoice){
    result = "";
    // rps mechanics
    if (playerChoice === computerChoice) {
        result = "Game tied.";
    } else if ((playerChoice === "s" && computerChoice === "p") ||
                (playerChoice === "p" && computerChoice === "r") ||
                (playerChoice === "r" && computerChoice === "s")) {
        result = `You Win! ${inputFormatting(playerChoice)} beats ${inputFormatting(playerChoice)}`;
    } else {
        result = `You Lose! ${inputFormatting(playerChoice)} beats ${inputFormatting(playerChoice)}`;
    }

    return result;
}

function inputFormatting(input) {
    // for formatting e.g.: "r" becomes "Rock"
    let formattedInput = "";
    if (input === "r") {
        formattedInput = "Rock";
    } else if (input === "p") {
        formattedInput = "Paper";
    } else if (input === "s") {
        formattedInput = "Scissors";
    } else {
        formattedInput = "Error";
    }

    return formattedInput;
}

// Implement computer enemy
function getComputerChoice(){
    let roll = Math.floor(Math.random()*3 + 1);
    let choice = ""
    switch (roll) {
        case 1:
            choice = "r"; //rock
            break;

        case 2:
            choice = "p"; //paper
            break;
            
        case 3:
            choice = "s";// scissors
            break;

        default:
            choice = "e";
            break;
    }

    return choice;
}

// Debug game mechanics, make sure the RPS game mechanics is working correctly before proceed with next steps
// T: Tied, W: Player win, L: Computer win
// Expectations
/* COM     R | P | S
*  PLY R | T | L | W 
*  PLY P | W | T | L 
*  PLY S | L | W | T 
*  Reality (please test using code below then report the results back here)
*  COM   R | P | S
*  PLY R   |   |   
*  PLY P   |   |   
*  PLY S   |   |   
*/
console.log(playRound("r", "r"));

// Implement player controls


// Implement game session
