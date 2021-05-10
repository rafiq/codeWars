function tickets(peopleInLine){
    if (peopleInLine[0] > 25) return "NO";
    let mapping = {};

    for (let i = 0; i < peopleInLine.length; i++) {
        let currentBill = peopleInLine[i];

        if (currentBill === 100) {
            if (mapping[50] > 0) {
                mapping[50]--;
                mapping[25]--;
                mapping[100] ? mapping[100]++ : mapping[100] = 1;
            } else if (mapping[25] > 2) {
                mapping[25] -= 3;
                mapping[100] ? mapping[100]++ : mapping[100] = 1;
            } else return "NO"
        }

        if (currentBill === 50) {
            if (mapping[25] > 0) {
                mapping[25]--;
                mapping[50] ? mapping[50]++ : mapping[50] = 1;
            } else return "NO";
        }

        if (currentBill === 25) {
            mapping[25] ? mapping[25]++ : mapping[25] = 1;
        }
        if (mapping[25] < 0 || mapping[50] < 0) return "NO"
    }

    return "YES";
}

console.log(
    tickets([25, 25, 50, 50]), //"YES");
    tickets([25, 100]),// "NO");
    tickets([ 25, 50, 25, 50, 100, 25, 25, 50 ]),// "NO");
)
// ! Below is my first attempt at this problem where I didn't understand that they wanted us to keep track of the bills as opposed to just the number amount.
//    let wallet = 0;

// for (let i = 0; i < peopleInLine.length; i++) {
//     let curr = peopleInLine[i];
//     if (curr === 25) wallet += curr;
//     if (curr > 25) wallet = (wallet + 25) - (curr - 25);
//     if (wallet < 0) return "NO" ;
//     console.log(wallet)
// }
// console.log(peopleInLine)
// return wallet >= 0 ? "YES" : "NO";

// ! The below answer is nice because it uses the switch statement well and also with the logic for the 100 bills because in any case it will always have to subtract at least one 25 bill.
function tickets(peopleInLine) {
    var bills = [0, 0, 0]
    for (var i = 0; i < peopleInLine.length; i++) {
      switch (peopleInLine[i]) {
        case 25:
          bills[0]++
          break

        case 50:
          bills[0]--
          bills[1]++
          break

        case 100:
          bills[1] ? bills[1]-- : bills[0] -= 2
          bills[0]--
          break
      }

      if (bills[0] < 0) {
        return 'NO'
      }
    }

    return 'YES'
  }

//  ! This one is good for its brevity and using the destructuring at the beginning. ALso using the array instead of the hash table is also a nice touch, though I wonder how fast it is.
function tickets(peopleInLine){
    let [c25,c50,c100] = [0,0,0];
    for(let v of peopleInLine) {
      if(v===25) c25++;
      if(v===50) {c50++; c25--;}
      if(v===100) {c25--; c50>0?c50--:c25-=2;}
      if(c25<0||c50<0) return 'NO'
    }
    return 'YES'
  }