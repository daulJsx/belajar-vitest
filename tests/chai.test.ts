import { describe, assert, expect, it } from "vitest";

function sayHello(name: string): string {
  return `Hello ${name}!`;
}

describe("sayHello", () => {
  it("should return with name", () => {
    // using 'expect'
    expect(sayHello("Foo")).to.be.a("string", "Hello Foo!");
    // using 'assert from chai'
    assert.equal(sayHello("Foo"), "Hello Foo!");
  });
});
