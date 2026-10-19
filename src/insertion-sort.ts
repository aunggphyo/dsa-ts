import { SortAlgorithm } from "./shared";

/**
 * Insertion Sort - Sorting Algorithms
 *
 * Rule - Builds the sorted array one element at a time by taking each element from the unsorted
 * region and inserting it into its correct position within the sorted region. Elements larger than
 * the current element are shifted one position to the right to make room. Naturally efficient on
 * nearly-sorted input.
 *
 * @param arr - The array to sort (in-place, ascending order).
 * @returns The sorted array. Time Complexity: O(n²) average/worst, O(n) best (already sorted) Space
 *   Complexity: O(1)
 */

export class InsertionSort extends SortAlgorithm {
  sort(arr: number[]): number[] {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
      const current = arr[i]!;
      let j = i - 1;

      while (j >= 0 && arr[j]! > current) {
        arr[j + 1] = arr[j]!;
        j--;
      }

      arr[j + 1] = current;
    }

    return arr;
  }
}
