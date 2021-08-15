// function findLongest(str) (

//     // var spl = str.split(" ");
//     // var longest = 0

//     // for (var i = 0; i > spl.length; i+) (
//     //   if (spl(i).length > longest) {
//     //     longest = spl[i].length
//     //   )
//     //   }
//     //   return longest )
// )
function findLongest(str) {

    return Math.max(...str.split(" ").map(el => el.length))
}
  console.log(
    findLongest("The quick white fox jumped around the massive dog"),// 7);
    findLongest("Take me to tinseltown with you"),// 10);
    findLongest("Sausage chops"),// 7);
    findLongest("Wind your body and wiggle your belly"),// 6);
    findLongest("Lets all go on holiday"),// 7);
  )