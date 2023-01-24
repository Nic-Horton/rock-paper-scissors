let playerScore = 0;
let pcScore = 0;


function getComputerChoice() { //Randomly generates computer choice
    const choiceArray = [
        "Rock", 
        "Paper", 
        "Scissors"
    ];
    const computerSelection = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return computerSelection;
}

function disableButton() { 
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

function playRound(playerSelection) {
    
    const player = playerSelection;
    const computer = getComputerChoice();
    let result ='';
    
    
    if ((player === "Rock" && computer === "Scissors") || (player === "Paper" && computer === "Rock") || (player === "Scissors" && computer === "Paper")) {
        
        playerScore++;
        result = `<br>You win! ${playerSelection} beats ${computer}` + "<br><br>Player Score: " + playerScore + "<br>Computer Score: " + pcScore;
        
        if (playerScore == 5) {
            result +=("<br><br>The winner is the player!" + "<br><br> REFRESH TO PLAY AGAIN");
            disableButton(); //Disables buttons to stop further input
        }

    } else if ((computer === "Rock" && player === "Scissors") || (computer === "Paper" && player === "Rock") || (computer === "Scissors" && player === "Paper")) {
        
        pcScore++;
        result = `<br>You lose... ${computer} beats ${playerSelection}` + "<br><br>Player Score: " + playerScore + "<br>Computer Score: " + pcScore;
        
        
        if (pcScore == 5) {
            result += ("<br><br>The winner is the computer :(" + "<br><br> REFRESH TO PLAY AGAIN");
            disableButton();
        }

    } else {

        result = "<br>It's a tie." + "<br><br>Player Score: " + playerScore + "<br>Computer Score: " + pcScore;

    }
    return (result);
}
    

const container = document.querySelector('#buttons');
const textLine = document.querySelector('#textLine');

const rockBtn = document.createElement('button');
rockBtn.id = 'Rock';
rockBtn.textContent = 'Rock';
container.appendChild(rockBtn);

const paperBtn = document.createElement('button');
paperBtn.id = 'Paper';
paperBtn.textContent = 'Paper';
container.appendChild(paperBtn);

const scissorsBtn = document.createElement('button');
scissorsBtn.id = 'Scissors'
scissorsBtn.textContent = 'Scissors';
container.appendChild(scissorsBtn);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        textLine.innerHTML = playRound(button.id);
    });
});




