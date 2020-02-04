import { Board } from "./memory";
import './styles.css';
// import { bambi } from './img/bambi.jpeg';

// var imgDeer = document.getElementById("a");
// imgDeer.src = bambi;

$(document).ready(function() {
  var board = new Board();
  $(".well").one("click", function() {
    board.addClick();
  });

});