function findShort(s){


    return Math.min(...s.split(" ").map(el => el.length));
}
console.log(

        findShort("bitcoin take over the world maybe who knows perhaps"), //3);
        findShort("turns out random test cases are easier than writing out basic ones"), //3);
)