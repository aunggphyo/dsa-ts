import { SortAlgorithm } from "./shared";

/**
 * Quick Sort - Sorting Algorithms
 *
 * Rule - Selects a pivot element and partitions the array into two sub-arrays:
 * elements less than or equal to the pivot, and elements greater than the pivot.
 * Recursively applies the same process to each sub-array until the array is sorted.
 * Uses the last element as the pivot (Lomuto partition scheme).
 *
 * @param arr - The array to sort (in-place, ascending order).
 * @returns The sorted array. Time Complexity: O(n log n) average, O(n²) worst  Space Complexity: O(log n)
 */

export class QuickSort extends SortAlgorithm {
  sort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
    this.quickSort(arr, 0, arr.length - 1);
    return arr;
  }

  private quickSort(arr: number[], low: number, high: number): void {
    if (low >= high) return;

    const pivotIndex = this.partition(arr, low, high);
    this.quickSort(arr, low, pivotIndex - 1);
    this.quickSort(arr, pivotIndex + 1, high);
  }

  private partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high]!;
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j]! <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j]!, arr[i]!];
      }
    }

    [arr[i + 1], arr[high]] = [arr[high]!, arr[i + 1]!];
    return i + 1;
  }
}
