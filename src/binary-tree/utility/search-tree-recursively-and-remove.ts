import { type TreeNode } from "../tree-node";

export const searchTreeRecursivelyAndRemove = <T>(
  value: T,
  node: TreeNode<T> | null
): TreeNode<T> | null => {
  if (node === null) {
    return null;
  }

  if (value === node.value) {
    // node has no children
    if (node.leftNode === null && node.rightNode === null) {
      return null;
    }

    // node has no leftNode child
    if (node.leftNode === null) {
      return node.rightNode;
    }

    // node has no rightNode child
    if (node.rightNode === null) {
      return node.leftNode;
    }
    // node has two children
    let tempNode = node.rightNode;
    while (tempNode.leftNode !== null) {
      tempNode = tempNode.leftNode;
    }

    node.value = tempNode.value;
    node.rightNode = searchTreeRecursivelyAndRemove(
      tempNode.value,
      node.rightNode
    );
    return node;
  }

  if (value < node.value) {
    node.leftNode = searchTreeRecursivelyAndRemove(value, node.leftNode);
    return node;
  }

  node.rightNode = searchTreeRecursivelyAndRemove(value, node.rightNode);
  return node;
};
