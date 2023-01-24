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
        result = "\r\n" + `You win! ${playerSelection} beats ${computer}` + "\r\n" + "\r\n" + "Player Score: " + playerScore + "\r\n" + "Computer Score: " + pcScore;
        
        if (playerScore == 5) {
            result +=( "\r\n" + "\r\n" + "The winner is the player!" + "\r\n" + "\r\n" + "REFRESH TO PLAY AGAIN");
            disableButton(); //Disables buttons to stop further input
        }

    } else if ((computer === "Rock" && player === "Scissors") || (computer === "Paper" && player === "Rock") || (computer === "Scissors" && player === "Paper")) {
        
        pcScore++;
        result = "\r\n" + `You lose... ${computer} beats ${playerSelection}` + "\r\n" + "\r\n" + "Player Score: " + playerScore + "\r\n" + "Computer Score: " + pcScore;
        
        
        if (pcScore == 5) {
            result += "\r\n" + "\r\n" + ("The winner is the computer :'(" + "\r\n" + "\r\n" + "REFRESH TO PLAY AGAIN");
            disableButton();
        }

    } else {

        result = "\r\n" + "It's a tie." + "\r\n" + "\r\n" +"Player Score: " + playerScore + "\r\n" + "Computer Score: " + pcScore;

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
        textLine.textContent = playRound(button.id);
    });
});




