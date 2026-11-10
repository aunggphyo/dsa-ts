import { SortAlgorithm } from "./shared";

/**
 * Shell Sort - Sorting Algorithms
 *
 * Rule - A generalisation of insertion sort that allows the exchange of elements far apart. It
 * starts by sorting elements separated by a large gap, then progressively reduces the gap until it
 * reaches 1 (a final insertion sort pass). Using Knuth's sequence (gap = gap * 3 + 1) provides good
 * practical performance.
 *
 * @param arr - The array to sort (in-place, ascending order).
 * @returns The sorted array. Time Complexity: O(n log² n) average, O(n²) worst (gap-dependent)
 *   Space Complexity: O(1)
 */

export class ShellSort extends SortAlgorithm {
  sort(arr: number[]): number[] {
    const n = arr.length;

    // Compute starting gap using Knuth's sequence: 1, 4, 13, 40, 121, ...
    let gap = 1;
    while (gap < Math.floor(n / 3)) gap = gap * 3 + 1;

    while (gap >= 1) {
      // Insertion sort with the current gap
      for (let i = gap; i < n; i++) {
        const temp = arr[i]!;
        let j = i;

        while (j >= gap && arr[j - gap]! > temp) {
          arr[j] = arr[j - gap]!;
          j -= gap;
        }

        arr[j] = temp;
      }

      gap = Math.floor((gap - 1) / 3);
    }

    return arr;
  }
}
