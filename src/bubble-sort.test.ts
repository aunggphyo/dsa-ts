import { describe, test, expect, beforeEach } from "bun:test";

import { BubbleSort } from "./bubble-sort";

describe("BubbleSort", () => {
  let bubbleSort: BubbleSort;

  beforeEach(() => {
    bubbleSort = new BubbleSort();
  });

  describe("sorted output", () => {
    test("unsorted array", () => {
      expect(bubbleSort.sort([5, 3, 8, 1, 9])).toEqual([1, 3, 5, 8, 9]);
    });

    test("reverse sorted array", () => {
      expect(bubbleSort.sort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    test("already sorted array (early exit)", () => {
      expect(bubbleSort.sort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test("negative numbers", () => {
      expect(bubbleSort.sort([-3, -1, -7, -2])).toEqual([-7, -3, -2, -1]);
    });

    test("mixed positive and negative", () => {
      expect(bubbleSort.sort([3, -1, 0, -5, 2])).toEqual([-5, -1, 0, 2, 3]);
    });

    test("duplicates", () => {
      expect(bubbleSort.sort([4, 2, 4, 1, 2])).toEqual([1, 2, 2, 4, 4]);
    });

    test("all same elements", () => {
      expect(bubbleSort.sort([7, 7, 7, 7])).toEqual([7, 7, 7, 7]);
    });
  });

  describe("edge cases", () => {
    test("empty array", () => {
      expect(bubbleSort.sort([])).toEqual([]);
    });

    test("single element", () => {
      expect(bubbleSort.sort([42])).toEqual([42]);
    });

    test("two elements — swapped", () => {
      expect(bubbleSort.sort([9, 1])).toEqual([1, 9]);
    });

    test("two elements — already sorted", () => {
      expect(bubbleSort.sort([1, 9])).toEqual([1, 9]);
    });
  });

  describe("large input", () => {
    test("sorts 10,000 element reversed array", () => {
      const arr = Array.from({ length: 10_000 }, (_, i) => 10_000 - i);
      const sorted = bubbleSort.sort(arr);
      expect(sorted[0]).toBe(1);
      expect(sorted[9_999]).toBe(10_000);
    });

    test("sorts 10,000 element already-sorted array", () => {
      const arr = Array.from({ length: 10_000 }, (_, i) => i);
      const sorted = bubbleSort.sort(arr);
      expect(sorted[0]).toBe(0);
      expect(sorted[9_999]).toBe(9_999);
    });
  });
});
