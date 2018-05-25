import 'mocha';
import * as assert from 'power-assert';
import * as fs from "fs";
// @ts-ignore
import * as arithmetics from "../main/arithmetics";

describe("arithmetics", () => {
  it("should return addition of two operands.", () => {
    const actual = arithmetics.parse("1 + 2");
    assert.equal(actual, 3);
  });
});
