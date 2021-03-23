function tidyNumber(n){
    let nArray = String(n).split("");

    for (let i = 0; i < nArray.length; i++) {
        if (nArray[i] > nArray[i + 1]) return false
    }
    return true;

    // return String(n).split("").reduce((acc,curr,idx,arr) => {
    //     if (curr > arr[idx + 1]) acc = false;
    //     return acc;
    // },"");
    // return true;
  }
  console.log(
    tidyNumber(12),//true);
    tidyNumber(102),//false);
    tidyNumber(9672),//false);
    tidyNumber(2789),//true);
    tidyNumber(2335),//true);
  )