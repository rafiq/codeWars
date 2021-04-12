// Simply wow.

function solve(s){
    return [...s].reduce((t,n,i)=>t+(+n%2?i+1:0),0);
  };