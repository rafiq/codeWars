function calc(x){
    let total1 = x.split("").reduce((acc,curr) => acc + curr.charCodeAt(),"")
    let total2 = total1.split("").reduce((acc,curr) => {
        if (curr === "7") acc += "1";
        else acc += curr;
        return acc;
    },"")
    return total1.split("").reduce((acc,curr) => acc + Number(curr),0) - total2.split("").reduce((acc,curr) => acc + Number(curr),0);
}
console.log(
    calc('ABC'),// 6);
    calc('abcdef'),// 6);
    calc('ifkhchlhfd'),// 6);
    calc('aaaaaddddr'),// 30);
    calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),// 96);
)