// I had to put this one in the records because I was trying to use the every method but it was only returning the first letter of each element of the array and that is not what I wanted. Here they used the spread operator and the bracket notation to get everything in the element and check if all the letters were included in the dictionary in this case and string in my case. It also looks like they were able to use the new Set method by putting it inside a bracket and using the spread operator as well after splitting the string into individual words and making it an array.

function shifter(s){
    const dic = ['H', 'I','M', 'N', 'O', 'S', 'W', 'X', 'Z']
    const arr = [...new Set(s.split(' '))].map(el => [...el].every(e => dic.includes(e)))
    return s === '' ? 0 : arr.filter(el => el).length
  }