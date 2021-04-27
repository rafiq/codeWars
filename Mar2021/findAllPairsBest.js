// This is a interesting way to think of this problem which is asking to find all the pairs. This way he is taking the stack approach where if the item is in the Set, then delete it and increase the count by one because of the fact that if you are deleting it then you have already added one to your Set and now you have a pair, but if it is not in the set, then add it. Return count at the end.

function duplicates(array) {
    let res = 0, odd = new Set();
    for (let x of array) {
      if (odd.delete(x))
        res++;
      else
        odd.add(x);
    }
    return res;
  }
//   The below one is simple just using a for loop, but the reason why I included it because when the loop sees that the current value and the next value are the same, then it increments count and does i++ which would make the index skip the just counted next value and this is something that I was doing by accident in another problem I was trying to solve. I do like sorting things and then seeing if the two are correct.