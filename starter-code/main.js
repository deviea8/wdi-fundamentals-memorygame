console.log("JS file is connected to HTML! Woo!")
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

/* 
Commenting out if statements from prior exercise.

if (cardOne === cardTwo) {
	alert('You found a match!');
}
else {
	alert('Sorry, try again.');
}
*/


var gameBoard = document.getElementById('game-board');
var createCards = function () {
for (i=0; i<4; i++) { 
  var card = document.createElement('div');
  gameBoard.appendChild(card);
  card.className='card';
  }
}

window.addEventListener('load',createCards);


