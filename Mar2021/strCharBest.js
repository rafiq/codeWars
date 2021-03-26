// I had to copy this one because this is genius! PUtting the regex expressions for the target output array, and then mapping over that target array and passing the regex for each element into the map function where they split the array at that regex which would give a count if you minus one. GENUIS!!!!!

const solve = (str) => (
    [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map(rgx => str.split(rgx).length - 1)
  );

//   The below is also a nice way to do this counting process though it is a little more verbose with all the if statements, but definitely less verbose than mine.
const solve = (string) => (
    Object.values([...string].reduce((acc, char) => {
      if (/[A-Z]/.test(char)) {
        acc.upper++;
      } else if (/[a-z]/.test(char)) {
        acc.lower++;
      } else if (/[0-9]/.test(char)) {
        acc.number++;
      } else {
        acc.other++;
      }
      return acc;
    }, { upper: 0, lower: 0, number: 0, other: 0 }))
  );

//   The below is the way I wanted to initially do this, but I decided not to because I knew that some matches would return null, and I didn't know how to deal with that. However, the below shows the way. Just return the match into a variable or an empty array if the match is null. Therefore, you can take the length of the variables without any problems.

const solve = x => {
    let u = x.match(/[A-Z]/g)||[]
    let d = x.match(/[a-z]/g)||[]
    let n = x.match(/[0-9]/g)||[]
    let s = x.match(/[^A-Z0-9]/gi)||[]
    return [u.length, d.length, n.length, s.length]
  }