const {
  turnMoveRover,
  executeListOfCommands,
  processCommandsAndCoordinatesAndHeadingString,
} = require("./index");

//tests checking correct direction when rover turning left
describe("rover turning left or right", () => {
  test("when facing north, turn left makes rover face west", () => {
    let testMoveCommand = "L";
    let testHeadingInput = "N";
    let testCoordinatesInput = [0, 1];
    let testHeadingOutput = "W";
    let testStateOutput = {
      heading: testHeadingInput,
      coordinates: testCoordinatesInput,
    };
    expect(
      turnMoveRover(testMoveCommand, testHeadingInput, testCoordinatesInput)
    ).toEqual({
      ...testStateOutput,
      heading: testHeadingOutput,
    });
  });

  test("when facing west, turn left makes rover face south", () => {
    let testMoveCommand = "L";
    let testHeadingInput = "W";
    let testCoordinatesInput = [0, 1];
    let testHeadingOutput = "S";
    let testStateOutput = {
      heading: testHeadingInput,
      coordinates: testCoordinatesInput,
    };
    expect(
      turnMoveRover(testMoveCommand, testHeadingInput, testCoordinatesInput)
    ).toEqual({
      ...testStateOutput,
      heading: testHeadingOutput,
    });
  });

  test("when facing south, turn left makes rover face east", () => {
    let testMoveCommand = "L";
    let testHeadingInput = "S";
    let testCoordinatesInput = [0, 1];
    let testHeadingOutput = "E";
    let testStateOutput = {
      heading: testHeadingInput,
      coordinates: testCoordinatesInput,
    };
    expect(
      turnMoveRover(testMoveCommand, testHeadingInput, testCoordinatesInput)
    ).toEqual({
      ...testStateOutput,
      heading: testHeadingOutput,
    });
  });

  test("when facing east, turn left makes rover face north", () => {
    let testMoveCommand = "L";
    let testHeadingInput = "E";
    let testCoordinatesInput = [0, 1];
    let testHeadingOutput = "N";
    let testStateOutput = {
      heading: testHeadingInput,
      coordinates: testCoordinatesInput,
    };
    expect(
      turnMoveRover(testMoveCommand, testHeadingInput, testCoordinatesInput)
    ).toEqual({
      ...testStateOutput,
      heading: testHeadingOutput,
    });
  });
});

//tests checking correct direction when rover turning right
describe("rover turning right", () => {
  test("when facing north, turn right makes rover face east", () => {
    let testMoveCommand = "R";
    let testHeadingInput = "N";
    let testCoordinatesInput = [0, 1];
    let testHeadingOutput = "E";
    let testStateOutput = {
      heading: testHeadingInput,
      coordinates: testCoordinatesInput,
    };
    expect(
      turnMoveRover(testMoveCommand, testHeadingInput, testCoordinatesInput)
    ).toEqual({
      ...testStateOutput,
      heading: testHeadingOutput,
    });
  });

  test("when facing east, turn right makes rover face south", () => {
    let testMoveCommand = "R";
    let testHeadingInput = "E";
    let testCoordinatesInput = [0, 1];
    let testHeadingOutput = "S";
    let testStateOutput = {
      heading: testHeadingInput,
      coordinates: testCoordinatesInput,
    };
    expect(
      turnMoveRover(testMoveCommand, testHeadingInput, testCoordinatesInput)
    ).toEqual({
      ...testStateOutput,
      heading: testHeadingOutput,
    });
  });

  test("when facing south, turn right makes rover face west", () => {
    let testMoveCommand = "R";
    let testHeadingInput = "S";
    let testCoordinatesInput = [0, 1];
    let testHeadingOutput = "W";
    let testStateOutput = {
      heading: testHeadingInput,
      coordinates: testCoordinatesInput,
    };
    expect(
      turnMoveRover(testMoveCommand, testHeadingInput, testCoordinatesInput)
    ).toEqual({
      ...testStateOutput,
      heading: testHeadingOutput,
    });
  });

  test("when facing west, turn right makes rover face north", () => {
    let testMoveCommand = "R";
    let testHeadingInput = "W";
    let testCoordinatesInput = [0, 1];
    let testHeadingOutput = "N";
    let testStateOutput = {
      heading: testHeadingInput,
      coordinates: testCoordinatesInput,
    };
    expect(
      turnMoveRover(testMoveCommand, testHeadingInput, testCoordinatesInput)
    ).toEqual({
      ...testStateOutput,
      heading: testHeadingOutput,
    });
  });
});

//tests checking correct coordinate incremented when moving in a particular direction

describe("moving the rover", () => {
  test("when moving north y coordinate should increase by 1", () => {
    let testMoveCommand = "M";
    let testHeadingInput = "N";
    let testCoordinatesInput = [0, 1];
    let testCoordinatesOutput = [0, 2];
    let testStateOutput = {
      heading: testHeadingInput,
      coordinates: testCoordinatesInput,
    };
    expect(
      turnMoveRover(testMoveCommand, testHeadingInput, testCoordinatesInput)
    ).toEqual({
      ...testStateOutput,
      coordinates: testCoordinatesOutput,
    });
  });

  test("when moving south y coordinate should decrease by 1", () => {
    let testMoveCommand = "M";
    let testHeadingInput = "S";
    let testCoordinatesInput = [1, 1];
    let testCoordinatesOutput = [1, 0];
    let testStateOutput = {
      heading: testHeadingInput,
      coordinates: testCoordinatesInput,
    };
    expect(
      turnMoveRover(testMoveCommand, testHeadingInput, testCoordinatesInput)
    ).toEqual({
      ...testStateOutput,
      coordinates: testCoordinatesOutput,
    });
  });

  test("when moving east x coordinate should increase by 1", () => {
    let testMoveCommand = "M";
    let testHeadingInput = "E";
    let testCoordinatesInput = [0, 1];
    let testCoordinatesOutput = [1, 1];
    let testStateOutput = {
      heading: testHeadingInput,
      coordinates: testCoordinatesInput,
    };
    expect(
      turnMoveRover(testMoveCommand, testHeadingInput, testCoordinatesInput)
    ).toEqual({
      ...testStateOutput,
      coordinates: testCoordinatesOutput,
    });
  });

  test("when moving west x coordinate should decrease by 1", () => {
    let testMoveCommand = "M";
    let testHeadingInput = "W";
    let testCoordinatesInput = [1, 1];
    let testCoordinatesOutput = [0, 1];
    let testStateOutput = {
      heading: testHeadingInput,
      coordinates: testCoordinatesInput,
    };
    expect(
      turnMoveRover(testMoveCommand, testHeadingInput, testCoordinatesInput)
    ).toEqual({
      ...testStateOutput,
      coordinates: testCoordinatesOutput,
    });
  });
});

//test rover taking multiple commands
test("rover is able to take multiple commands", () => {
  expect(executeListOfCommands("LMLMLMLMM", "N", [1, 2])).toEqual({
    heading: "N",
    coordinates: [1, 3],
  });
});

//test able to process total rover test input
test("rover is able to process complete test input", () => {
  let input = ["12N", "LMLMLMLMM", "33E", "MMRMMRMRRM"];
  expect(processCommandsAndCoordinatesAndHeadingString(input)).toEqual([
    "13N",
    "51E",
  ]);
});
