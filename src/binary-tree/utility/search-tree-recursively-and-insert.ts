import { TreeNode } from "../tree-node";

export const searchTreeRecursivelyAndInsert = <T>(
  value: T,
  node: TreeNode<T>
): void => {
  if (value < node.value) {
    if (node.leftNode === null) {
      node.leftNode = new TreeNode(value);
      return;
    }

    return searchTreeRecursivelyAndInsert(value, node.leftNode);
  }

  if (value > node.value) {
    if (node.rightNode === null) {
      node.rightNode = new TreeNode(value);
      return;
    }
    return searchTreeRecursivelyAndInsert(value, node.rightNode);
  }
};
