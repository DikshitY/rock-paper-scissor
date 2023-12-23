const choices = document.querySelectorAll(".choice")
const userScore = document.getElementById("user-score")
const compScore =  document.getElementById("comp-score")
const winMessage = document.getElementById("win-message")
const resetBtn = document.getElementById("reset-btn")

let userWinScore = 0;
let compWinScore = 0;

const compChoice = () => {
    const arr = ["rock", "paper", "scissors"]
    let ranIndex = Math.floor(Math.random() * 3)
    return arr[ranIndex]
}

const drawGame = () => {
    winMessage.innerText = "Draw Match! Play again."
    winMessage.style.backgroundColor = "rgb(4, 4, 101)";
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        winMessage.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`
        winMessage.style.backgroundColor = "green";
        userWinScore ++;
        userScore.innerText = userWinScore;
    }else{
        winMessage.innerText = `Computer Wins! Comp's ${computerChoice} beats your ${userChoice}`
        winMessage.style.backgroundColor =" red";
        compWinScore ++;
        compScore.innerText = compWinScore;
    }
}

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id")
        let computerChoice = compChoice()
        playGame(userChoice, computerChoice);
    })
})

const playGame = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = computerChoice === "scissors" ? true : false;
        }else if(userChoice === "paper"){
            userWin = computerChoice === "rock" ? true : false;
        }else{
            userWin = computerChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, computerChoice)
    }
}

resetBtn.addEventListener("click" , () => {
    userScore.innerText = 0;
    compScore.innerText = 0;
    winMessage.innerText = "Play Now !"
    winMessage.style.backgroundColor = "rgb(4, 4, 101)";
})