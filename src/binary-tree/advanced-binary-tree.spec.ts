import { AdvancedBinaryTree } from "./advanced-binary-tree";
import { TreeNode } from "./tree-node";

describe("AdvancedBinaryTree", () => {
  let tree: AdvancedBinaryTree<number>;

  beforeEach(() => {
    tree = new AdvancedBinaryTree<number>();
    /*
    Create a sample tree:
        4
       / \
      2   6
     / \   \
    1   3   7
    */
    const root = new TreeNode(4);
    const node1 = new TreeNode(2);
    const node2 = new TreeNode(6);
    const node3 = new TreeNode(1);
    const node4 = new TreeNode(3);
    const node5 = new TreeNode(7);

    root.leftNode = node1;
    root.rightNode = node2;
    node1.leftNode = node3;
    node1.rightNode = node4;
    node2.rightNode = node5;

    tree.root = root;
  });

  describe("getMinHeight", () => {
    it("should return the minimum height of the tree", () => {
      expect(tree.getMinHeight()).toBe(1);
    });
  });

  describe("getMaxHeight", () => {
    it("should return the maximum height of the tree", () => {
      expect(tree.getMaxHeight()).toBe(2);
    });
  });

  describe("isBalanced", () => {
    it("should return true if the tree is balanced", () => {
      expect(tree.isBalanced()).toBe(true);
    });

    it("should return false if the tree is not balanced", () => {
      // Modify the tree to make it unbalanced
      tree.insert(100);
      tree.insert(101);
      tree.insert(102);
      tree.insert(103);
      tree.insert(104);
      tree.insert(105);
      tree.insert(106);
      tree.insert(107);
      tree.insert(108);

      expect(tree.isBalanced()).toBe(false);
    });
  });

  describe("getOrdered", () => {
    it("should return an ordered array of tree values (in-order traversal)", () => {
      expect(tree.getOrdered()).toEqual([1, 2, 3, 4, 6, 7]);
    });
  });

  describe("preOrder", () => {
    it("should return an array of tree values in pre-order traversal", () => {
      expect(tree.preOrder()).toEqual([4, 2, 1, 3, 6, 7]);
    });
  });

  describe("postOrder", () => {
    it("should return an array of tree values in post-order traversal", () => {
      expect(tree.postOrder()).toEqual([1, 3, 2, 7, 6, 4]);
    });
  });

  describe("levelOrder", () => {
    it("should return an array of tree values in level-order traversal", () => {
      expect(tree.levelOrder()).toEqual([4, 2, 6, 1, 3, 7]);
    });
  });
});
