// Global variables to store values

var myOutputValue = "";

var round = 1;
var gameMode = "player1Rolls";

// Global variables to prevent typos

var player1Rolls = "";
var player2Rolls = "";
var player1ChoosingOrder = "player 1 choosing order";
var player2ChoosingOrder = "player 2 choosing order";
var player1CurrentScore = "";
var player2CurrentScore = "";
var player1OverallScore = 0;
var player2OverallScore = 0;

// Generate random dice rolls

var dice1 = Math.ceil(Math.random() * 6).toString();
var dice2 = Math.ceil(Math.random() * 6).toString();
var dice3 = Math.ceil(Math.random() * 6).toString();
var dice4 = Math.ceil(Math.random() * 6).toString();
console.log(`player1Rolls: ${dice1} and ${dice2}`);
console.log(`player2Rolls: ${dice3} and ${dice4}`);

var main = function (input) {
  // Telling Player 1 his dice rolls, and to choose

  if (gameMode == "player1Rolls") {
    gameMode = "player1ChoosingOrder";
    myOutputValue = `Player 1, you have rolled ${dice1} and ${dice2}. Type 1 if you want ${
      dice1 + dice2
    }. Type 2 if you want ${dice2 + dice1}.`;
    console.log(myOutputValue);
    return myOutputValue;
  }

  // Player 1 chooses, and gets current score
  if (gameMode == "player1ChoosingOrder") {
    gameMode = "player2Rolls";
    if (input == "1") {
      player1CurrentScore = Number(dice1 + dice2);
      console.log(player1CurrentScore);
      myOutputValue = `Your current score is ${player1CurrentScore}. It is Player 2's turn to roll. Click to continue.`;
      return myOutputValue;
    }
    if (input == "2") {
      player1CurrentScore = Number(dice2 + dice1);
      console.log(player1CurrentScore);
      myOutputValue = `Your current score is ${player1CurrentScore}. It is Player 2's turn to roll.Click to continue.`;
      return myOutputValue;
    }
  }

  // Telling Player 2 his dice rolls, and to choose

  if (gameMode == "player2Rolls") {
    gameMode = "player2ChoosingOrder";
    myOutputValue = `Player 2, you have rolled ${dice3} and ${dice4}. Type 1 if you want ${
      dice3 + dice4
    }. Type 2 if you want ${dice4 + dice3}.`;
    console.log(myOutputValue);
    return myOutputValue;
  }

  // Player 2 chooses, and gets current score

  if (gameMode == "player2ChoosingOrder") {
    gameMode = "end of round";
    if (input == "1") {
      player2CurrentScore = Number(dice3 + dice4);
      console.log(player2CurrentScore);
      myOutputValue = `Your current score is ${player2CurrentScore}. Click to see who wins.`;
      return myOutputValue;
    }
    if (input == "2") {
      player2CurrentScore = Number(dice4 + dice3);
      console.log(player2CurrentScore);
      myOutputValue = `Your current score is ${player2CurrentScore}. Click to see who wins.`;
      return myOutputValue;
    }
  }

  if (gameMode == "end of round") {
    // Determining who wins
    gameMode = "reset game";

    //
    if (player1CurrentScore > player2CurrentScore) {
      // scoreboard

      player1OverallScore =
        Number(player1OverallScore) + Number(player1CurrentScore);
      player2OverallScore =
        Number(player2OverallScore) + Number(player2CurrentScore);
      if (player1OverallScore > player2OverallScore) {
        myOutputValue = `Player 1 wins. <li>Player 1: ${player1OverallScore}.</li> <li>Player 2: ${player2OverallScore}</li> Click to play again.`;
        return myOutputValue;
      }
      if (player2OverallScore > player1OverallScore) {
        myOutputValue = `Player 2 wins. <li>Player 2: ${player2OverallScore}</li> <li>Player 1: ${player1OverallScore}</li>.Click to play again.`;
        return myOutputValue;
      }
    }
  }

  // resetting game

  if (gameMode == "reset game") {
    gameMode = "player1Rolls";
    dice1 = Math.ceil(Math.random() * 6).toString();
    dice2 = Math.ceil(Math.random() * 6).toString();
    dice3 = Math.ceil(Math.random() * 6).toString();
    dice4 = Math.ceil(Math.random() * 6).toString();
    myOutputValue = "Click to start a new round.";
    return myOutputValue;
  }
};
