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
  let result = state;
  let array = a.split("");
  for (const command of array)
    result = turnMoveRover(command, result.heading, result.coordinates);
  return result;
};

/*function that will take input string with heading and coordinates in and transform into state
that can be handled by turnMoveRover function nested within executeListOfCommands function*/
const transformCoordinatesAndHeadingStringToState = (a) => {
  const [x, y, z] = a.split("");
  return { heading: z, coordinates: [+x, +y] };
};

/*function that will convert output state returned by executeListOfCommands function nested within 
processCommandsAndCoordinatesAndHeadingString function into string*/
const convertToStringReturnedStateOfProcessCommandsAndCoordinatesAndHeadingString =
  (a) => {
    return `${a.coordinates[0]}${a.coordinates[1]}${a.heading}`;
  };

/*function will take each set of string commmands and coordinates as part of input array that it will then break down and process,
the returned output will also be an array of string elements at the new coordinates and heading related to the relevant commands and coordionates from the first input array*/
const processCommandsAndCoordinatesAndHeadingString = (a) => {
  let array = [];
  while (a.length > 0) {
    const [coordinatesAndHeading, commands] = [a.shift(), a.shift()];
    let result1 = transformCoordinatesAndHeadingStringToState(
      coordinatesAndHeading
    );
    let result2 = executeListOfCommands(
      commands,
      result1.heading,
      result1.coordinates
    );
    array.push(
      convertToStringReturnedStateOfProcessCommandsAndCoordinatesAndHeadingString(
        result2
      )
    );
  }
  return array;
};

module.exports = {
  turnMoveRover,
  executeListOfCommands,
  processCommandsAndCoordinatesAndHeadingString,
};
