const { turnMoveRover, executeListOfCommands } = require("./index");

//tests checking correct direction when rover turning left
describe("rover turning left", () => {
  test("when facing north, turn left makes rover face west", () => {
    let input = "N";
    let output = "W";
    expect(turnMoveRover("L", input)).toBe(output);
  });

  test("when facing west, turn left makes rover face south", () => {
    let input = "W";
    let output = "S";
    expect(turnMoveRover("L", input)).toBe(output);
  });

  test("when facing south, turn left makes rover face east", () => {
    let input = "S";
    let output = "E";
    expect(turnMoveRover("L", input)).toBe(output);
  });

  test("when facing east, turn left makes rover face north", () => {
    let input = "E";
    let output = "N";
    expect(turnMoveRover("L", input)).toBe(output);
  });
});

//tests checking correct direction when rover turning right
describe("rover turning right", () => {
  test("when facing north, turn right makes rover face east", () => {
    let input = "N";
    let output = "E";
    expect(turnMoveRover("R", input)).toBe(output);
  });

  test("when facing east, turn right makes rover face south", () => {
    let input = "E";
    let output = "S";
    expect(turnMoveRover("R", input)).toBe(output);
  });

  test("when facing south, turn right makes rover face west", () => {
    let input = "S";
    let output = "W";
    expect(turnMoveRover("R", input)).toBe(output);
  });

  test("when facing west, turn right makes rover face north", () => {
    let input = "W";
    let output = "N";
    expect(turnMoveRover("R", input)).toBe(output);
  });
});

//tests checking correct coordinate incremented when moving in a particular direction

describe("moving the rover", () => {
  test("when moving north y coordinate should increase by 1", () => {
    expect(turnMoveRover("M", "N", [1, 1])).toEqual([1, 2]);
  });

  test("when moving south y coordinate should decrease by 1", () => {
    expect(turnMoveRover("M", "S", [1, 1])).toEqual([1, 0]);
  });

  test("when moving east x coordinate should increase by 1", () => {
    expect(turnMoveRover("M", "E", [1, 1])).toEqual([2, 1]);
  });

  test("when moving west x coordinate should decrease by 1", () => {
    expect(turnMoveRover("M", "W", [1, 1])).toEqual([0, 1]);
  });
});

//test rover taking multiple commands
test("rover is able to take multiple commands", () => {
  expect(executeListOfCommands("LMLMLMLMM", "N", [1, 2])).toEqual("N", [1, 3]);
});
