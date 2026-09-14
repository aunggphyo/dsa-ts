import { describe, test, expect } from "bun:test";

import { BinarySearch } from "./binary-search";

describe("BinarySearch", () => {
  test("search", () => {
    const binarySearch = new BinarySearch();
    const result = binarySearch.search([1, 2, 3, 4, 5], 3);
    expect(result).toBe(2);
  });

  test("search - not found", () => {
    const binarySearch = new BinarySearch();
    const result = binarySearch.search([1, 2, 3, 4, 5], 6);
    expect(result).toBe(-1);
  });

  test("search - empty array", () => {
    const binarySearch = new BinarySearch();
    const result = binarySearch.search([], 1);
    expect(result).toBe(-1);
  });
});
