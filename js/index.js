/// main variables

var output = document.getElementById('output');
var resultXtext = document.getElementById('resultXtext');
var resultYtext = document.getElementById('resultYtext');
var tableX = document.getElementById('tableX');
var tableX = document.getElementById('tableX');
var tableY = document.getElementById('tableY');
var resultX = document.getElementById('resultX');
var resultY = document.getElementById('resultY');
var btnRock = document.getElementById('rock-button');
var btnPaper = document.getElementById('paper-button');
var btnScissors = document.getElementById('scissors-button');
var btnNewGame = document.getElementById('newGame-button');
var btnReset = document.getElementById('reset-button');
var buttons = document.querySelectorAll('.player-move');
var resultsHeader = document.querySelector('.results-header');
var modalHeader = document.querySelector('.modal-header');
var modalTable = document.querySelector('.modal-table--results');

var params = {
  playerWin: 0,
  computerWin: 0,
  rounds: 0,
  queue: 0,
  countX: 0,
  countY: 0,
  playerWon: 0,
  computerWon: 0,
  progress: [],
}
disableBtn();

// variable that collects the number of completed rounds

var rounds = btnNewGame.addEventListener('click', function newGame() {
  return rounds;
});

// computer random choice function

function compChoice() {
  var randomChoice = Math.floor(Math.random() * 3) + 1;
  if (randomChoice === 1) {
    randomChoice = 'rock';
    return randomChoice;
  } else if (randomChoice === 2) {
    randomChoice = 'paper';
    return randomChoice;
  } else if (randomChoice === 3) {
    randomChoice = 'scissors';
    return randomChoice;
  }
}

// cleaning div function and reset button

var cleanDiv = function(divName) {
  document.getElementById(divName).innerHTML = "";
}

btnReset.addEventListener('click', resetGame());

function resetGame() {
  cleanDiv('resultXtext');
  cleanDiv('resultYtext');
  params.playerWin = 0;
  params.computerWin = 0;
  params.queue = 0;
  params.progress = [];
  resultXtext.style.display = "none";
  resultYtext.style.display = "none";
  document.querySelector('.content-massage').style.height = "auto";
  modalTable.innerHTML = '';
  disableBtn();
}
// button NEW GAME

btnNewGame.addEventListener('click', function newGame() {
  var newGameBtn = window.prompt('Enter round number');
  enableBtn();
  output.innerHTML = "<span>You will play " + newGameBtn + " rounds!</span>" + "<br><br> Let's play the game! <br><br> <h2>Your choice!</h2>";
  params.rounds = newGameBtn;
  resultXtext.style.display = "inline-block";
  resultYtext.style.display = "inline-block";
  document.querySelector('.content-massage').style.height = "300px";
});

/*   modal close function ON CLICK IN MODAL  */

var modalClose = document.querySelector('.modal');
modalClose.addEventListener('click', closeModal);

function closeModal() {
  modalClose.style.display = "none";
  resetGame();
}

/*  loop listener for PLAY BUTTONS  */
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function playerMoveNew(btnID) {
    var btnId = event.currentTarget.getAttribute('data-move');
    var playerCh = btnId;
    var compCh = compChoice();
    playerAction(compCh, playerCh);
  });
}

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
  output.innerHTML = " Click <span>NEW GAME</span> button " + "<br><br> to play the game...!";
  resultXtext.innerHTML = 'You:&nbsp;&nbsp;&nbsp;&nbsp;' + '<b>' + params.countX;
  resultYtext.innerHTML = 'Computer:&nbsp;&nbsp;&nbsp;&nbsp;' + '<b>' + params.countY;
}

// results function

