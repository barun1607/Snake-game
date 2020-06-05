import { getInputDirection } from './input.js';

export const SNAKE_SPEED = 4;
const snakeBody = [
  {x: 11,  y: 11}
];
let newSegments = 0;

export let updateSnake = () => {
  addSegments();
  const inputDirection = getInputDirection();
  for(let i = snakeBody.length - 2; i >= 0; i--){
    snakeBody[i + 1] = {...snakeBody[i]};
  }
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export let drawSnake = (gameBoard) => {
  snakeBody.forEach(part => {
    const snakePart = document.createElement('div');
    snakePart.style.gridRowStart = part.y;
    snakePart.style.gridColumnStart = part.x;
    snakePart.classList.add('snake');
    gameBoard.appendChild(snakePart);
  });
}

export let expandSnake = (amount) => {
  newSegments += amount;
}

export let onSnake = (position, { ignoreHead = false } = {}) => {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPositions(segment, position);
  });
}

export let getSnakeHead = () => {
  return snakeBody[0];
}

export let snakeIntersection = () => {
  return onSnake(snakeBody[0], { ignoreHead: true });
}

let equalPositions = (pos1, pos2) => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

let addSegments = () => {
  for (let i = 0; i < newSegments; i++){
    snakeBody.push({...snakeBody[snakeBody.length - 1]});
  } 
  newSegments = 0;
}