import { BinarySearchTree, TreeNode } from './lib/bst';
// export function findMax(bst: BinarySearchTree): number {
//   return findMaxRecursive(bst.root);
// }
// function findMaxRecursive(node: Node | undefined): number {
//   if (!node) return -Infinity;
//   return Math.max(node.nodeValue, findMaxRecursive(node.left));
// }
/**
 * Returns true iff `value` is in the BST.
 */
export function contains(bst: BinarySearchTree, value: number): boolean {
  if (!value === undefined) return false;
  return containsRecursive(bst.root, value);
}

function containsRecursive(node: TreeNode | undefined, value: number): boolean {
  if (node === undefined) {
    return false;
  }
  if (node.value === value) {
    return true;
  }
  return (
    containsRecursive(node.left, value) || containsRecursive(node.right, value)
  );
}
