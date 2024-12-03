import { describe, expect, it } from "vitest";
import { sayHello } from "../src/say-hello";

describe("say hello", () => {
  it("should say hello", () => {
    const result = sayHello("Foo");
    expect(result).toBe("Hello Foo");
  });
});
