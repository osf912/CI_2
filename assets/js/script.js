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
document.addEventListener("DOMContentLoaded", startGame)

/**
 * Start / Restart game and set all parameters to start
 */
function startGame() {

  //Add Eventlistener for fields on gameboard
  let fields = document.getElementsByClassName("fields");
  let rButton = document.getElementById("resetButton");

  for (let field of fields) {
    let fieldId = field.getAttribute("id");
    field.addEventListener("click", function() {

      let currentPlayer = document.getElementById("currentPlayer").innerText;
      document.getElementById(fieldId).innerText = currentPlayer;

      gameStatus[fieldId] = currentPlayer;

      incOWon();
      incXWon();
      switchPlayer(currentPlayer); 
    });
   }

  rButton.addEventListener("click", function() {

    console.log("Restart");

    document.getElementById("xWon").innerText = "0";
    document.getElementById("oWon").innerText = "0";
  
    let fields = document.getElementsByClassName("field");
    for (let field of fields){
      field.innerText = "";
    }
  
    gameStatus = ["", "", "", "", "", "", "", "", ""];
  });
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
  };
  
  document.getElementById("currentPlayer").innerText = newcPlayer;
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
  document.getElementById("xWon").innerText = count.toString(); 
}

/**
 * Increment won-counter of O
 */
function incOWon() {
  let count = parseInt(document.getElementById("oWon").innerText);
  count++;
  document.getElementById("oWon").innerText = count.toString(); 
}