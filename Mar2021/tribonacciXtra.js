function Xbonacci(signature,n){
    let length = signature.length;
    let lastXNums = signature.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let slicedArray = signature.slice(i, lastXNums + i);
            sum = slicedArray.reduce((acc,curr,idx) => {
                acc += curr;
                return acc;
            },0);
            signature.push(sum);
    }
    return signature.slice(0,n);
  }
console.log(
    // Xbonacci([0,1],10),//[0,1,1,2,3,5,8,13,21,34]);
    // Xbonacci([1,1],10),//[1,1,2,3,5,8,13,21,34,55]);
    // Xbonacci([0,0,0,0,1],10),//[0,0,0,0,1,1,2,4,8,16]);
    // Xbonacci([1,0,0,0,0,0,1],10),//[1,0,0,0,0,0,1,2,3,6]);
    Xbonacci([1,0,0,0,0,0,0,0,0,0],20),//[1,0,0,0,0,0,0,0,0,0,1,1,2,4,8,16,32,64,128,256]);

// xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
// xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}
// xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}
// xbonacci {1,1} produces the Fibonacci sequence
)