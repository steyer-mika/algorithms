import { BinaryTree } from "./binary-tree";
import { type TreeNode } from "./tree-node";

export class AdvancedBinaryTree<T> extends BinaryTree<T> {
  constructor() {
    super();
  }

  getMinHeight(node = this.root): number {
    if (node === null) {
      return -1;
    }

    const left = this.getMinHeight(node.leftNode);
    const right = this.getMinHeight(node.rightNode);

    if (left < right) {
      return left + 1;
    }
    return right + 1;
  }

  getMaxHeight(node = this.root): number {
    if (node === null) {
      return -1;
    }

    const left = this.getMaxHeight(node.leftNode);
    const right = this.getMaxHeight(node.rightNode);

    if (left > right) {
      return left + 1;
    }
    return right + 1;
  }

  isBalanced(): boolean {
    return this.getMinHeight() >= this.getMaxHeight() - 1;
  }

  getOrdered(): T[] {
    if (this.root === null) {
      return [];
    }

    const result: T[] = [];

    const traverseInOrder = (node: TreeNode<T>): void => {
      node.leftNode && traverseInOrder(node.leftNode);
      result.push(node.value);
      node.rightNode && traverseInOrder(node.rightNode);
    };

    traverseInOrder(this.root);

    return result;
  }

  preOrder(): T[] {
    if (this.root === null) {
      return [];
    }

    const result: T[] = [];

    const traversePreOrder = (node: TreeNode<T>): void => {
      result.push(node.value);
      node.leftNode && traversePreOrder(node.leftNode);
      node.rightNode && traversePreOrder(node.rightNode);
    };
    traversePreOrder(this.root);
    return result;
  }

  postOrder(): T[] {
    if (this.root === null) {
      return [];
    }

    const result: T[] = [];

    const traversePostOrder = (node: TreeNode<T>): void => {
      node.leftNode && traversePostOrder(node.leftNode);
      node.rightNode && traversePostOrder(node.rightNode);
      result.push(node.value);
    };
    traversePostOrder(this.root);

    return result;
  }

  levelOrder(): T[] {
    const result: T[] = [];
    const Q: TreeNode<T>[] = [];

    if (this.root === null) {
      return [];
    }

    Q.push(this.root);

    while (Q.length > 0) {
      const node = Q.shift();

      if (node === undefined) {
        continue;
      }

      result.push(node.value);

      if (node.leftNode !== null) {
        Q.push(node.leftNode);
      }
      if (node.rightNode !== null) {
        Q.push(node.rightNode);
      }
    }
    return result;
  }
}
