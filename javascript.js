let humanScore = 0;
let computerScore = 0;
const log = document.querySelector("#game-history");
const scoreboard = document.getElementById("scoreboard");
let resetFlag = false;

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

function playRound(humanChoice, computerChoice) {
    if(resetFlag) {
        resetScoreboard();
        resetFlag = false;
    }
    if (humanChoice === "paper" && computerChoice == "scissor" || humanChoice === "rock" && computerChoice === "paper" || humanChoice === "scissor" && computerChoice === "rock") {
        computerScore++;
        updateLog("You lose! " + computerChoice + " beats " + humanChoice);
    }
    else if (computerChoice === "paper" && humanChoice == "scissor" || computerChoice === "rock" && humanChoice === "paper" || computerChoice === "scissor" && humanChoice === "rock") {
        humanScore++;
        updateLog("You win! " + humanChoice + " beats " + computerChoice);
    }
    else {
        updateLog("Draw!")
    }
    updateScoreboard();
    checkScore();
}

function updateScoreboard() {
    scoreboard.textContent = "Human: " + humanScore + " | Computer: " + computerScore;
}

function resetScoreboard() {
    computerScore = 0;
    humanScore = 0;
    updateScoreboard();
}

function updateLog(text) {
    const newLog = document.createElement("p");
    newLog.textContent = text;
    log.appendChild(newLog);
}

function checkScore() {
    if (humanScore < 5 & computerScore < 5) {
        return
    }
    if (humanScore > computerScore) {
        scoreboard.textContent = ("Human wins with a score of " + humanScore);
    }
    else {
        scoreboard.textContent = ("Computer wins with a score of " + computerScore);
    }
    resetFlag = true;
}


const btn = document.querySelector("button");
const userChoice = addEventListener("click", (e) => {
    let userSelection = ""
    switch (e.target.id) {
        case ("rock"):
            userSelection = "rock";
            break;
        case ("paper"):
            userSelection = "paper";
            break;
        case ("scissor"):
            userSelection = "scissor";
            break;
    }
    playRound(userSelection, getComputerChoice());
})