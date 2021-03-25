function multipleSplit(string, delimiters=[]){
    let result = "";
    for (let i = 0; i < delimiters.length; i++) {
        string = string.split(delimiters[i]).join("`")
    }
    return string.split("`").slice(0,-1)
  }
  console.log(
    multipleSplit('Hi everybody!', [' ', '!']),// ['Hi', 'everybody']);
    multipleSplit('(1+2)*6-3^9', ['+', '-', '(', ')', '^', '*']),// ['1', '2', '6', '3', '9']);
    multipleSplit('Solve_this|kata-very\\quickly!', ['!', '|', '\\', '_', '-']),// ['Solve', 'this', 'kata', 'very', 'quickly']);
  )