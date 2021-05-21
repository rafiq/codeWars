// This one is what I did but this used the filter method to filter out all the elements from the first array that are not included in the second array. Very nice way of doing it.

function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }
