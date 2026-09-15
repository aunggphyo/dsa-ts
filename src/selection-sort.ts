import { SortAlgorithm } from "./shared";

/**
 * Selection Sort - Sorting Algorithms
 *
 * Rule - Divides the array into a sorted and an unsorted region. On each pass, finds the minimum
 * element in the unsorted region and swaps it into the next position of the sorted region. Repeats
 * until the entire array is sorted. No early-exit optimisation — always performs O(n²) comparisons
 * regardless of input order.
 *
 * @param arr - The array to sort (in-place, ascending order).
 * @returns The sorted array. Time Complexity: O(n²) average/worst/best Space Complexity: O(1)
 */

export class SelectionSort extends SortAlgorithm {
  sort(arr: number[]): number[] {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < n; j++) {
        if (arr[j]! < arr[minIndex]!) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex]!, arr[i]!];
      }
    }

    return arr;
  }
}
