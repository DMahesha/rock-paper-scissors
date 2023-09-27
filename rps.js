let pChoice = 0
let playerWins = 0
let computerWins = 0
let ties = 0
let gameOver = document.getElementById("game-over")
let playerWonRounds = document.getElementById('playerWon')
let computerWonRounds = document.getElementById('computerWon')
let tieWonRounds = document.getElementById('tieWon')

function oneRound (pSelection, cSelection) {
    if (cSelection == pSelection) {
        return (0)
    } else if (cSelection == "rock" && pSelection == "paper" || cSelection == "paper" && pSelection == "scissors" || cSelection == "scissors" && pSelection == "rock") {
        return (1)
    } else {
        return (2)
    }
}

function matchReset() {
    playerWonRounds.textContent = playerWins = computerWonRounds.textContent = computerWins = tieWonRounds.textContent = ties = 0
    pRock.style.cssText = pPaper.style.cssText = pScissors.style.cssText = 'background-color:white'
}

function ComputerChoice() {
    const list = ["rock", "paper", "scissors"]
    const choice = Math.floor(Math.random()*3)

    document.getElementById('cChoice').textContent = list[choice]
    
    let roundWinner = oneRound(list[choice], pChoice)
    if (roundWinner == 1) {
        playerWins += 1
        playerWonRounds.textContent = playerWins
    } else if (roundWinner == 2) {
        computerWins += 1
        computerWonRounds.textContent = computerWins
    } else {
        ties += 1
        tieWonRounds.textContent = ties
    }

    if (playerWins == 5) {
        gameOver.textContent = "The player has won the match"
        matchReset()
        } else if (computerWins == 5) {
        gameOver.textContent = "The computer has won the match"
        matchReset()
    }
}

function rockSelected() {
    pRock.style.cssText = 'background-color:blue'
    pPaper.style.cssText = 'background-color:white'
    pScissors.style.cssText = 'background-color:white'
    pChoice = 'rock'
    ComputerChoice()
}

function paperSelected() {
    pRock.style.cssText = 'background-color:white'
    pPaper.style.cssText = 'background-color:blue'
    pScissors.style.cssText = 'background-color:white'
    pChoice = 'paper'
    ComputerChoice()
}

function scissorsSelected() {
    pRock.style.cssText = 'background-color:white'
    pPaper.style.cssText = 'background-color:white'
    pScissors.style.cssText = 'background-color:blue'

    pChoice = 'scissors'
    ComputerChoice()
}

const pRock = document.querySelector('#rock')
pRock.onclick = () => rockSelected()

const pPaper = document.querySelector('#paper')
pPaper.onclick = () => paperSelected()

const pScissors = document.querySelector('#scissors')
pScissors.onclick = () => scissorsSelected()
