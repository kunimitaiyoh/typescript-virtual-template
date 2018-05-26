import 'mocha';
import * as assert from 'power-assert';
import * as fs from "fs";
import * as path from "path";
// @ts-ignore
import * as arithmetics from "../main/arithmetics";

describe("arithmetics", () => {
  it("should return addition of two operands.", () => {
    const source = fs.readFileSync(path.resolve(__dirname, "fixture/calculation.calc"), "utf-8");
    const actual = arithmetics.parse(source);
    assert.equal(actual, 3);
  });
});
