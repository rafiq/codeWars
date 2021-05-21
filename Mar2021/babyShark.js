function babySharkLyrics(){
    let lyrics = ["Baby shark", "Mommy shark", "Daddy shark", "Grandma shark", "Grandpa shark", "Let's go hunt", "Run away,..." ]
      let firstLine = `, doo doo doo doo doo doo doo\n`
    let result = [];
    for (let i = 0; i < lyrics.length - 1; i++) {
        result.push((lyrics[i] + firstLine).repeat(3));
        result.push(lyrics[i] + "!\n")
    }
    result.push(lyrics[lyrics.length - 1])
    return result.join(" ")
    }

  console.log(
    babySharkLyrics(),
  )

//   Though mine did not work, I think it did work, but not sure about the character count because I think this program is counting spacces as well as characters. Genius below. I did not know you could use methods on a template literal string! AWESOME!
names = ["Baby shark", "Mommy shark", "Daddy shark", "Grandma shark", "Grandpa shark", "Let's go hunt"];
return names.map((name)=> `${name},${" doo".repeat(6)}\n`.repeat(3) + `${name}!\n`).join("") + "Run away,…";