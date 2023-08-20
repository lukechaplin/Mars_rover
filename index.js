//function for turning rover left
const turnLeft = (x) => {
  if (x === "N") return "W";
  else if (x === "W") return "S";
  else if (x === "S") return "E";
  else if (x === "E") return "N";
};

//function for turning rover right
const turnRight = (x) => {
  if (x === "N") return "E";
  else if (x === "E") return "S";
  else if (x === "S") return "W";
  else if (x === "W") return "N";
};

//function for moving rover across x coordinate or up y coordinate
const moveRover = (a, b) => {
  const [x, y] = b;
  if (a === "N") return [x, y + 1];
  else if (a === "S") return [x, y - 1];
  else if (a === "E") return [x + 1, y];
  else if (a === "W") return [x - 1, y];
};

//function for turning rover left or right or moving rover
const turnMoveRover = (moveCommand, heading, coordinates) => {
  if (moveCommand === "L") {
    return turnLeft(heading);
  }
  if (moveCommand === "R") {
    return turnRight(heading);
  }
  if (moveCommand === "M") return moveRover(heading, coordinates);
};

//function that takes list of commands and executes them sequentially - inital idea for loop
//need to write a function that will update state after every command from array this will mean updating the turn and move functions to hold and update state after each iteration runs
const executeListOfCommands = (a, b, c) => {
  let testObject = { b, c };
  //console.log(result);
  let array = a.split("");
  //console.log(array);
  /*for (let i = 0; array.length > 0; i++)
    result = turnMoveRover(array[i], result.b, result.c);*/
  let result = array.map((x) => turnMoveRover(x, testObject.b, testObject.c));
  return result;
};

//executeListOfCommands("LRM", "N", [1, 2]);

module.exports = { turnMoveRover, executeListOfCommands };
