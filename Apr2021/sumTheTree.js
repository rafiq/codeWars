function sumTheTreeValues(root){
    if (!root) return 0;

    return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
  }
  var simpleNode = {value: 10, left: {value: 1, left: null, right: null}, right: {value: 2, left: null, right: null}};
  console.log(
    sumTheTreeValues(simpleNode), //13);
  )
  var unbalancedNode = {value: 11, left: {value: 0, left: null, right: null}, right: {value: 0, left: null, right: {value: 1, left: null, right: null}}};
 console.log(sumTheTreeValues(unbalancedNode))//12