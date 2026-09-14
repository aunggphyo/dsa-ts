import { SortAlgorithm } from "./shared";

/**
 * Bubble Sort - Sorting Algorithms
 *
 * Rule - Repeatedly compares adjacent elements and swaps them if they are in the wrong order. The
 * largest unsorted element "bubbles up" to its correct position after each pass. Includes an
 * early-exit optimisation: if no swap occurs in a full pass, the array is already sorted and the
 * algorithm terminates immediately.
 *
 * @param arr - The array to sort (in-place, ascending order).
 * @returns The sorted array. Time Complexity: O(n²) average/worst, O(n) best (already sorted) Space
 *   Complexity: O(1)
 */

export class BubbleSort extends SortAlgorithm {
  sort(arr: number[]): number[] {
    const n = arr.length;
    let swapped: boolean;

    for (let i = 0; i < n - 1; i++) {
      swapped = false;

      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j]! > arr[j + 1]!) {
          [arr[j], arr[j + 1]] = [arr[j + 1]!, arr[j]!];
          swapped = true;
        }
      }

      if (!swapped) break;
    }

    return arr;
  }
}
