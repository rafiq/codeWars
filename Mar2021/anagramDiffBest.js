// Ok well this one is a little more complicated than other ones, so my answer was correct, but still took me way too long to figure it out. I love how this answer just made a mapping of each letter in the first word, and then decremented the mapping letters from the letters in the second word. Lastly, they added up all the values of the resulting mapping array and returned that. very smooth. I was thinking of using mapping at first, but I didn't think to do this. This is the stack method that Jawwad had mentioned before.

function anagramDifference(w1,w2){
    const stack = {};

    for (var c1 of w1) {
      stack[c1] > 0 ? stack[c1]++ : stack[c1] = 1;
    }

    let counter = 0;

    for (var c2 of w2) {
      stack[c2] > 0 ? stack[c2]-- : counter++;
    }

    const result = counter + Object.values(stack).reduce((sum, curr) => sum + curr, 0);

    return result;
  }