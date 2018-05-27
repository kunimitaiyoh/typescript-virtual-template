import * as assert from 'power-assert';
import { Symbol } from '@/symbols';
import { isObject } from 'util';

const removeLocation = function(symbol: any): any {
  if (symbol !== null && typeof symbol === "object") {
    const keys = Object.keys(symbol).filter(key => key !== "location");
    const removed: any = {};
    keys.forEach(k => removed[k] = removeLocation(symbol[k]));
    return removed;
  } else {
    return symbol;
  }
}

export function assertSymbolEqual(actual: Symbol, expected: any, message?: string): void {
  assert.deepEqual(removeLocation(actual), expected, message);
}
