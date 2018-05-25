export type Expression = BinaryOperation | Integer

export interface BinaryOperation {
  operator: string;
  left: Expression;
  right: Expression;
}

export type Integer = number
