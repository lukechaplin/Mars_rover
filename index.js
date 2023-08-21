//function for turning rover left
const turnLeft = (a, b) => {
  let state = { heading: a, coordinates: b };
  if (a === "N") a = "W";
  else if (a === "W") a = "S";
  else if (a === "S") a = "E";
  else if (a === "E") a = "N";
  return { ...state, heading: a };
};

//function for turning rover right
const turnRight = (a, b) => {
  let state = { heading: a, coordinates: b };
  if (a === "N") a = "E";
  else if (a === "E") a = "S";
  else if (a === "S") a = "W";
  else if (a === "W") a = "N";
  return { ...state, heading: a };
};

//function for moving rover across x coordinate or up y coordinate
const moveRover = (a, b) => {
  let state = { heading: a, coordinates: b };
  const [x, y] = b;
  if (a === "N") b = [x, y + 1];
  else if (a === "S") b = [x, y - 1];
  else if (a === "E") b = [x + 1, y];
  else if (a === "W") b = [x - 1, y];
  return { ...state, coordinates: b };
};

//function for turning rover left or right or moving rover
const turnMoveRover = (moveCommand, heading, coordinates) => {
  if (moveCommand === "L") {
    return turnLeft(heading, coordinates);
  }
  if (moveCommand === "R") {
    return turnRight(heading, coordinates);
  }
  if (moveCommand === "M") return moveRover(heading, coordinates);
};

/*function that takes list of commands and executes them sequentially using for...of loop
as each iteration executes it updates the state variable with the new heading and coordinates
so it can be used by the next iteration*/
const executeListOfCommands = (a, b, c) => {
  let state = { heading: b, coordinates: c };
  let array = a.split("");
  for (const command of array)
    result = turnMoveRover(command, state.heading, state.coordinates);
  return result;
};

executeListOfCommands("LMLMLMLMM", "N", [1, 2]);

module.exports = { turnMoveRover, executeListOfCommands };
