import { updateSnake, drawSnake, getSnakeHead, snakeIntersection, SNAKE_SPEED } from './snake.js';
import { updateFood, drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

let main = currentTime => {
  if(gameOver){
    if(confirm('You lost. Want to restart?')){
      window.location = '/';
    }
    return;
  }
  const secondsSinceLast = (currentTime - lastRenderTime) / 1000;
  window.requestAnimationFrame(main);
  if(secondsSinceLast < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;
  update();
  draw();
}
window.requestAnimationFrame(main);

let update = () => {
  updateFood();
  updateSnake();
  checkDeath();
}

let draw = () => {
  gameBoard.innerHTML = '';
  drawFood(gameBoard);
  drawSnake(gameBoard);
}

let checkDeath = () => {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}


