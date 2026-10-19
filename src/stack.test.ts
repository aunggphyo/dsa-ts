import { describe, test, expect, beforeEach } from "bun:test";

import { Stack } from "./stack";

describe("Stack", () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  describe("initial state", () => {
    test("is empty on creation", () => {
      expect(stack.isEmpty()).toBe(true);
    });

    test("size is 0 on creation", () => {
      expect(stack.size).toBe(0);
    });

    test("peek returns undefined when empty", () => {
      expect(stack.peek()).toBeUndefined();
    });

    test("pop returns undefined when empty", () => {
      expect(stack.pop()).toBeUndefined();
    });
  });

  describe("push", () => {
    test("single element", () => {
      stack.push(1);
      expect(stack.size).toBe(1);
      expect(stack.isEmpty()).toBe(false);
    });

    test("multiple elements increase size", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.size).toBe(3);
    });

    test("top is most recently pushed element", () => {
      stack.push(10);
      stack.push(20);
      expect(stack.peek()).toBe(20);
    });
  });

  describe("pop", () => {
    test("returns and removes top element (LIFO order)", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()).toBe(3);
      expect(stack.pop()).toBe(2);
      expect(stack.pop()).toBe(1);
    });

    test("decreases size", () => {
      stack.push(1);
      stack.push(2);
      stack.pop();
      expect(stack.size).toBe(1);
    });

    test("stack becomes empty after all elements popped", () => {
      stack.push(42);
      stack.pop();
      expect(stack.isEmpty()).toBe(true);
      expect(stack.size).toBe(0);
    });

    test("pop on empty stack returns undefined and size stays 0", () => {
      expect(stack.pop()).toBeUndefined();
      expect(stack.size).toBe(0);
    });
  });

  describe("peek", () => {
    test("returns top without removing it", () => {
      stack.push(5);
      stack.push(10);
      expect(stack.peek()).toBe(10);
      expect(stack.size).toBe(2);
    });

    test("returns undefined when empty", () => {
      expect(stack.peek()).toBeUndefined();
    });
  });

  describe("mixed operations", () => {
    test("interleaved push and pop", () => {
      stack.push(1);
      stack.push(2);
      expect(stack.pop()).toBe(2);
      stack.push(3);
      expect(stack.peek()).toBe(3);
      expect(stack.pop()).toBe(3);
      expect(stack.pop()).toBe(1);
      expect(stack.isEmpty()).toBe(true);
    });
  });

  describe("generic type", () => {
    test("works with strings", () => {
      const strStack = new Stack<string>();
      strStack.push("a");
      strStack.push("b");
      expect(strStack.pop()).toBe("b");
      expect(strStack.peek()).toBe("a");
    });
  });

  describe("large input", () => {
    test("push and pop 10 000 elements", () => {
      for (let i = 0; i < 10_000; i++) stack.push(i);
      expect(stack.size).toBe(10_000);
      for (let i = 9_999; i >= 0; i--) {
        expect(stack.pop()).toBe(i);
      }
      expect(stack.isEmpty()).toBe(true);
    });
  });
});
