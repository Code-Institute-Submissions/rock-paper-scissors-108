// Codes are from Ania Kubow´s tutorial video and amended

  const computerChoiceDisplay = document.getElementById("computerchoice");
  const userChoiceDisplay = document.getElementById("userchoice");
  const resultDisplay = document.getElementById("result");
  const possibleChoices = document.querySelectorAll("button");
  let userChoice;
  let computerChoice;
  let result;
  
  
  possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click",(e) => {
  userChoice = e.target.id;
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
  
  