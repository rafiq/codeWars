var TreeNode = function(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  };

function maxSum(root) {
    // THis is beautiful how this simply goes down each leg and recursively checks every subsequent branch of the tree and adds up all of the branches to give the max of each branch. GENIUS!!
    // if (!root) return 0;
    // return root.value + Math.max(maxSum(root.left), maxSum(root.right))

    if (!root) return 0;
    let leftSum =  maxSum(root.left) + root.value;
    let rightSum =  maxSum(root.right) + root.value;

    return Math.max(leftSum , rightSum);
  }

  var root = new TreeNode(5, new TreeNode(-22, new TreeNode(9), new TreeNode(50)), new TreeNode(11, new TreeNode(9), new TreeNode(2)));
  console.log(
    maxSum(root), //33);
  )