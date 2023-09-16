import { TreeNode } from './tree-node';
import { searchTreeRecursivelyAndInsert } from './utility/search-tree-recursively-and-insert';
import { searchTreeRecursivelyAndRemove } from './utility/search-tree-recursively-and-remove';

export class BinaryTree<T> {
  public root: TreeNode<T> | null = null;

  insert(value: T): void {
    if (this.root === null) {
      this.root = new TreeNode(value);
      return;
    }

    searchTreeRecursivelyAndInsert(value, this.root);
  }

  getMin(): T {
    let current = this.root;
    while (current?.leftNode !== null) {
      current = current?.leftNode || null;
    }
    return current.value;
  }

  getMax(): T {
    let current = this.root;
    while (current?.rightNode !== null) {
      current = current?.rightNode || null;
    }
    return current.value;
  }

  has(value: T): boolean {
    let current = this.root;

    if (current === null) return false;

    while (current.value !== value) {
      if (value < current.value) {
        current = current?.leftNode;
      } else {
        current = current?.rightNode;
      }

      if (current === null) {
        return false;
      }
    }

    return Boolean(current);
  }

  remove(value: T): void {
    this.root = searchTreeRecursivelyAndRemove(value, this.root);
  }
}
