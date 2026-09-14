import { describe, test, expect, beforeEach } from "bun:test";

import { LinearSearch } from "./linear-search";

describe("LinearSearch", () => {
  let linearSearch: LinearSearch;

  beforeEach(() => {
    linearSearch = new LinearSearch();
  });

  describe("found", () => {
    test("middle", () => {
      expect(linearSearch.search([1, 2, 3, 4, 5], 3)).toBe(2);
    });

    test("first index", () => {
      expect(linearSearch.search([1, 2, 3, 4, 5], 1)).toBe(0);
    });

    test("last index", () => {
      expect(linearSearch.search([1, 2, 3, 4, 5], 5)).toBe(4);
    });

    test("single element", () => {
      expect(linearSearch.search([42], 42)).toBe(0);
    });

    test("unsorted array", () => {
      expect(linearSearch.search([5, 3, 8, 1, 9], 8)).toBe(2);
    });

    test("negative numbers", () => {
      expect(linearSearch.search([-10, -5, 0, 3, 7], -5)).toBe(1);
    });

    test("duplicates (returns first)", () => {
      expect(linearSearch.search([1, 2, 2, 2, 3], 2)).toBe(1);
    });
  });

  describe("not found", () => {
    test("empty array", () => {
      expect(linearSearch.search([], 1)).toBe(-1);
    });

    test("missing target", () => {
      expect(linearSearch.search([1, 2, 3, 4, 5], 6)).toBe(-1);
    });

    test("single element miss", () => {
      expect(linearSearch.search([7], 3)).toBe(-1);
    });
  });

  describe("large input", () => {
    test("hit", () => {
      const arr = Array.from({ length: 10_000 }, (_, i) => i);
      expect(linearSearch.search(arr, 9999)).toBe(9999);
    });

    test("miss", () => {
      const arr = Array.from({ length: 10_000 }, (_, i) => i * 2);
      expect(linearSearch.search(arr, 9999)).toBe(-1);
    });
  });
});
