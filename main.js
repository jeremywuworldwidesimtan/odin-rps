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
        resultText = `You Lose! ${inputFormatting(computerChoice)} beats ${inputFormatting(playerChoice)}`;
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
function getPlayerChoice(chInput){
    let choice = chInput;

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

// Check if anyone has scored a certain number of points or not
// then stop the game if someone has gotten a specified score
function checkScore(playerScore, computerScore, winScore) {
    if (playerScore >= winScore || computerScore >= winScore) {
        let winnerText = '';
        // announce the winner
        if (playerScore >= winScore) {
            winnerText = `${playerName} wins (${playerScore}-${computerScore})`;
        } else if (computerScore >= winScore) {
            winnerText = `Computer wins (${playerScore}-${computerScore})`;
        }
        // then hide the selections button and display the winner and the play button
        resultsDisplay.textContent = winnerText;
        play.style.display = 'block';
        usernameInput.style.display = 'block';
        gameDiv.style.display = 'none';
    }
}

// Debug
function debug () {
    gameDiv.style.display = 'flex';
    const allP = document.querySelectorAll('p');
    allP.forEach((p) => {
        if (!p.textContent) {
            p.textContent = "deebug!";
        }
    });
}

// The main game function

let playerScore;
let computerScore;
let round;
let selection;
let playerName;

const gameDiv = document.querySelector("#game");
gameDiv.style.display = 'none';
gameHistory = document.querySelector("#gameHistory");
const resultsDisplay = document.querySelector("#results");
const pScoreDisplay = document.querySelector("#playerScore");
const cScoreDisplay = document.querySelector("#computerScore");
const play = document.querySelector('#play');
const usernameInput = document.querySelector("#name");
const nameDisplay = document.querySelector("#playerName")

play.addEventListener('click', function(e) {
    // hide the play button and display the selections
    play.style.display = 'none';
    usernameInput.style.display = 'none';
    gameDiv.style.display = 'flex';
    // reset the score
    playerScore = 0;
    computerScore = 0;
    round = 0;
    pScoreDisplay.textContent = playerScore;
    cScoreDisplay.textContent = computerScore;
    resultsDisplay.textContent = '';
    playerName = usernameInput.value;
    if (!usernameInput.value) playerName = "Player";
    nameDisplay.textContent = playerName;
});


const buttons = document.querySelectorAll(".selection");
// Define button functions
buttons.forEach((button) => {
    // When the user clicks a button, the button will pass the selection to the game
    button.addEventListener('click', function(e) {
        round++;
        let playerChoice = '';
        selection = e.target.id;
        playerChoice = getPlayerChoice(selection);
        
        let [roundResult, resultText] = playRound(playerChoice, getComputerChoice());
        if (roundResult === true) {
            playerScore++;
        } else if (roundResult === false) {
            computerScore++;
        }
        
        gameHistory.textContent = `(Round ${round}) ${resultText} (${playerScore} - ${computerScore})`;
        pScoreDisplay.textContent = playerScore;
        cScoreDisplay.textContent = computerScore;
        
        checkScore(playerScore, computerScore, 5);
    });
});