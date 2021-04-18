var str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function (str) {
    let result = this.toLowerCase().split(" ").reduce((acc,curr) => {
        acc += curr[0].toUpperCase() + curr.slice(1) + " ";

        return acc;
    },"");

    return result.slice(0,-1)
  };

  console.log(
    str.toJadenCase(),// "How Can Mirrors Be Real If Our Eyes Aren't Real";
  )