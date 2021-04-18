function kebabize(str) {

    let newStr = str.replace(/[^A-Z]/gi,"");

    return newStr.split("").reduce((acc,curr,idx) => {
        if (curr >= "A" && curr <= "Z" && idx !== 0) {
            acc += "-";
            acc += curr.toLowerCase();
        } else if (curr >= "A" && curr <= "Z" && idx === 0) {
            acc += curr.toLowerCase();
        } else acc += curr;

        return acc;
    },"")
  }
console.log(
    kebabize('myCamelCasedString'),// 'my-camel-cased-string');
    kebabize('myCamelHas3Humps'),// 'my-camel-has-humps');
    kebabize('-kkj'),// 'kkj');
    kebabize("K8p5c"),// 'kpc');
)