import { sum } from "@/sum"

describe("sum", () => {
  it("should return addition of two operands.", () => {
    expect(sum(1, 2)).toBe(3);
  })
});
