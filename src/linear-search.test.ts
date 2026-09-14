import { describe, test, expect } from "bun:test";

import { LinearSearch } from "./linear-search";

describe("LinearSearch", () => {
  test("search", () => {
    const linearSearch = new LinearSearch();
    const result = linearSearch.search([1, 2, 3, 4, 5], 3);
    expect(result).toBe(2);
  });

  test("search not found", () => {
    const linearSearch = new LinearSearch();
    const result = linearSearch.search([1, 2, 3, 4, 5], 6);
    expect(result).toBe(-1);
  });

  test("search empty", () => {
    const linearSearch = new LinearSearch();
    const result = linearSearch.search([], 1);
    expect(result).toBe(-1);
  });
});
