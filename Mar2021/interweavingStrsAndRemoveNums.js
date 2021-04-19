function interweave(s1, s2) {
    // s1=s1.split('')
    // s2=s2.split('')
    // let arr=[];
    // let str=(s1.join(``)+s2.join(``)).slice();
    // for (let i =0 ;i<str.length;i++){
    // if (i%2===0){arr.push(s1.shift())}
    // else {arr.push(s2.shift())}
    // }
    // return arr.join('').replace(/[0-9]/gi,'') ;
    // if (s1.length === 0) return "";
    // let pageOne = s1.split("")// s1.replace(/[0-9]/g,"").split("") || s1.split("");
    // let pageTwo = s2.split("")//replace(/[0-9]/g,"").split("") || s2.split("");
    // let combinedStr = (pageOne.join(``) + pageTwo.join(``)).slice();
    // let result = [];
// I am really lost on why the below code did not work in creating a new string or array with the letters as I did in the reduce method below.
    // for (let i = 0; i < combinedStr.lenth; i++) {
    //     if (i % 2 === 0) result.push(pageOne.shift())//|| "";
    //     else result.push(pageTwo.shift())// || "";
    // }

    // return result;

    // return pageOne.reduce((acc,curr,idx,arr) => {
    //         acc += curr;
    //         acc += pageTwo[idx] || ""

    //     return acc;
    // },"")

    // return combinedStr
    // ?I like how they accounted for undefined by using the if statement and then adding the letter to the new string. THis one was way too hard for no reason. Way too hard. No love. There were a lot of variables that they did not acccount for in this
    let s = '', l = Math.max(s1.length, s2.length);
  for(let i = 0; i < l; i++) {
    if(s1[i]) s += s1[i];
    if(s2[i]) s += s2[i];
  }
  return s.replace(/\d/g,'').trim();
  }
  console.log(
    // interweave("", ""),// "");
    // interweave("hlo", "el"),// 'hello');
    // interweave("h3lo", "el4"),// 'hello');
    interweave("Dn3 2elJh!H8ecntk2e  er6t el u548rse6hmto. o'tt2l on 95 a' 1epasc6e.W'lsr23pi8 2i 1o", "Don' tetllJ ho!nH e can't keep a secret. We'll surrpsie him too."),//'Don\'t tell John! He can\'t keep a secret. We\'ll surprise him too.'
  )