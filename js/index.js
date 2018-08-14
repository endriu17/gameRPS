/// main variables

var output = document.getElementById('output');
var resultXtext = document.getElementById('resultXtext');
var resultYtext = document.getElementById('resultYtext');
var tableX  = document.getElementById('tableX');
var tableX  = document.getElementById('tableX');
var tableY  = document.getElementById('tableY');
var resultX = document.getElementById('resultX');
var resultY = document.getElementById('resultY');
var btnRock = document.getElementById('rock-button');
var btnPaper = document.getElementById('paper-button');
var btnScissors = document.getElementById('scissors-button');
var btnNewGame = document.getElementById('newGame-button');
var btnReset = document.getElementById('reset-button');
var counter = {
  playerWin: 0,
  computerWin: 0,
}
disableBtn();

// variable that collects the number of completed rounds

var rounds = btnNewGame.addEventListener('click', function newGame(){
  return rounds;
}
);

// computer random choice function

function compChoice() {
    var randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice === 1){
      randomChoice = 'ROCK';
      return randomChoice;
    } else if (randomChoice === 2){
      randomChoice = 'PAPER';
      return randomChoice;
    } else if (randomChoice === 3){
      randomChoice = 'SCISSORS';
      return randomChoice;
    }
  }

// player choice function

function playerChoice(playerMove){
    var playerMove;
    if (playerMove === 1){
      playerMove = 'ROCK'
      return playerMove;
    }  else if (playerMove === 2){
      playerMove = 'PAPER'
      return playerMove;
    } else if (playerMove === 3){
      playerMove = 'SCISSORS'
      return playerMove;
    }
}

// cleaning div function and reset button

var cleanDiv = function(divName){
  document.getElementById(divName).innerHTML = "";
}

btnReset.addEventListener('click', function resetGame(){
        cleanDiv('tableX');
        cleanDiv('tableY');
        cleanDiv('resultXtext');
        cleanDiv('resultYtext');
        counter.playerWin = 0;
        counter.computerWin = 0;
        disableBtn();
}
);

// button NEW GAME

btnNewGame.addEventListener('click', function newGame(){
          var newGameBtn = window.prompt('Enter round number');
          enableBtn();
          output.innerHTML = "<br>You will play "+newGameBtn+" rounds!"+"<br><br> Let's play the game! <br><br> Your choice!";
          rounds = newGameBtn;
          return rounds;
        }
        );

// button STONE click event

btnRock.addEventListener('click', function rockChoice(){
         var rockBtn = 1;
         var compCh = compChoice();
         playerAction(compCh, rockBtn);
}
);

// button PAPER click event

btnPaper.addEventListener('click', function paperChoice(){
         var paperBtn = 2;
         var compCh = compChoice();
         playerAction(compCh, paperBtn);
}
);

// button SCISSORS click event

btnScissors.addEventListener('click', function scissorsChoice(){
         var scissorsBtn = 3;
         var compCh = compChoice();
         playerAction(compCh, scissorsBtn);
}
);

// disable - enable buttons functions

function enableBtn() {
    document.getElementById("rock-button").disabled = false;
    document.getElementById("paper-button").disabled = false;
    document.getElementById("scissors-button").disabled = false
}

function disableBtn() {
    document.getElementById("rock-button").disabled = true;
    document.getElementById("paper-button").disabled = true;
    document.getElementById("scissors-button").disabled = true;
    output.innerHTML = "<br><br> Click GAME button " + "<br><br> to play the game...!";
}

// results function

function playResult(){
        var countY = document.getElementById("resultY").childElementCount;
        var countX = document.getElementById("resultX").childElementCount;
        resultXtext.innerHTML = 'You:&nbsp;&nbsp;&nbsp;&nbsp;' + '<b>' + countX + '</b>' + '<br><br><em> It is ' + '<b>' + (rounds - countX) + '</b>' + ' wins left to win!</em>';
        resultYtext.innerHTML = 'Computer:&nbsp;&nbsp;&nbsp;&nbsp;' + '<b>' + countY + '</b>' + '<br><br><em>  It is ' + '<b>' + (rounds - countY) + '</b>' + ' wins left to win!</em>';
        if (countY == rounds){
            cleanDiv('resultY');
            cleanDiv('resultX');
            cleanDiv('resultXtext');
            cleanDiv('resultYtext');
            disableBtn();
            output.innerHTML = '<br>Computer won! <br><br> Will You play again? <br><br> Click on the NEW GAME button!';
            counter.computerWin++;
            tableY.innerHTML = 'Computer winnings: <br><br>' + '<b>' + counter.computerWin +'</b>';

        } else if (countX == rounds) {
            cleanDiv('resultY');
            cleanDiv('resultX');
            cleanDiv('resultXtext');
            cleanDiv('resultYtext');
            disableBtn();
            output.innerHTML = '<br>YOU WON THE ENTIRE GAME!!! <br><br> Will You play again? <br><br> Click on the NEW GAME button!';
            counter.playerWin++;
            tableX.innerHTML = 'Your winnings: <br><br>' + '<b>' + counter.playerWin +'</b>';

        }
}

// play function

function playerAction(comp, player){
        var comp;
        var compScore = compChoice();
        comp ='<br>Computer choice: '+ compScore;
        var player;
        var playerScore = playerChoice(player);
        player = 'Your choice: '+ playerScore;
        var score;
        if (compScore === playerScore){
            score = 'REMIS';
        } else if (compScore === 'ROCK' && playerScore === 'PAPER'){
            score = 'You WON!';
            resultX.innerHTML = resultX.innerHTML + '<br>X: 1';
        } else if (compScore === 'ROCK' && playerScore === 'SCISSORS'){
            score = 'Computer WON!';
            resultY.innerHTML = resultY.innerHTML + '<br>Y: 1';
        } else if (compScore === 'PAPER' && playerScore === 'ROCK'){
            score = 'Computer WON!';
            resultY.innerHTML = resultY.innerHTML + '<br>Y: 1';
        } else if (compScore === 'PAPER' && playerScore === 'SCISSORS'){
            score = 'You WON!';
            resultX.innerHTML = resultX.innerHTML + '<br>X: 1';
        } else if (compScore === 'SCISSORS' && playerScore === 'ROCK'){
            score = 'You WON!';
            resultX.innerHTML = resultX.innerHTML + '<br>X: 1';
        } else if (compScore === 'SCISSORS' && playerScore === 'PAPER'){
            score = 'Computer WON!';
            resultY.innerHTML = resultY.innerHTML + '<br>Y: 1';
        }
        output.innerHTML = '<br>' + player + '<br>' +comp+ '<br><br>' + score;
        playResult();
}
