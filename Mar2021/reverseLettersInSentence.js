function reverser(sentence) {



        return sentence.split(" ").map(el => el.split("").reverse().join("")).join(" ");
}
console.log(
    reverser("Hi mom"),// 'iH mom');
    reverser("friendzone"),// 'enozdneirf');
    reverser(" "),// ' ');
)