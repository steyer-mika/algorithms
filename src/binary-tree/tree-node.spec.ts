import { TreeNode } from "./tree-node";

describe("TreeNode", () => {
  describe("constructor", () => {
    it("should set the value of the node", () => {
      const node = new TreeNode(1);

      expect(node.value).toEqual(1);
    });

    it("should set the left node when provided", () => {
      const leftNode = new TreeNode(2);
      const node = new TreeNode(1, leftNode);

      expect(node.leftNode?.value).toEqual(2);
    });

    it("should set the right node when provided", () => {
      const rightNode = new TreeNode(2);
      const node = new TreeNode(1, undefined, rightNode);

      expect(node.rightNode?.value).toEqual(2);
    });

    it("should initialize the left node to null if not provided", () => {
      const node = new TreeNode(1);

      expect(node.leftNode).toBeNull();
    });

    it("should initialize the right node to null if not provided", () => {
      const node = new TreeNode(1);

      expect(node.rightNode).toBeNull();
    });
  });
});
