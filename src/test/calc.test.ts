import 'mocha';
import * as assert from 'power-assert';
import * as fs from "fs";
import * as path from "path";
// @ts-ignore
import * as arithmetics from "../main/arithmetics";
import { assertSymbolEqual } from './util';

describe("arithmetics", () => {
  it("should return a valid abstract syntax tree.", () => {
    const source = fs.readFileSync(path.resolve(__dirname, "fixtures/calculation.calc"), "utf-8");

    const actual = arithmetics.parse(source);
    const expected = {
      kind: "BinaryOperation",
      args: {
        operator: "+",
        left: {
          kind: "BinaryOperation",
          args: {
            operator: "*",
            left: {
              kind: "Integer",
              args: {
                value: "1"
              }
            },
            right: {
              kind: "Integer",
              args: {
                value: "2"
              }
            },
          }
        },
        right: {
          kind: "BinaryOperation",
          args: {
            operator: "*",
            left: {
              kind: "Integer",
              args: {
                value: "3"
              }
            },
            right: {
              kind: "Integer",
              args: {
                value: "4"
              }
            }
          }
        }
      }
    };
    assertSymbolEqual(actual, expected);
  });
});
