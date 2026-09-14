import { describe, test, expect, beforeEach } from "bun:test";

import { BinarySearch } from "./binary-search";

describe("BinarySearch", () => {
  let binarySearch: BinarySearch;

  beforeEach(() => {
    binarySearch = new BinarySearch();
  });

  describe("found", () => {
    test("middle", () => {
      expect(binarySearch.search([1, 2, 3, 4, 5], 3)).toBe(2);
    });

    test("first index", () => {
      expect(binarySearch.search([1, 2, 3, 4, 5], 1)).toBe(0);
    });

    test("last index", () => {
      expect(binarySearch.search([1, 2, 3, 4, 5], 5)).toBe(4);
    });

    test("single element", () => {
      expect(binarySearch.search([42], 42)).toBe(0);
    });

    test("negative numbers", () => {
      expect(binarySearch.search([-10, -5, 0, 3, 7], -5)).toBe(1);
    });

    test("duplicates (returns a valid index)", () => {
      const idx = binarySearch.search([1, 2, 2, 2, 3], 2);
      expect(idx).toBeGreaterThanOrEqual(1);
      expect(idx).toBeLessThanOrEqual(3);
    });
  });

  describe("not found", () => {
    test("empty array", () => {
      expect(binarySearch.search([], 1)).toBe(-1);
    });

    test("target too large", () => {
      expect(binarySearch.search([1, 2, 3, 4, 5], 6)).toBe(-1);
    });

    test("target too small", () => {
      expect(binarySearch.search([1, 2, 3, 4, 5], 0)).toBe(-1);
    });

    test("single element miss", () => {
      expect(binarySearch.search([7], 3)).toBe(-1);
    });
  });

  describe("large input", () => {
    test("hit", () => {
      const arr = Array.from({ length: 10_000 }, (_, i) => i);
      expect(binarySearch.search(arr, 9999)).toBe(9999);
    });

    test("miss", () => {
      const arr = Array.from({ length: 10_000 }, (_, i) => i * 2);
      expect(binarySearch.search(arr, 9999)).toBe(-1);
    });
  });
});
