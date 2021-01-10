/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let btnRoll = document.getElementById('btn-roll');
let diceImage = document.getElementById('currentDice');
let randomIndex;

function rollDice() {
    randomIndex = Math.floor(Math.random() * 6)
    switch (randomIndex) {
        case 0:
            diceImage.src = 'dice-1.png'
            break;
        case 1:
            diceImage.src = 'dice-2.png'
            break;
        case 2:
            diceImage.src = 'dice-3.png'
            break;
        case 3:
            diceImage.src = 'dice-4.png'
            break;
        case 4:
            diceImage.src = 'dice-5.png'
            break;
        case 5:
            diceImage.src = 'dice-6.png'
            break;
    }
}

btnRoll.addEventListener('click', () => {
    rollDice();
});