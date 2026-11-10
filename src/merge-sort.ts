import { SortAlgorithm } from "./shared";

/**
 * Merge Sort - Sorting Algorithms
 *
 * Rule - Recursively divides the array into two halves, sorts each half, then merges the sorted
 * halves back together. Each merge step compares elements from both halves and places them in
 * ascending order into a temporary array, which is then copied back into the original.
 *
 * @param arr - The array to sort (in-place, ascending order).
 * @returns The sorted array. Time Complexity: O(n log n) average/worst/best Space Complexity: O(n)
 */

export class MergeSort extends SortAlgorithm {
  sort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
    this.mergeSort(arr, 0, arr.length - 1);
    return arr;
  }

  private mergeSort(arr: number[], left: number, right: number): void {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);
    this.mergeSort(arr, left, mid);
    this.mergeSort(arr, mid + 1, right);
    this.merge(arr, left, mid, right);
  }

  private merge(arr: number[], left: number, mid: number, right: number): void {
    const leftHalf = arr.slice(left, mid + 1);
    const rightHalf = arr.slice(mid + 1, right + 1);

    let i = 0;
    let j = 0;
    let k = left;

    while (i < leftHalf.length && j < rightHalf.length) {
      if (leftHalf[i]! <= rightHalf[j]!) {
        arr[k++] = leftHalf[i++]!;
      } else {
        arr[k++] = rightHalf[j++]!;
      }
    }

    while (i < leftHalf.length) arr[k++] = leftHalf[i++]!;
    while (j < rightHalf.length) arr[k++] = rightHalf[j++]!;
  }
}
