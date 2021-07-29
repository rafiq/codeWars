function mix(s1, s2) {
    let result = ""
    s1 = s1.toLowerCase()
    s2 = s2.toLowerCase()
    s1 = s1.replace(/[" "]/g,"").split("").sort().filter(el => {
        let regex = new RegExp(el,"g")
        if (s1.match(regex)) {

            return  s1.match(regex).length > 1
        }
    }).join("")


    s2 = s2.replace(/[" "]/g,"").split("").sort().filter(el => {
        let regex = new RegExp(el,"g")
        if (s2.match(regex)) {

            return  s2.match(regex).length > 1
        }
    }).join("")
    // let replce = "a"
    // let regex = new RegExp(replce,"g")
    // return s1
    // return s1.match(regex)
    return s1.match(/[a-z]+/g)
  }
  console.log(
      mix("Are they here", "yes, they are here"),// "2:eeeee/2:yy/=:hh/=:rr")
      mix("looping is fun but dangerous", "less dangerous than coding"),// "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg")
      mix(" In many languages", " there's a pair of functions"),// "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")
      mix("Lords of the Fallen", "gamekult"),// "1:ee/1:ll/1:oo")
      mix("codewars", "codewars"),// "")
      mix("A generation must confront the looming ", "codewarrs"),// "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr"))
  )