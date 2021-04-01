function solve(st,a,b){


    return st.slice(0,a) + st.slice(a,b + 1).split("").reverse().join("") + st.slice(b + 1);
   }
   console.log(
    solve("codewars",1,5),//"cawedors");
    solve("codingIsFun",2,100),//"conuFsIgnid");
    solve("FunctionalProgramming", 2,15),//"FuargorPlanoitcnmming");
    solve("abcdefghijklmnopqrstuvwxyz",0,20),//"utsrqponmlkjihgfedcbavwxyz");
    solve("abcdefghijklmnopqrstuvwxyz",5,20),//"abcdeutsrqponmlkjihgfvwxyz");
   )