function computerPlay() {
    let rock = "rock";
    let paper = "paper";
    let sissors = "sissors";

    let temp = 0;

    temp = Math.floor(Math.random() * 3) + 1;
    console.log(temp);

    if(temp === 1) {
        return rock;
    }else if(temp === 2) {
        return paper;
    }else {
        return sissors;
    }

}

function playRound(playerSection, computerSection) {
    let pcWin = `You lose ${computerSection} beats ${playerSection}`;
    let playerWin = `You win ${playerSection} beats ${computerSection}`;
    let draw = "Draw"

    if(computerSection === "rock" && playerSection === "sissors") {
        return pcWin;
    }else if (computerSection === "paper" && playerSection === "rock") {
        return pcWin;
    }else if(computerSection === "sissors" && playerSection === "paper") {
        return pcWin;
    }else if(computerSection === playerSection) {
        return draw;
    }else {
        return playerWin;
    }
}

function game() {
    let pcScore = 0;
    let playerScore = 0;
    let score = '';

    for(let i=0; i<5; i++) {
        playRound();

        if(playRound().includes("win")) {
            playerScore++;
        }else {
            pcScore++;
        }
        console.log(score = `Player ${playerScore} : ${pcScore} PC`);
    }
    return console.log(score);
}

const playerSection = prompt("Choose your destiny! \n ROCK/PAPER/SISSORS ??").toLowerCase();
const computerSection = computerPlay();
game();


