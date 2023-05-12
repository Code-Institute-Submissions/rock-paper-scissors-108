// Codes are from stackoverflow and amended

const $selectBtn = document.querySelectorAll("[data-selector]");
const $displayUserScore = document.querySelector("#user-score");
const $displayComputerScore = document.querySelector("#computer-score");
const $showScore = document.querySelector("h5");
const $theWinnerIs = document.querySelector('#result-winner');
const $refreshBtnContainer = document.querySelector('#refresh-button-container');
const $icons = ["💎", "🧻", "✂️"];


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click",(e) => {
userChoice = e.currentTarget.id;
userChoiceDisplay.innerHTML = userChoice;
generateComputerChoice();
getResult();

}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) +1;

    if (randomNumber === 1) {
        computerChoice = "rock";
    }
    if (randomNumber === 2) {
       computerChoice = "scissors";
    }
    if (randomNumber === 3) {
        computerChoice = "paper";
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}
function getResult() {
    if (computerChoice === userChoice) {
        result = "It is a draw!";

    }
    if (computerChoice === "rock" && userChoice === "paper") {
        result = "You winn!";
    }

if (computerChoice === "rock" && userChoice === "scissors") {
result = "You loose!";
}

if (computerChoice === "paper" && userChoice === "scissors") {
result = "You winn!";
}

if (computerChoice === "paper" && userChoice === "rock") {
result = "You loose!";
}

if (computerChoice === "scissors" && userChoice === "paper") {
    result = "You loose!";
}
if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You winn!";
}
resultDisplay.innerHTML = result;
}
