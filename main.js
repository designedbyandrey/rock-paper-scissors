

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
//console.log(getComputerChoice());

function getHumanChoice() {
    return prompt("Your choice here")
}

//console.log(getHumanChoice())



function playGame() {
    let humanScore = 0
    let computerScore = 0

    for (let i = 0; i < 5 ; i++){
    function playRound(humanChoice, computerChoice) {
        let formattedHuman = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    
        if (computerChoice === "Rock" && formattedHuman === "Paper" || computerChoice === "Paper" && formattedHuman === "Scissors" ||         
        computerChoice === "Scissors" && formattedHuman === "Rock")  {
        console.log(`You win ${formattedHuman} beats ${computerChoice}`);
        return humanScore ++;
        
    
    }   else if (computerChoice === "Rock" && formattedHuman === "Scissors" || computerChoice === "Paper" && formattedHuman === "Rock" || computerChoice === "Scissors" && formattedHuman === "Paper") { 
        console.log(`You lose ${computerChoice} beats ${formattedHuman}`);
        return computerScore ++;
    }   else { 
        console.log("Its a draw");
        
    }}




const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanScore, computerScore);
}
if (humanScore > computerScore) {
   console.log("You win the whole game") 
} else if (humanScore < computerScore){
    console.log('You lose the whole game')
} else {
    console.log ("The game is a draw")
}
}

playGame()
