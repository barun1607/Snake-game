const GRID_SIZE = 21;

export let randomGridPosition = () => {
  return {
    x: Math.floor(Math.random() * 21) + 1,
    y: Math.floor(Math.random() * 21) + 1
  }
}

export let outsideGrid = position => {
  return (
    position.x < 1 || position.x > GRID_SIZE ||
    position.y < 1 || position.y > GRID_SIZE
  );
}