function playResult() {

  if (params.computerWin == params.rounds) {
    cleanDiv('resultXtext');
    cleanDiv('resultYtext');
    disableBtn();
    modalHeader.innerHTML = '<br><h2>Computer won!</h2> <br> Will You play again? <br><br> Click the <span>NEW GAME</span> button!';
    params.computerWon++;
    params.queue++;
    params.countY = 0;
    params.countX = 0;
    params.computerWin = 0;
    params.playerWin = 0;
    document.querySelector('#modal-one').style.display = "block";
    var tableHeader = '<th>Round:</th>' + '<th>Your move:</th>' +'<th>Comp move:</th>' +'<th>Result:</th>' +'<th>Score:</th>';
    modalTable.innerHTML = tableHeader;
    for (var i = 0; i < Object.entries(params.progress).length; i++) {
      modalTable.innerHTML = modalTable.innerHTML + '<td>'+ params.progress[i].Round +'</td>'+ '<td>'+ params.progress[i].You +'</td>'+ '<td>'+ params.progress[i].Computer +'</td>'+ '<td>'+ params.progress[i].Result +'</td>'+ '<td>'+ params.progress[i].X + ':' + params.progress[i].Y +'</td>';
    }
  } else if (params.playerWin == params.rounds) {
    cleanDiv('resultXtext');
    cleanDiv('resultYtext');
    disableBtn();
    modalHeader.innerHTML = '<br><h2>YOU WON THE ENTIRE GAME!!!</h2> <br> Will You play again? <br><br> Click the <span>NEW GAME</span> button!';
    params.playerWon++;
    params.queue++;
    params.countY = 0;
    params.countX = 0;
    params.computerWin = 0;
    params.playerWin = 0;
    document.querySelector('#modal-one').style.display = "block";
    var tableHeader = '<th>Round:</th>' + '<th>Your move:</th>' +'<th>Comp move:</th>' +'<th>Result:</th>' +'<th>Score:</th>';
    modalTable.innerHTML = tableHeader;
    for (var i = 0; i < Object.entries(params.progress).length; i++) {
      modalTable.innerHTML = modalTable.innerHTML + '<td>'+ params.progress[i].Round +'</td>'+ '<td>'+ params.progress[i].You +'</td>'+ '<td>'+ params.progress[i].Computer +'</td>'+ '<td>'+ params.progress[i].Result +'</td>'+ '<td>'+ params.progress[i].X + ':' + params.progress[i].Y +'</td>';
    }
  }
  resultXtext.innerHTML = 'You:&nbsp;&nbsp;&nbsp;&nbsp;' + '<b>' + params.countX + '</b>' + '<br><br><span><em> It is ' + '<b>' + (params.rounds - params.countX) + '</b>' + ' wins left to win!</em></span>';
  resultYtext.innerHTML = 'Computer:&nbsp;&nbsp;&nbsp;&nbsp;' + '<b>' + params.countY + '</b>' + '<br><br><span><em>  It is ' + '<b>' + (params.rounds - params.countY) + '</b>' + ' wins left to win!</em></span>';
}

// play function
var countRounds = (params.countX + params.countY);

function playerAction(comp, player) {
  var comp;
  var compMv = compChoice();
  comp = '<div>Computer choice: ' + '<h2>' + compMv + '</h2></div>';
  var playerMv;
  playerMv = '<div>Your choice: ' + '<h2>' + player + '</h2></div>';
  var score;

  if (compMv === player) {
    score = 'REMIS';
    params.queue++;
    params.progress.push({
      Round: params.queue,
      You: player,
      Computer: compMv,
      Result: score,
      X: params.countX,
      Y: params.countY
    });
  } else if (compMv === 'rock' && player === 'paper') {
    score = 'You WON!';
    params.playerWin++;
    params.countX++;
    params.queue++;
    params.progress.push({
      Round: params.queue,
      You: player,
      Computer: compMv,
      Result: score,
      X: params.countX,
      Y: params.countY
    });
  } else if (compMv === 'rock' && player === 'scissors') {
    score = 'Computer WON!';
    params.computerWin++;
    params.countY++;
    params.queue++;
    params.progress.push({
      Round: params.queue,
      You: player,
      Computer: compMv,
      Result: score,
      X: params.countX,
      Y: params.countY
    });
  } else if (compMv === 'paper' && player === 'rock') {
    score = 'Computer WON!';
    params.computerWin++;
    params.countY++;
    params.queue++;
    params.progress.push({
      Round: params.queue,
      You: player,
      Computer: compMv,
      Result: score,
      X: params.countX,
      Y: params.countY
    });
  } else if (compMv === 'paper' && player === 'scissors') {
    score = 'You WON!';
    params.playerWin++;
    params.countX++;
    params.progress.push({
      Round: params.queue,
      You: player,
      Computer: compMv,
      Result: score,
      X: params.countX,
      Y: params.countY
    });
  } else if (compMv === 'scissors' && player === 'rock') {
    score = 'You WON!';
    params.playerWin++;
    params.countX++;
    params.queue++;
    params.progress.push({
      Round: params.queue,
      You: player,
      Computer: compMv,
      Result: score,
      X: params.countX,
      Y: params.countY
    });
  } else if (compMv === 'scissors' && player === 'paper') {
    score = 'Computer WON!';
    params.computerWin++;
    params.countY++;
    params.queue++;
    params.progress.push({
      Round: params.queue,
      You: player,
      Computer: compMv,
      Result: score,
      X: params.countX,
      Y: params.countY
    });
  }
  output.innerHTML = '<span>' + score + '</span>' + '<br><br>' + playerMv + '<br>' + comp;
  playResult();
}
