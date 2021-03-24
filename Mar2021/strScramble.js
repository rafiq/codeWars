function scramble(str, arr) {


    return str.split("").reduce((acc,curr,idx) => {
        acc += str.substr(arr.indexOf(idx),1);
        return acc;
    },"")
  };
  console.log(
    scramble('abcd', [0,3,1,2]),//'acdb', "Should return acdb");
    scramble('sc301s', [4,0,3,1,5,2]),//"c0s3s1", "Should return c0s3s1");
    scramble('bskl5', [2,1,4,3,0]),//"5sblk", "Should return 5sblk");
  )