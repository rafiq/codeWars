function breakChocolate(n,m) {
    console.log(n,m)
    if (m === 0 && n === 0 || !n || !m) return 0;
    return (n * m) - 1;
  }
  console.log(
    breakChocolate(5, 5),// 24)
    breakChocolate(1, 1),// 0)
  )