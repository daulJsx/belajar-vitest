import { expect, describe, it } from "vitest";

describe("sequential test", () => {
  it("should pass 3", async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    expect(3).toBe(3);
  });
  it("should pass 2", async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    expect(2).toBe(2);
  });
  it("should pass", async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(1).toBe(1);
  });
});
