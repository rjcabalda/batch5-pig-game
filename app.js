/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

const tValue = 100; // This is the winning score.
let randomNum, randomNum1, randomNum2, activePlayer, scores, isGamePlaying;

let playerOne = document.querySelector("#name-0");
let playerTwo = document.querySelector("#name-1");
let newGameBtn = document.querySelector(".btn-new");
let rollBtn = document.querySelector(".btn-roll");
let holdBtn = document.querySelector(".btn-hold");
let setValueBtn = document.querySelector(".btn-set-value");
let dice1 = document.querySelector(".die1");
let dice2 = document.querySelector(".die2");
let currentScore0 = document.getElementById("current-0");
let currentScore1 = document.getElementById("current-1");
let globalScore0 = document.getElementById("score-0");
let globalScore1 = document.getElementById("score-1");
let player0Panel = document.querySelector(".player-0-panel");
let player1Panel = document.querySelector(".player-1-panel");
let currentScoreSum;

/*-------------------------------------FUNCTIONS----------------------------------------------------*/

const startGame = () => {
  dice1.style.display = "none"; // hide both dice
  dice2.style.display = "none"; // hide both dice
  isGamePlaying = true;
  scores = [0, 0];
  activePlayer = 0;
  currentScoreSum = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  globalScore0.textContent = 0;
  globalScore1.textContent = 0;
  player0Panel.classList.remove("active"); //removes the 'active' word for css selection purposes
  player1Panel.classList.remove("active");
  player0Panel.classList.add("active");
  player0Panel.classList.remove("winner");
  player1Panel.classList.remove("winner");
  playerOne.textContent = "Player 1";
  playerTwo.textContent = "Player 2";
};

function rollDice() {
  console.log("Rio function");
  randomNum1 = Math.floor(Math.random() * 6) + 1;
  randomNum2 = Math.floor(Math.random() * 6) + 1;
  randomNum = randomNum1 + randomNum2;
  dice1.style.display = "block";
  dice2.style.display = "block";

  switch (randomNum1) {
    case 1:
      dice1.src = "dice-1.png";
      break;
    case 2:
      dice1.src = "dice-2.png";
      break;
    case 3:
      dice1.src = "dice-3.png";
      break;
    case 4:
      dice1.src = "dice-4.png";
      break;
    case 5:
      dice1.src = "dice-5.png";
      break;
    case 6:
      dice1.src = "dice-6.png";
      break;
  }
  switch (randomNum2) {
    case 1:
      dice2.src = "dice-1.png";
      break;
    case 2:
      dice2.src = "dice-2.png";
      break;
    case 3:
      dice2.src = "dice-3.png";
      break;
    case 4:
      dice2.src = "dice-4.png";
      break;
    case 5:
      dice2.src = "dice-5.png";
      break;
    case 6:
      dice2.src = "dice-6.png";
      break;
  }
}

/* Taking Turns */
const changeRoles = () => {
  if (activePlayer === 1) {
    activePlayer = 0;
    player1Panel.classList.toggle("active");
    player0Panel.classList.toggle("active");
    currentScore1.textContent = 0;
  } else {
    activePlayer = 1;
    player0Panel.classList.toggle("active");
    player1Panel.classList.toggle("active");
    currentScore0.textContent = 0;
  }
  dice1.style.display = "none";
  dice2.style.display = "none";
};

startGame();

rollBtn.addEventListener("click", () => {
  if (isGamePlaying) {
    rollDice();
    console.log(randomNum1, randomNum2);
    if (randomNum1 === 1 || randomNum2 === 1) {
      changeRoles();
      currentScoreSum = 0;
    } else {
      currentScoreSum += randomNum;
      activePlayer
        ? (currentScore1.textContent = currentScoreSum)
        : (currentScore0.textContent = currentScoreSum);
    }

  } else {
    alert('Someone already won.\nPlease click New Game to start.')
  }
});

holdBtn.addEventListener("click", () => {
  if (isGamePlaying) {
    scores[activePlayer] += currentScoreSum;
    if (activePlayer === 1) globalScore1.textContent = scores[activePlayer];
    else globalScore0.textContent = scores[activePlayer];
    currentScoreSum = 0;

    if (scores[activePlayer] >= tValue) {
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document.getElementById("name-" + activePlayer).textContent = "WINNER !";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      dice1.style.display = "none";
      dice2.style.display = "none";
      isGamePlaying = false;
    } else changeRoles();
  }
  else {
    alert('Someone already won.\nPlease click New Game to start.')
  }
});

newGameBtn.addEventListener("click", () => {
  startGame();
});
