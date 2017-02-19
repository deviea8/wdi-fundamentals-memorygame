
console.log("JS file is connected to HTML! Woo!")


/*
Commenting out from prior exercise.
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';


if (cardOne === cardTwo) {
  alert('You found a match!');
}
else {
  alert('Sorry, try again.');
}
*/

window.onload = function () {
    createCards();
};

var prev_handler = window.onload;
window.onload = function () {
    if (prev_handler) {
        prev_handler();
    }
    createBoard();
};


var gameBoard = document.getElementById('game-board');
var createCards = function () {
for (i=0; i< cards.length; i++) { 
  var card = document.createElement('div');
  gameBoard.appendChild(card);
  card.className='card';
  console.log('card' + ' ' + i + ' ' + 'created')
  }
}


var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var cardElement = document.getElementsByClassName('card');
var createBoard = function() {
  for (i=0; i<cards.length; i++) {
    document.getElementsByClassName('card')[i].setAttribute('data-card',cards[i]);
        document.getElementsByClassName('card')[i].addEventListener('click', isTwoCards);
        console.log('card type assigned to card' + ' ' + i)
} 
}


var isMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  alert('You found a match!');
    cardElement.innerHTML = null;
}
else {
  alert('Sorry, try again.');
    cardElement.innerHTML = null;
}}


function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML='<img src="king.png" alt="King Card" />';
  } else this.innerHTML='<img src="queen.png" alt="Queen Card" />';
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
    console.log('ran TwoCards function');
  }
}

var button = document.querySelector('button');
button.addEventListener('click', flipCard);

function flipCard () {
  for (i=0; i < cardElement.length; i++) {
    cardElement[i].innerHTML=" ";
    console.log('flipped card back over');
}
}
  
function displayImage () {
  if (cardElement.getAttribute('data-card') === 'king') {
    return true;
  }
  else return false;
}