import { describe, expect, it } from "vitest";

import { calculate } from "#utils/calculate.js";

describe("calculate", () => {
  it("adds", () => {
    expect(calculate("1+2")).toBe("3");

    //expect(calculate("0.1+0.2")).toBeCloseTo(0.3);
  });

  it("minus", () => {
    expect(calculate("2-1")).toBe("1");
  });

  it("multiply", () => {
    expect(calculate("2*3")).toBe("6");
  });

  it("divide", () => {
    expect(calculate("4/2")).toBe("2");
  });

  it("Cannot divide by zero", () => {
    expect(calculate("4/0")).toBe("Cannot divide by zero");
  });
});
