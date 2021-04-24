function findMissingLetter(array)
{
  return array.map(el => el.charCodeAt()).reduce((acc,curr,idx,arr) => {
    if (arr[idx + 1] - curr > 1) acc +=  String.fromCharCode((arr[idx] + 1));

    return acc;
  },"");
}
console.log(
    findMissingLetter(['a','b','c','d','f']),//'e');
    findMissingLetter(['O','Q','R','S']),//'P');

)