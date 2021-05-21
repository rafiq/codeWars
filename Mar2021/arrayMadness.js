function arrayMadness(a, b) {


    return a.reduce((acc,el) => acc += el ** 2,0) > b.reduce((acc,el) => acc += el ** 3,0)
  }
  console.log(
      arrayMadness([4, 5, 6], [1, 2, 3]),//true
      arrayMadness([5,6,7],[4,5,6]),//false
  )

// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.