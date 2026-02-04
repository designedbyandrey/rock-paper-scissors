console.log("Hello World");

function getComputerChoice() {
    let randomNumber= Math.random()
    console.log (randomNumber);
    
    if (randomNumber > 0 && randomNumber <= 0.33) {
        return "Rock"
    } else if (randomNumber > 0.33 && randomNumber <= 0.66){
        return "Paper"
    } else {
        return "Scissors"
    }

}
console.log(getComputerChoice());
