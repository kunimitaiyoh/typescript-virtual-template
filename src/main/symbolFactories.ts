import { BinaryOperation, Expression, Integer, Symbol } from "./symbols";
import { LocationRange } from "pegjs";

const create = function<K, T>(kind: K, args: T, location: LocationRange): { kind: K, args: T, location: LocationRange } {
    if (location === undefined)
      throw new TypeError();
    return { kind, args, location };
};

const checkAllFields = function(fields: string[], dictionary: { [key: string]: any }): void {
  if (dictionary === null || typeof dictionary !== "object")
    throw new TypeError(`an object type is required.`);

  const missing = fields.find(field => !(field in dictionary));
  if (missing !== undefined)
    throw new TypeError(`key ${missing} is required.`);
};

export function BinaryOperation(args: { operator: string, left: Expression, right: Expression }, location: LocationRange): BinaryOperation {
  checkAllFields(["operator", "left", "right"], args);
  return create("BinaryOperation" as "BinaryOperation", args, location);
};

export function Integer(args: { value: number }, location: LocationRange): Integer {
  checkAllFields(["value"], args);
  return create("Integer" as "Integer", args, location);
};
