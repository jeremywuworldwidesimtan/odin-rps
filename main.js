/* Rock paper scissors
* Problem: Implement a rock-paper-scissors game in JavaScript
* Rule: Scissors beats paper, Paper beats rock, Rock beats scissors
* Plan: Develop a console implementation of RPS
*/

// Implement game mechanics
function playRound(playerChoice, computerChoice){
    let result, resultText;
    // rps mechanics
    if (playerChoice === computerChoice) {
        resultText = `Game tied between ${inputFormatting(playerChoice)} and ${inputFormatting(computerChoice)}`;
        result = null;
    } else if ((playerChoice === "s" && computerChoice === "p") ||
                (playerChoice === "p" && computerChoice === "r") ||
                (playerChoice === "r" && computerChoice === "s")) {
        resultText = `You Win! ${inputFormatting(playerChoice)} beats ${inputFormatting(computerChoice)}`;
        result = true; // True means player has won
    } else {
        resultText = `You Lose! ${inputFormatting(playerChoice)} beats ${inputFormatting(computerChoice)}`;
        result = false;
    }

    return [result, resultText];
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

function parseInput(input) {
    switch (input.trim().toLowerCase()) {
        case "rock":
            return "r"; //rock

        case "paper":
            return "p"; //paper
            
        case "scissors":
            return "s";// scissors
    }
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
*  PLY R t | l | w 
*  PLY P w | t | l 
*  PLY S l | w | t 
*/

/*
console.log(playRound("r", "r")); //t
console.log(playRound("r", "p")); //l
console.log(playRound("r", "s")); //w
console.log(playRound("p", "r")); //w
console.log(playRound("p", "p")); //t
console.log(playRound("p", "s")); //l
console.log(playRound("s", "r")); //l
console.log(playRound("s", "p")); //w
console.log(playRound("s", "s")); //t
*/

// Working as intended, fine, continue with next step of the plan

// Implement player controls
function getPlayerChoice(){
    let choice = "";
    choice = prompt("Enter a value (r/rock, p/paper, s/scissors): ");
    console.log(choice.trim().toLowerCase())

    switch (choice.trim().toLowerCase()) {
        case "r":
        case "rock":
            return "r"; //rock

        case "p":
        case "paper":
            return "p"; //paper
            
        case "s":
        case "scissors":
            return "s";// scissors

        default:
            return "e";
    }
}

// Implement game session
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 5;
    for (let i = 0; i < rounds; i++) {
        let playerChoice = getPlayerChoice();
        let [roundResult, resultText] = playRound(playerChoice, getComputerChoice());
        if (roundResult === true) {
            playerScore++;
        } else if (roundResult === false) {
            computerScore++;
        } else {
            playerScore++;
            computerScore++;
        }

        console.log(`Round ${i+1}: ${resultText} (${playerScore}-${computerScore})`);
    }

    // After 5 rounds
    if (playerScore > computerScore) {
        console.log(`Player wins (${playerScore}-${computerScore})`);
    } else if (playerScore < computerScore) {
        console.log(`Computer wins (${playerScore}-${computerScore})`);
    } else {
        console.log(`Game draws (${playerScore}-${computerScore})`);
    }
}

