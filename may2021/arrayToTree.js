var TreeNode = function(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  };

  function arrayToTree(array) {
    if (!array.length) return undefined;
    let root = new TreeNode(array.shift());
    let queue = [root];

    while (array.length) {
        let curr = queue.shift();
        let left = new TreeNode(array.shift());
        curr.left = left;
        queue.push(left);
        if (!array.length) break;
        let right = new TreeNode(array.shift());
        queue.push(right);
        curr.right = right;
    }

    return root;
  };
  console.log(arrayToTree([17, 0, -4, 3, 15]))//new TreeNode(17, new TreeNode(0, new TreeNode(3), new TreeNode(15)), new TreeNode(-4));

//   ! This is very interesting because it is using the Curry style of calling the function immediately and doing it recrusively.
  function arrayToTree(array) {
    return (function nodeFromIndex(i) {
      if(array[i] === undefined)
        return;
      return new TreeNode(array[i], nodeFromIndex(i * 2 + 1), nodeFromIndex(i * 2 + 2));
    })(0);
  };