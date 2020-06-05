import {onSnake, expandSnake} from './snake.js';
import {randomGridPosition} from './grid.js';

export let getRandomFoodPosition = () => {
  let newFoodPosition;
  while(newFoodPosition == null || onSnake(newFoodPosition)){
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}

let food = getRandomFoodPosition();
const EXPANSION = 1;

export let updateFood = () => {
  if(onSnake(food)){
    expandSnake(EXPANSION);
    food = getRandomFoodPosition()
  }
}

export let drawFood = (gameBoard) => {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
}

