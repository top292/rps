const userChoiceDisplay = document.getElementById("user-choice")
const computerChoiceDisplay = document.getElementById("computer-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice
let computerChoice
let result 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.textContent = userChoice[0].toUpperCase() + userChoice.substring(1)    
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const choiceList = ["rock", "paper", "scissors"]
    computerChoice = choiceList[Math.floor(Math.random() * 3)]
    computerChoiceDisplay.textContent = computerChoice[0].toUpperCase() + computerChoice.substring(1)
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "Draw"
    } else if (computerChoice === "rock" && userChoice === "paper" || computerChoice === "paper" && userChoice === "scissors" || computerChoice === "scissors" && userChoice === "rock") {        
        result ="You win"         
    } else {        
        result = "You lose"        
    }    
    resultDisplay.textContent = result   
}