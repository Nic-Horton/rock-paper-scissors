function getComputerChoice() {
    const choiceArray = [
        "Rock", 
        "Paper", 
        "Scissors"
    ];
    const computerSelection = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    
    if ((player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper")) {
        
        const result = `You win! ${playerSelection} beats ${computerSelection}`;
        return result;

    } else if ((computer === "rock" && player === "scissors") || (computer === "paper" && player === "rock") || (computer === "scissors" && player === "paper")) {
        
        const result = `You lose... ${computerSelection} beats ${playerSelection}`;
        return result;

    } else {

        const result = "It's a tie."
        return result;

    }
}
    
function game() {
    
    let playerScore = 0;
    let pcScore = 0;
    for ( let i = 0; i < 5; i++) {
        const playerSelection = prompt("What will it be... Rock, Paper, or Scissors");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        if (playRound(playerSelection,computerSelection) === `You win! ${playerSelection} beats ${computerSelection}`) {
            playerScore++;
            console.log(`player points: ${playerScore} computer points: ${pcScore}`);
        } else if (playRound(playerSelection,computerSelection) === `You lose... ${computerSelection} beats ${playerSelection}`) {
            pcScore++;
            console.log(`player points: ${playerScore} computer points: ${pcScore}`);
       } else {
        console.log("Redo that Round");
        i--
       }
    }
    if (playerScore > pcScore) {
            console.log("The winner is the player");
        } else if (playerScore < pcScore) {
            console.log("The winner is the computer");
        } else {
            console.log("It is a tie.")
        }
}