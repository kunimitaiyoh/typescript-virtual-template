import 'mocha';
import * as assert from 'power-assert';
import * as fs from "fs";
import * as path from "path";
// @ts-ignore
import * as arithmetics from "../main/arithmetics";

describe("arithmetics", () => {
  it("should return a valid abstract syntax tree.", () => {
    const source = fs.readFileSync(path.resolve(__dirname, "fixtures/calculation.calc"), "utf-8");
    const actual = arithmetics.parse(source);
    const expected = {
      BinaryOperation: {
        operator: "+",
        left: {
          BinaryOperation: {
            operator: "*",
            left: {
              Integer: "1"
            },
            right: {
              Integer: "2"
            }
          }
        },
        right: {
          BinaryOperation: {
            operator: "*",
            left: {
              Integer: "3"
            },
            right: {
              Integer: "4"
            }
          }
        }
      }
    };
    assert.deepEqual(actual, expected);
  });
});
