import { BinaryOperation, Expression, Integer, Symbol } from "./symbols";
import { LocationRange } from "pegjs";

const create = function<K, T>(kind: K, args: T, location: LocationRange): { kind: K, args: T, location: LocationRange } {
    return { kind, args, location };
};

export function BinaryOperation(args: { operator: string, left: Expression, right: Expression }, location: LocationRange): BinaryOperation {
  return create("BinaryOperation" as "BinaryOperation", args, location);
};

export function Integer(args: { value: number }, location: LocationRange): Integer {
  return create("Integer" as "Integer", args, location);
};
