import { describe, expect, it } from "vitest";

import { calculate } from "#utils/calculate.js";

describe("calculate", () => {
  it("adds", () => {
    expect(calculate("1+2")).toBe(3);
  });
});
