import { Player } from "./player";
import { renderBoards, createDragAndDropFleet, renderButtons } from "./dom";

let p1, p2; //needed p1 and p2 to be exported for button listeners

function initGame() {
  p1 = Player("You");
  p2 = Player("Your enemy");
  p1.isTurn(p2); // sets turn to p1
  p2.randomFleet(); // random fleet for p2

  renderButtons(p1); // renders "start" "random" and "reset" btns
  renderBoards(p1, p2);
  createDragAndDropFleet(p1);
}
export { initGame, p1, p2 };
