import { SearchAlgorithm } from "./shared";

/**
 * Binary Search - Searching Algorithms
 *
 * Rule - Before using binary search, data must be sorted in ascending order.
 *
 * Iterative Binary Search
 *
 * @param arr - The sorted array to search.
 * @param target - The target value to search for.
 * @returns The index of the target value, or -1 if not found. Time Complexity: O(log n) Space
 *   Complexity: O(1)
 */

export class BinarySearch extends SearchAlgorithm {
  search(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid]! < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
  }
}
