import { bench, describe, expect } from "vitest";

describe("Benchmarking", () => {
  function sayHello(name: string): string {
    return `Hello ${name}`;
  }
  bench("should run a benchmark", () => {
    const result = sayHello("Foo");
    expect(result).toBe("Hello Foo");
  });
});
