function whoIsPaying(name){


    let shortName = name.split("").reduce((acc,curr,idx) => {
        if (idx < 2) acc += curr;
        return acc;
    },"")

    if (name.length <= 2) return [shortName];
    else return [name, shortName]
  }
console.log(
    whoIsPaying("Mexico"),//["Mexico", "Me"]);
    whoIsPaying("Melania"),//["Melania", "Me"]);
    whoIsPaying("Melissa"),//["Melissa", "Me"]);
    whoIsPaying("Me"),//["Me"]);
    whoIsPaying(""), //[""]);
    whoIsPaying("I"),//["I"]);
)