function remove(s){
    let endExclamations = s.match(/[!]+$/) ? s.match(/[!]+$/)[0] : "";

    return s.split("").reduce((acc,curr,idx) => {
        if (curr === "!" ) acc;
        else acc += curr;
        return acc;
    },"") + endExclamations;

  }
  console.log(
    remove("Hi!"),// "Hi!")
    remove("Hi!!!"),//"Hi!!!")
    remove("!Hi"),// "Hi")
    remove("!Hi!"),// "Hi!")
    remove("Hi! Hi!"),// "Hi Hi!")
    remove("Hi"),// "Hi")
  )

//   So I just learned two more ways to deal with this problem: 1) the * means inlcude zero until unlimited number which would have taken care of the null cases that I had when using the + operator which finds one or more. Also, they were able to get around that by using the || comparator and an empty array then they joined it as seen below.
function remove(s) {
    let endExcs = (s.match(/!+$/) || []).join('');
    return s.replace(/!/g, '') + endExcs;
  }