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

let gameStatus = [ "", "", "", "", "", "", "", "", "" ];

// Wait for the DOM to be loaded, then start game
document.addEventListener("DOMContentLoaded", startGame)

/**
 * Start / Restart game and set all parameters to start
 */
function startGame() {

  let fields = document.getElementsByClassName("fields");
  let rButton = document.getElementById("resetButton");

  //Add Eventlistener for fields on gameboard

  for (let field of fields) {
    let fieldId = field.getAttribute("id");
    field.addEventListener("click", function() {

      let currentPlayer = document.getElementById("currentPlayer").innerText;
      
      if (gameStatus[fieldId] === "") {
        document.getElementById(fieldId).innerText = currentPlayer;
        gameStatus[fieldId] = currentPlayer;
        switchPlayer(currentPlayer); 
      } else {
        console.log(gameStatus[fieldId]);
        alert("Box allready played!")
      };

      checkWin();
    });
   }

  rButton.addEventListener("click", function() {

    document.getElementById("xWon").innerText = "0";
    document.getElementById("oWon").innerText = "0";
  
    resetGameboard();
  });
}

/**
 * Reset Gameboard and -status, First move X
 */
function resetGameboard() {

  let fields = document.getElementsByClassName("fields");
  
  for (let field of fields){
    field.innerText = "";
  }

  gameStatus = [ "", "", "", "", "", "", "", "", "" ];

  document.getElementById("currentPlayer").innerText = "X";
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

    console.log(gameStatus);

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
        };
        resetGameboard();
        break;
      };

      if(!gameStatus.includes("")) {
        alert("Draw... No winner!");
        resetGameboard();
      }
    };
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