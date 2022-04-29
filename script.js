const optionBtn = document.querySelectorAll('div.optionBtn button')
const playerPoints = document.querySelector('#playerScore')
const playerOpt = document.querySelector('#playerOpt')
const compOpt = document.querySelector('#compOpt')
const computerPoints = document.querySelector('#computerScore')
const roundRestults = document.querySelector('#roundRestults')
const resetBtn = document.querySelector('#reset')
// let playerSelection
// let computerSelection
let playerScore = 0
let compScore = 0

//reset button to refresh page
resetBtn.addEventListener('click', () => location.reload())

//player pick
optionBtn.forEach(option => option.addEventListener('click', (e) => {
  playerSelection = e.target.id
  playerOpt.textContent = playerSelection
  computerPlay()
  playRound(playerSelection, computerPlay())
}))

//computer play
function computerPlay() {
  const selectionList = ["rock", "paper", "scissors"];
  computerSelection = selectionList[Math.floor(Math.random() * selectionList.length)];
  compOpt.textContent = computerSelection
  return computerSelection
}

//play round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
      playerPoints.textContent = ++playerScore
      computerPoints.textContent = ++compScore
      roundRestults.textContent = "Tie!"
  } else if (computerSelection === "rock" && playerSelection === "paper" || computerSelection === "paper" && playerSelection === "scissors" || computerSelection === "scissors" && playerSelection ===    "rock") {
    playerPoints.textContent = ++playerScore
    roundRestults.textContent = "You win!"
  } else {
    computerPoints.textContent = ++compScore
    roundRestults.textContent = "You lose!"
  }
  checkWinner()
}

//check who get 5 points First
function checkWinner() {
  if (compScore === 5 || playerScore === 5) {
    if (playerScore > compScore) {
      roundRestults.textContent = "You win"
      roundRestults.style.color = 'green'
    } else if (compScore > playerScore) {
      roundRestults.textContent = "Computer win"
      roundRestults.style.color = 'red'
    } else {
      roundRestults.textContent = "Draw"
      roundRestults.style.color = 'blue'
    }
    endGame()
  }
}

//end game function
function endGame() {
  document.getElementById('rock').disabled = true
  document.getElementById('paper').disabled = true
  document.getElementById('scissors').disabled = true
}
