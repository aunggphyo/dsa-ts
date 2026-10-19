export abstract class SearchAlgorithm {
  abstract search(arr: number[], target: number): number;
}

export abstract class SortAlgorithm {
  abstract sort(arr: number[]): number[];
}

export abstract class IStack<T> {
  abstract push(item: T): void;
  abstract pop(): T | undefined;
  abstract peek(): T | undefined;
  abstract isEmpty(): boolean;
  abstract get size(): number;
}
