const winSchemes = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

let gameStatus = ["", "", "", "", "", "", "", "", ""];

// Wait for the DOM to be loaded, then start game
document.addEventListener("DOMContentLoaded", startGame())

/**
 * Start / Restart game and set all parameters to start
 */
function startGame() {

  //Add Eventlistener for fields on gameboard
  let fields = document.getElementsByClassName("fields");

  for (let field of fields) {
    
  }
}

/**
 * When a field is clicked, get player from DOM and mark the field
 * with the corresponding letter 
 */
function displayMove(fieldId) {
  currentPlayer = document.getElementById("currentPlayer").innerText;
  document.getElementById(fieldId).innerText = currentPlayer;
}

/**
 * Get Player from DOM and switch it. Display the new player
 */
function switchPlayer() {
  currentPlayer = document.getElementById("currentPlayer").innerText;
  if (currentPlayer = "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  };
  document.getElementById("currentPlayer").innerText = currentPlayer;
}

/**
 * Check if a player have three markings in a row and increment the winners
 * wonlist. If no "" is left in the status array, display draw (no winner)
 */
function checkWin() {

}

/**
 * Increment won-counter of X
 */
function incXWon() {
  let count = parseInt(document.getElementById("xWon").innerText);
  count++;
  document.getElementById("xWon").innerText = toString(count); 
}

/**
 * Increment won-counter of O
 */
function incOWon() {
  let count = parseInt(document.getElementById("oWon").innerText);
  count++;
  document.getElementById("oWon").innerText = toString(count); 
}

/**
 * Set xWon- and oWon-counter to zero and start game
 */
function restart() {

  document.getElementById("xWon").innerText = "0";
  document.getElementById("oWon").innerText = "0";

  startGame();
}