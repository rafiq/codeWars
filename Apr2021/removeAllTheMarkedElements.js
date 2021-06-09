Array.prototype.remove_ = function (integer_list, values_list) {
  let result = [];

  for (let el of integer_list) {
    if (!values_list.includes(el)) {
      result.push(el);
    }
  }
  return result;
};
l = new Array();
console.log(
  l.remove_([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]) // [2, 2, 4]),
);
