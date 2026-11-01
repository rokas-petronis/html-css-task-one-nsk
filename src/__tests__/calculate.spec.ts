import { describe, expect, it } from "vitest";

import { calculate } from "#utils/calculate.js";

describe("calculate", () => {
  it("adds", () => {
    expect(calculate("1+2")).toBe("3");

    expect(calculate("0+2")).toBe("2");

    expect(calculate("0.1+0.2")).toBeCloseTo(0.3);
    expect(calculate("-0.1+0.2")).toBeCloseTo(0.1);
  });

  it("minus", () => {
    expect(calculate("2-1")).toBe("1");
    expect(calculate("2-0")).toBe("2");
    expect(calculate("0-2")).toBe("-2");
  });

  it("multiply", () => {
    expect(calculate("2*3")).toBe("6");
    expect(calculate("2*0")).toBe("0");
  });

  it("divide", () => {
    expect(calculate("4/2")).toBe("2");
  });

  it("power", () => {
    expect(calculate("4^2")).toBe("16");
  });

  it("powerTwo", () => {
    expect(calculate("4s2")).toBe("16");
  });

  it("throws on division by zero", () => {
    expect(() => calculate("4/0")).toThrow("Cannot divide by zero");
  });

  it("throws on invalid expression", () => {
    expect(() => calculate("abc")).toThrow();
    expect(() => calculate("")).toThrow();
    expect(() => calculate("1+")).toThrow();
    expect(() => calculate("+1")).toThrow();
  });
});
