// Wait for the DOM to be loaded, then start game
document.addEventListener("DOMContentLoaded", startGame);

/**
 * Start / Restart game and set all parameters to start
 */
function startGame() {

  let fields = document.getElementsByClassName("fields");
  let rButton = document.getElementById("resetButton");

  // This variable was inspired by BroCode
  let gameStatus = [ "", "", "", "", "", "", "", "", "" ];

  //Add Eventlistener for fields on gameboard, check for allready played fields and if there are a winner
  for (let field of fields) {
    let fieldId = field.getAttribute("id");
    field.addEventListener("click", () => {
      gameStatus = markField(gameStatus, fieldId) 
    } );
  }

  // Add eventlistener for Resetbutton
  rButton.addEventListener("click", () => {

    document.getElementById("xWon").innerText = "0";
    document.getElementById("oWon").innerText = "0";

    gameStatus = resetGameboard(gameStatus);
  });
}

function markField(gameStatus, fieldId) {

  let currentPlayer = document.getElementById("currentPlayer").innerText;

  if (gameStatus[fieldId] === "") {
    document.getElementById(fieldId).innerText = currentPlayer;
    gameStatus[fieldId] = currentPlayer;
    switchPlayer(currentPlayer);
  } else {
    alert("Box allready played!");
  }

  gameStatus = checkWin(gameStatus);

  return gameStatus
}

/**
 * Reset Gameboard and -status, First move X
 */
function resetGameboard(gameStatus) {

  let fields = document.getElementsByClassName("fields");

  for (let field of fields){
    field.innerText = "";
  }

  gameStatus = [ "", "", "", "", "", "", "", "", "" ];

  document.getElementById("currentPlayer").innerText = "X";

  return gameStatus
}

/**
 * Get Player from DOM and switch it. Display the new player
 */
function switchPlayer(cPlayer) {

  let newcPlayer = "";

  if (cPlayer === "X") {
    (newcPlayer = "O");
  } else {
    (newcPlayer = "X");
  }

  document.getElementById("currentPlayer").innerText = newcPlayer;
}

/**
 * Check if a player have three markings in a row and increment the winners
 * wonlist. If no "" is left in the status array, display draw (no winner)
 * inspired and adapted from BroCode
 */
function checkWin(gameStatus) {

  // This const was inspired by BroCode
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

  for (let i=0; i<8; i++) {
    let winScheme = winSchemes[i];
    let field1 = gameStatus[winScheme[0]];
    let field2 = gameStatus[winScheme[1]];
    let field3 = gameStatus[winScheme[2]];

    if ((field1 === "") || (field2 === "") || (field3 === "")) {
      continue;
      }

    if ((field1 === field2) && (field2 === field3)) {

      if (field1 === "X") {
        incXWon();
      } else {
        incOWon();
      }
      gameStatus = resetGameboard(gameStatus);
      break;
      }

    if(!gameStatus.includes("")) {
      alert("Draw... No winner!");
      gameStatus = resetGameboard(gameStatus);
    }
  }

  return gameStatus
}

/**
 * Increment won-counter of X and alert X won
 */
function incXWon() {
  let count = parseInt(document.getElementById("xWon").innerText);
  count++;
  document.getElementById("xWon").innerText = count.toString();
  alert("X won!");
}

/**
 * Increment won-counter of O and alert O won
 */
function incOWon() {
  let count = parseInt(document.getElementById("oWon").innerText);
  count++;
  document.getElementById("oWon").innerText = count.toString();
  alert("O won!");
}