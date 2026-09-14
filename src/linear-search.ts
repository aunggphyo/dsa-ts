import { SearchAlgorithm } from "./_shared";

/**
 * Linear Search - Searching Algorithms
 *
 * Rule - Data does not need to be sorted; works on any array. Checks each element one by one until
 * the target is found.
 *
 * Iterative Linear Search
 *
 * @param arr - The array to search (sorted or unsorted).
 * @param target - The target value to search for.
 * @returns The index of the target value, or -1 if not found. Time Complexity: O(n) Space
 *   Complexity: O(1)
 */

export class LinearSearch extends SearchAlgorithm {
  search(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }
}
