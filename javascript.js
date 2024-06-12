let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return "rock";
    }
    else if (computerChoice === 2) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

function getHumanChoice() {
    let userChoice = prompt("Choose between rock, paper or scissor");
    userChoice = userChoice.trim();
    userChoice = userChoice.toLowerCase();
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissor") {
        return userChoice;
    } else {
        return "rock";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "paper" && computerChoice == "scissor" || humanChoice === "rock" && computerChoice === "paper" || humanChoice === "scissor" && computerChoice === "rock") {
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + humanChoice);

    }
    else if (computerChoice === "paper" && humanChoice == "scissor" || computerChoice === "rock" && humanChoice === "paper" || computerChoice === "scissor" && humanChoice === "rock") {
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice);
    }
}

function playGame() {
    for (let x = 0; x < 5; x++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore) {
        console.log("Human wins with a score of " + humanScore);
    }
    else {
        console.log("Computer wins with a score of " + computerScore);
    }
}

playGame()