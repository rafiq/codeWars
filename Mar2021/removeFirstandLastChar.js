function array(arr){
    let length = arr.length;
    return arr.length >= 2 && arr.split(",").length > 2 ? arr.split(",").slice(1,-1).join(" ") : null;

    }

console.log(
    array(''), //null);
    array('1'), //null);
    array('1, 3'), //null);
    array('1,2,3'), //'2');
)