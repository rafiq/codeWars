function compare(a, b){
    if (!a || !b) return a === b;
    else return a.val === b.val && compare(a.left,b.left) && compare(a.right,b.right);
}

var aNode = {val: 1, left: null, right: null};
var bNode = {val: 1, left: null, right: null};
var cNode = {val: 2, left: null, right: null};

console.log(
    compare(aNode, bNode),//true;
    compare(aNode, cNode)//false
)