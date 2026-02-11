let humanScore = 0
let computerScore = 0
let rounds = 0



let btnRock = document.querySelector("#rock")
let btnPaper = document.querySelector('#paper')
let btnSci = document.querySelector ('#sci')
let resultField = document.querySelector("#results")
let humanScoreOutput = document.querySelector("#human-score")
let computerScoreOutput = document.querySelector("#computer-score")
let endResult = document.querySelector("#end-result")



function playGame() {
  

    btnRock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound("Rock", computerSelection);

})

btnPaper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound("Paper", computerSelection);

})

btnSci.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound("Scissors", computerSelection);

})



function getComputerChoice() {
    let randomNumber= Math.random()
    // console.log (randomNumber);
    
    if (randomNumber > 0 && randomNumber <= 0.33) {
        return "Rock"
    } else if (randomNumber > 0.33 && randomNumber <= 0.66){
        return "Paper"
    } else {
        return "Scissors"
    }

}




function playRound(humanChoice, computerChoice) {
    let formattedHuman = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    
    if (computerChoice === "Rock" && formattedHuman === "Paper" || computerChoice === "Paper" && formattedHuman === "Scissors" ||         
        computerChoice === "Scissors" && formattedHuman === "Rock")  {
        resultField.textContent = `You win ${formattedHuman} beats ${computerChoice}`;
        humanScore += 1;
        humanScoreOutput.textContent = humanScore.toString();
        rounds +=1;
    
    } else if (computerChoice === "Rock" && formattedHuman === "Scissors" || computerChoice === "Paper" && formattedHuman === "Rock" || computerChoice === "Scissors" && formattedHuman === "Paper") { 
        resultField.textContent = `You lose ${computerChoice} beats ${formattedHuman}`;
        computerScore +=1
        computerScoreOutput.textContent = computerScore.toString();
        rounds +=1;

    } else { 
        resultField.textContent = "Its a draw"
        rounds +=1;
    } 

    if (rounds >= 5){
         if (humanScore > computerScore) {
        alert (`You win the whole game: Your score ${humanScore} computer score ${computerScore}`);
        } else if (humanScore < computerScore) {
            alert (`You loose the whole game: Your score ${humanScore} computer score ${computerScore}`);
        } else {
            alert (`The game is a draw: Your score ${humanScore} computer score ${computerScore}`);
        }
        resetGame()
        

    }

}}





playGame()


function resetGame () {
    humanScore = 0;
    computerScore = 0;
    rounds = 0;
    humanScoreOutput.textContent = "0";
    computerScoreOutput.textContent = "0";
    resultField.textContent = "New Game! Make your move.";

}



