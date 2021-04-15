function cutIt(arr){

    let length = [];
    arr.forEach(word => length.push(word.length));
    length = Math.min(...length);


    return arr.reduce((acc,curr,idx) => {
        acc.push(curr.slice(0,length));

        return acc;
    },[]);

}
console.log(
cutIt(["ab","cde","fgh"]) ,// ["ab","cd","fg"]
cutIt(["abc","defgh","ijklmn"]) ,// ["abc","def","ijk"]
cutIt(["codewars","javascript","java"]) ,// ["code","java","java"]
)

// var str="dsfsdwesdfsadfwerfsdfsdfsdfsdfsdf";

// console.log(str.length)  //output: 33
