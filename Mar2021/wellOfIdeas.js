// This did not work, and I can't figure out why. I think it may have something to do with the fact that I used a reduce method and it is iterating and counting at the same time.

function well(x){
    let count = 0;

    x.reduce((_,curr) => {
        if (curr === "good") count++;
    },"");

    if (count === 0) return "Fail!";
        else if (count > 0 && count <= 2) return "Publish!";
        else if (count > 2) return  "I smell a series!" ;
}
console.log(
    well(['bad', 'bad', 'bad']), //'Fail!');
    well(['good', 'bad', 'bad', 'bad', 'bad']), //'Publish!');
    well(["/","/"]),// 'I smell a series!');
)

// As suspected, I need to put the conditionals outside the reduce method
function well(x) {
    const count = x.reduce((s, v) => s + (v == 'good'), 0);
    return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
  }