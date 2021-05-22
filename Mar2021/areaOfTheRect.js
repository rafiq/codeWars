function area(d,l){
    if (d <= l) return "Not a rectangle"
        let side = Math.sqrt(Math.pow(d,2) - Math.pow(l,2))
        return +(side * l).toFixed(2);
    }
    console.log(
        area(5,4),//12);
        area(10,6),//48);
        area(13,5),//60);
        area(12,5),//54.54);
    )