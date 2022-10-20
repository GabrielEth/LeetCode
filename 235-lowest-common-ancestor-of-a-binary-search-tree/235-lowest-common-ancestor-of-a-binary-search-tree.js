/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
let lowestCommonAncestor = function(root, p, q) {
    
    
    let tempRoot = root;
    
    if(p.val > tempRoot.val && q.val > tempRoot.val){
        tempRoot = tempRoot.right;
        tempRoot = lowestCommonAncestor(tempRoot, p, q);
    }
    else if(p.val < tempRoot.val && q.val < tempRoot.val){
        tempRoot = tempRoot.left;
       tempRoot = lowestCommonAncestor(tempRoot, p, q);
    }
    
    return tempRoot;
};