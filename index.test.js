//test suite checking correct direction when rover turning left
const turnLeft = (x) => {
  if (x === "N") return "W";
  else if (x === "W") return "S";
  else if (x === "S") return "E";
  else if (x === "E") return "N";
};

describe("rover turning left", () => {
  test("when facing north, turn left makes rover face west", () => {
    expect(turnLeft("N")).toBe("W");
  });

  test("when facing west, turn left makes rover face south", () => {
    expect(turnLeft("W")).toBe("S");
  });

  test("when facing west, turn left makes rover face east", () => {
    expect(turnLeft("S")).toBe("E");
  });

  test("when facing east, turn left makes rover face north", () => {
    expect(turnLeft("E")).toBe("N");
  });
});

//test suite checking correct direction when rover turning right
const turnRight = (x) => {
  if (x === "N") return "E";
  else if (x === "E") return "S";
  else if (x === "S") return "W";
  else if (x === "W") return "N";
};

describe("rover turning right", () => {
  test("when facing north, turn left makes rover face west", () => {
    expect(turnLeft("N")).toBe("W");
  });

  test("when facing west, turn left makes rover face south", () => {
    expect(turnLeft("W")).toBe("S");
  });

  test("when facing south, turn left makes rover face east", () => {
    expect(turnLeft("S")).toBe("E");
  });

  test("when facing east, turn left makes rover face north", () => {
    expect(turnLeft("E")).toBe("N");
  });
});

//test suite checking correct coordinate incremented when moving in a particular direction
const moveRover = (a, b) => {
  const [x, y] = b;
  if (a === "N") return [x, y + 1];
  else if (a === "S") return [x, y - 1];
  else if (a === "E") return [x + 1, y];
  else if (a === "W") return [x - 1, y];
};

describe("moving the rover", () => {
  test("when moving north y coordinate should increase by 1", () => {
    expect(moveRover("N", [1, 1])).toEqual([1, 2]);
  });

  test("when moving south y coordinate should decrease by 1", () => {
    expect(moveRover("S", [1, 1])).toEqual([1, 0]);
  });

  test("when moving east x coordinate should increase by 1", () => {
    expect(moveRover("E", [1, 1])).toEqual([2, 1]);
  });

  test("when moving west x coordinate should decrease by 1", () => {
    expect(moveRover("W", [1, 1])).toEqual([0, 1]);
  });
});
