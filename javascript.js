// function exaple() {

// }                           //ARE THE SAME!!!

// const exaple = () => {

// }
let playerScore = 0;
let pcScore = 0;

function computerPlay() {
    const temp = ["rock", "paper", "sissors"];
    const number = Math.floor(Math.random() * 3);
    const result = temp[number];

    return result;
}

const computerSection = computerPlay(); // string what pc plays
// const playRound = (playerSection, computerSection) => {}; // SAME.

function playRound(playerSection, computerSection) {

    if((playerSection === "paper" && computerSection === "rock") ||
        (playerSection === "rock" && computerSection === "sissors") ||
        (playerSection === "sissors" && computerSection === "paper")) {
            playerScore++;
            return "Player Win";
        }else if(playerSection === computerSection) {
            return "Draw";
        }else {
            pcScore++;
            return "PC Win"
        }
}

const game = () => {
    let score = '';
    for(let i=0; i<5;i++) {
        const playerSection = prompt("Paper, Rock or Sissors").toLowerCase();
        const computerSection = computerPlay(); // string what pc plays
        playRound(playerSection, computerSection);
        console.log(score = `Player ${playerScore} : ${pcScore} PC`);
    }
    if(playerScore>pcScore) {
        return "Player Wins"
    }else if(playerScore<pcScore) {
        return "PC Wins"
    }else {
        return "draw";
    }
}

//game();
console.log(game());