let mapping = {
    "D": "disturbing","G":"gregarious","M":"mustache"
}

var makeBackronym = function(string){

    let result = [];
    string.toUpperCase().split("").forEach(el => {
        result.push(mapping[el])
    })
    return result.join(" ")
  };
  console.log(
    makeBackronym("dgm"),// "disturbing gregarious mustache"
  )