// I forgot about the for let i of array

function pickIt (arr) {

    let odd = []
    let even =[]

    for (var x of arr) {
        ((x % 2) ? odd : even).push(x)
    }

    return [odd, even]
  }