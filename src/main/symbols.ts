import { LocationRange } from "pegjs";

export interface Symbol {
  kind: string;
  location: LocationRange;
}

export type Expression = BinaryOperation | Integer;

export interface BinaryOperation extends Symbol {
  kind: "BinaryOperation";
  args: {
    operator: string;
    left: Expression;
    right: Expression;
  }
}

export interface Integer extends Symbol {
  kind: "Integer";
  args: {
    value: number;
  }
}
