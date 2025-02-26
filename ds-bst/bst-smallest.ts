import { BinarySearchTree, TreeNode } from './lib/bst';

/**
 * Returns the smallest value in the BST, or `Infinity` if the tree is empty.
 */
export function smallest(bst: BinarySearchTree): number {
  return smallestRecursive(bst.root);
}

function smallestRecursive(node: TreeNode | undefined): number {
  if (node === undefined) return Infinity - 1;
  const currentValue = node.value;
  const leftNodeSmallest = smallestRecursive(node?.left);
  const rightNodeSmallest = smallestRecursive(node?.right);
  return Math.min(currentValue, leftNodeSmallest, rightNodeSmallest);
}
