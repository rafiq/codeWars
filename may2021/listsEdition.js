function TreeNode(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  };

  function ListNode(data, next = null) {
    this.data = data;
    this.next = next;
  };

  function flatten(root) {
    if (!root) return null;
    var values = new Set();
    var trees = [root];
    while (trees.length) {
        var tree = trees.pop();
        var head = tree.value;
        while (head) {
            values.add(head.data);
            head = head.next;
        }
        if (tree.left) trees.push(tree.left);
        if (tree.right) trees.push(tree.right);
    }
    values = Array.from(values).sort((a, b) => a - b);
    return values.reduceRight((a, b) => new ListNode(b, a), null);
}
// !;lkajsd;fkjas;dlkfj
  function flatten(root) {
    const lstToArr = head => !head ? [] : [head.data].concat(lstToArr(head.next));
    const treeToArr = root => !root ? [] : lstToArr(root.value).concat(treeToArr(root.left), treeToArr(root.right));
    const arrToList = x => !x || !x.length ? null : new ListNode(x[0], arrToList(x.slice(1)));
    return arrToList(treeToArr(root).filter((x, i, arr) => arr.indexOf(x) === i).sort((a, b) => a - b));
  };
// ! `;asljdf;alskjdfl;
  function flatten(root) {
    return constructList([...new Set(flattenTree(root))].sort((x,y)=>x-y))
}

function constructList(head){
    return !head.length?null:new ListNode(head[0],constructList(head.slice(1)))
}

function flattenTree(root){
    return !root?[]:flattenList(root.value).concat(flattenTree(root.left),flattenTree(root.right))
}

function flattenList(head){
    return !head?[]:[head.data].concat(flattenList(head.next))
}


  function flatten(root) {
    let result = [];
    let curr = root;
    if (curr === null) return;
    result.push(curr.value)
    return flatten(curr.left)//, flatten(curr.right);
    // return result;
  };
  let l1 = new ListNode(17, new ListNode(1));
  let l2 = new ListNode(3);
  let l3 = new ListNode(1);
  let l4 = new ListNode(2);
  let l5 = new ListNode(16);
  let l6 = new ListNode(7, new ListNode(3));
  let root = new TreeNode(l1, new TreeNode(l2, new TreeNode(l4)), new TreeNode(l3, new TreeNode(l5), new TreeNode(l6)));
  console.log(

    // let expected = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(7, new ListNode(16, new ListNode(17))))));
    flatten(root),
  )