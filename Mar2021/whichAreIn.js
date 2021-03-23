let a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

let a1 = ["xyz", "live", "strong"]

function inArray(array1,array2){


    return array1.reduce((acc,curr) => {
        if (array2.some(el => el.match(curr))) acc.push(curr);
        return acc;
    },[]).sort()
  }
  console.log(
    inArray(a1, a2), //["live", "strong"])
    inArray([ 'live', 'strong', 'arp' ], [ 'lively', 'alive', 'harp', 'sharp', 'armstrong' ]), //[\'arp\', \'live\', \'strong\']
  )

//   While my answer is correct and short, I still copied the below best answer because they did a slightly different way. They filtered, where I reduced and which are being used in a similar way here. We both used some because we just needed to find one element that is a contains our target substring. Lastly, they used indexOf as opposed to match which is fine, but I like match because it is made for strings where indexOf seems better used for single character searches. However, my mind has just been expanded.

function inArray(arr1, arr2) {
    return arr1.filter(function(needle) {
      return arr2.some(function(haystack) {
        return haystack.indexOf(needle) > -1;
      });
    }).sort();
  }

//   Below is shorter than mine and I agree that fitler was the best choice here, I just have to get more practice with using it.
function inArray(array1,array2){
    return array1
      .filter(a1 => array2.find(a2 => a2.match(a1)))
      .sort()
  }