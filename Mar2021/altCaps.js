function capitalize(s){


    let oddIndexes = s.split("").reduce((acc,curr,idx) => {
        if (idx % 2 === 0) acc.push(curr.toUpperCase())
        else acc.push(curr);

        return acc;
    },[]).join("");
    let evenIndexes = s.split("").reduce((acc,curr,idx) => {
        if (idx % 2 === 1) acc.push(curr.toUpperCase())
        else acc.push(curr);

        return acc;
    },[]).join("");
    return [oddIndexes,evenIndexes]

  };
  console.log(
    capitalize("abcdef"),//['AbCdEf', 'aBcDeF']);
    capitalize("codewars"),//['CoDeWaRs', 'cOdEwArS']);
    capitalize("abracadabra"),//['AbRaCaDaBrA', 'aBrAcAdAbRa']);
    capitalize("codewarriors"),//['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
  )