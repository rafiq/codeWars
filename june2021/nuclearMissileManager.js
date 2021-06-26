function launchAll(launchMissile) {
    // console.log(launchMissile)
    // for(var i = 0; i < 5; i++) {
    //   setTimeout(()=> {
    //     launchMissile(i);
    //   }, i * 1000);
    // }

    // for (let i = 0; i < 5; i++) {
    //     setTimeout(() => launchMissile(i), i * 1000);
    //   }

    for(let i = 0; i < 5; i++) {
        setTimeout(function() {
          launchMissile(i);
        }, i * 1000);
      }
  }
//   function launchMissile(num) {
//       return `Missle number ${num} has launched.`
//   }
  console.log(
    launchAll()
  )