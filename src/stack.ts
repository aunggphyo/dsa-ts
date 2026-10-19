import { IStack } from "./shared";

/**
 * Stack - Data Structures
 *
 * Rule - A Last-In, First-Out (LIFO) data structure. Elements are inserted and removed from the
 * same end (the "top"). Only the top element is directly accessible at any time.
 *
 * Implemented using a singly linked list so that push and pop are both O(1) with no shifting of
 * elements — unlike an array-backed stack that must resize or copy on overflow.
 *
 * @template T - The type of elements held in the stack.
 *
 * Methods:
 *   push(item)  – Add an element to the top.           Time: O(1)  Space: O(1)
 *   pop()       – Remove and return the top element.   Time: O(1)  Space: O(1)
 *   peek()      – Return the top element without removing it. Time: O(1) Space: O(1)
 *   isEmpty()   – Return true when the stack has no elements.
 *   size        – Number of elements currently in the stack.
 */

interface Node<T> {
  value: T;
  next: Node<T> | undefined;
}

export class Stack<T> extends IStack<T> {
  private _top: Node<T> | undefined = undefined;
  private _size: number = 0;

  push(item: T): void {
    const node: Node<T> = { value: item, next: this._top };
    this._top = node;
    this._size++;
  }

  pop(): T | undefined {
    if (this._top === undefined) return undefined;
    const value = this._top.value;
    this._top = this._top.next;
    this._size--;
    return value;
  }

  peek(): T | undefined {
    return this._top?.value;
  }

  isEmpty(): boolean {
    return this._size === 0;
  }

  get size(): number {
    return this._size;
  }
}
