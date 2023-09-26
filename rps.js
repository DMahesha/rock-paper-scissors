function ComputerChoice() {
    const list = ["rock", "paper", "scissors"]
    const choice = Math.floor(Math.random()*3)
    return list[choice];
}

function PlayerChoice() {
    let PlayerSelection = prompt("Pick rock, paper or scissors: ")
    return PlayerSelection.toLowerCase(); 
}

function oneRound (pSelection, cSelection) {
    if (cSelection == pSelection) {
        return (0)
    } else if (cSelection == "rock" && pSelection == "paper" || cSelection == "paper" && pSelection == "scissors" || cSelection == "scissors" && pSelection == "rock") {
        return (1)
    } else {
        return (2)
    }
}

let playerWins = 0
let computerWins = 0
while (playerWins < 5 && computerWins < 5) {
    let roundWinner = oneRound(ComputerChoice(), PlayerChoice())
    if (roundWinner == 1) {
        playerWins += 1
        console.log("Player wins this round")
        console.log(roundWinner, playerWins, computerWins)
    } else if (roundWinner == 2) {
        computerWins += 1
        console.log("Computer wins this round")
        console.log(roundWinner, playerWins, computerWins)
    } else {
        console.log("This round is a tie")
        console.log(roundWinner, playerWins, computerWins)
    }
}
if (playerWins == 5) {
    console.log("The player wins this match")
} else if (computerWins == 5) {
    console.log("The computer wins this match")
}

