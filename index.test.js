const turnLeft = (x) => {
  if (x === "N") return "W";
  else if (x === "W") return "S";
  else if (x === "S") return "E";
  else if (x === "E") return "N";
};

//test suite checking correct direction when rover turning left
describe("rover turning left", () => {
  test("when facing north, turn left makes rover face west", () => {
    expect(turnLeft("N")).toBe("W");
  });

  test("when facing west, turn left makes rover face south", () => {
    expect(turnLeft("W")).toBe("S");
  });

  test("when facing west, turn left makes rover face south", () => {
    expect(turnLeft("S")).toBe("E");
  });

  test("when facing west, turn left makes rover face south", () => {
    expect(turnLeft("E")).toBe("N");
  });
});
