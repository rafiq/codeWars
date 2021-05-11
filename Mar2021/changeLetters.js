// I have to remember that you can pass in a callback function to replace which works perfectly heree!! Genius.
function swap(st){
    return st.replace(/[aeiou]/g, v => v.toUpperCase() )
  }//z.

function swap(st){
    return st.split("").reduce((acc,curr) => {
        if ("aeiou".includes(curr)) acc += curr.toUpperCase();
        else acc += curr;
        return acc;
    },"") //.replace(/[aeiou]/gi,"")
  }
  console.log(
    swap("HelloWorld!"),//"HEllOWOrld!")
    swap("Sunday"),//"SUndAy")
  )