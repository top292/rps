
const computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;

game();

function playRound(playerSelection, computerSelection) {
    // your code here!

    if (playerSelection === computerSelection) {
        return "Your pick: " + playerSelection + "---" + "Computer pick: " + computerSelection + "\nDraw";
    } else if ((playerSelection === "paper" && computerSelection === "rock") ||
                (playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        return "Your pick: " + playerSelection + "---" + "Computer pick: " + computerSelection + "\nPlayer win";
     } else {
         computerScore++;
         return "Your pick: " + playerSelection + "---" + "Computer pick: " + computerSelection + "\nComputer win";
     }
  }


function computerPlay() {
    //generate random 0, 1, 2
    const rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random() * 3)];

//   console.log(rps[Math.floor(Math.random() * 3)]);
}


function game() {
    for (let i = 0; i < 5; i++) {
        //repeat game 5 times
        let playerSelection = prompt("what your choice (rock/paper/scissors): ");
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            alert("Enter rock, paper, scissors only");
        } else {
            let result = playRound(playerSelection, computerPlay())
            console.log(result);
            // alert(result);
        }
    }
    console.log("your score: " +playerScore);
    console.log("computer score: " +computerScore);
    if (playerScore > computerScore) {
        console.log("Player win");
    } else if (computerScore > playerScore) {
        console.log("Computer win");
    } else {
        console.log("Draw");
    }
}
