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
    const p = document.createElement('p');
    if((playerSection === "paper" && computerSection === "rock") ||
        (playerSection === "rock" && computerSection === "sissors") ||
        (playerSection === "sissors" && computerSection === "paper")) {
            playerScore++;
            
            p.innerText = `It's a WIN for Player by ${playerSection}`;
            result.appendChild(p);

            return "Player Win";
        }else if(playerSection === computerSection) {
            p.innerText = `It's a DRAW by ${playerSection}`;
            result.appendChild(p);
            return "Draw";
        }else {
            pcScore++;
            p.innerText = `It's a win for PC by ${computerSection}`;
            result.appendChild(p);
            return "PC Win"
        }
        
}

// const game = () => {
//     let score = '';
//     for(let i=0; i<5;i++) {
//         const playerSection = prompt("Paper, Rock or Sissors").toLowerCase();
//         const computerSection = computerPlay(); // string what pc plays
//         playRound(playerSection, computerSection);
//         console.log(score = `Player ${playerScore} : ${pcScore} PC`);
//     }
//     if(playerScore>pcScore) {
//         return "Player Wins"
//     }else if(playerScore<pcScore) {
//         return "PC Wins"
//     }else {
//         return "draw";
//     }
// }

//game();
//console.log(game());

const whoWin = (playerScore, pcScore) => {
    const h2 = document.createElement('h2');
    if(playerScore === 5) {
        h2.innerText = `You win ${playerScore} : ${pcScore}`;
    }else if(pcScore === 5) {
        const h2 = document.createElement('h2');
    }
    result.append(h2);
}

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const sissorsBtn = document.querySelector('.sissors');
const result = document.querySelector('.result');
const playerLiveScore = document.querySelector('.playerLiveScore');
const pcLiveScore = document.querySelector('.pcLiveScore');

const liveScore = (playerScore, pcScore) => { 
    playerLiveScore.innerText = `Player ${playerScore} :`;
    pcLiveScore.innerText = ` ${pcScore} PC`;
}

rockBtn.addEventListener('click', () => {
    const computerSection = computerPlay();
    const playerSection = 'rock';
    playRound(playerSection, computerSection);
    liveScore(playerScore, pcScore);
    whoWin(playerScore, pcScore);
})

paperBtn.addEventListener('click', () => {
    const computerSection = computerPlay();
    const playerSection = 'paper';
    playRound(playerSection, computerSection);
    liveScore(playerScore, pcScore);
    whoWin(playerScore, pcScore);
})

sissorsBtn.addEventListener('click', () => {
    const computerSection = computerPlay();
    const playerSection = 'sissors';
    playRound(playerSection, computerSection);
    liveScore(playerScore, pcScore);
    whoWin(playerScore, pcScore);
})

