function add(a, b){


    return (a * 1) === (b * 1);
}
console.log(
    add('1', 1),// true);
    add(1, '1'),// true);
    add(1, '0'), //false);
    add('11', 11),// true);
    add(12, 12),// true);
    add(120, '021'), //false);
)