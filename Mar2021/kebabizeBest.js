// I thought this was a good one, and I finally figured out how to find out which test cases I have messed up, and THAT made the difference for this one. I was not accounting for when the first letter of the string was capital therefore my original code was just putting a has at the front and it should have just been making the first letter lowercase. I thought this was camel case where the first letter is not captial though. The code below works really well and I was close to getting it except I stopped using the replace after the first use.

function kebabize(str) {
    return str.replace(/[^a-z]/ig, '').
           replace(/^[A-Z]/, c => c.toLowerCase()).
           replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
  }