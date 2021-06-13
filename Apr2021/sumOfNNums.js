var SequenceSum = (function() {
    function SequenceSum() {}

    SequenceSum.showSequence = function(count) {
      let newArray = [];
        let sum = new Array(count + 1).fill(0).reduce((acc,curr,idx,arr) => {
        newArray.push(idx);
        acc += idx
        return acc;
      },0);
      if (sum < 0) return `${sum}<0`
      return `${newArray.join("+")}=${sum}`
    };

    return SequenceSum;

  })();
  console.log(
    SequenceSum.showSequence(6),//"0+1+2+3+4+5+6 = 21")
  )