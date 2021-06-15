function race(v1, v2, g) {

    if (v1 >= v2) return null

    const time = g / ( v2 - v1 )

    let hours = Math.floor(time)
    let minutes = Math.floor((time * 60) % 60)
    let seconds = Math.floor((time * 3600) % 60)
    // console.log(hours)
    return [ hours, minutes, seconds ]
}
console.log(
    race(720, 850, 70),// [0, 32, 18])
    race(80, 91, 37),// [3, 21, 49])
    race(80, 100, 40),// [2, 0, 0])
)

// // function race(v1, v2, g){
//   let time=g/(v2-v1);
//   return v2>v1 ? [Math.floor(time),Math.floor(time*60%60),Math.floor(time*3600%60)] : null;
// }
// //
// function race(v1, v2, g) {
//     if (v2 < v1) { return null; }

//     var seconds = Math.floor(g / (v2 - v1) * 3600);
//     var h = Math.floor(seconds / 3600);
//     var m = Math.floor((seconds - h * 3600) / 60);
//     var s = seconds - h * 3600 - m * 60;

//     return [h, m, s];
// //   }
// function race (v1, v2, g) {

//     if (v1 >= v2) return null

//     const time = g / ( v2 - v1 )

//     let hours = Math.floor(time)
//     let minutes = Math.floor((time * 60) % 60)
//     let seconds = Math.floor((time * 3600) % 60)

//     return [ hours, minutes, seconds ]
//   }