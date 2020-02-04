export function Board() {
  this.cards = [];
  this.firstImage = "";
  this.seccondImage = "";
  this.turns = 0;
  this.clicks = 0;
} 
Board.prototype.addClick = function() {
  this.clicks ++;
};
Board.prototype.incrementTurn = function() {
  this.turns ++;
};

// function Card() {
//   this.image = ;

// }