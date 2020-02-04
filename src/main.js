import { Board } from "./memory";
import './styles.css';

$(document).ready(function() {
  var board = new Board();
  $(".well").one("click", function() {
    board.addClick();
  });

});