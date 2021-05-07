const FIRST_NAMES = {
    A: 'Alpha',
    B: 'Beta',
    C: 'Cache',
    D: 'Data',
    E: 'Energy',
    F: 'Function',
    G: 'Glitch',
    H: 'Half-life',
    I: 'Ice',
    J: 'Java',
    K: 'Keystroke',
    L: 'Logic',
    M: 'Malware',
    N: 'Nagware',
    O: 'OS',
    P: 'Phishing',
    Q: 'Quantum',
    R: 'RAD',
    S: 'Strike',
    T: 'Trojan',
    U: 'Ultraviolet',
    V: 'Vanilla',
    W: 'WiFi',
    X: 'Xerox',
    Y: 'Y',
    Z: 'Zero',
}
const LAST_NAMES = {
    A: 'Analogue',
    B: 'Bomb',
    C: 'Catalyst',
    D: 'Discharge',
    E: 'Electron',
    F: 'Faraday',
    G: 'Gig',
    H: 'Hacker',
    I: 'IP',
    J: 'Jabber',
    K: 'Killer',
    L: 'Lazer',
    M: 'Mike',
    N: 'n00b',
    O: 'Overclock',
    P: 'Payload',
    Q: 'Quark',
    R: 'Roy',
    S: 'Spy',
    T: 'T-Rex',
    U: 'Unit',
    V: 'Virus',
    W: 'Worm',
    X: 'X',
    Y: 'Yob',
    Z: 'Zombie',
}
function aliasGen(){
    if (arguments["0"][0].toUpperCase() >= "A" && arguments["0"][0].toUpperCase() <= "Z" &&  arguments["1"][0].toUpperCase() >= "A" && arguments["1"][0].toUpperCase() <= "Z") return  FIRST_NAMES[arguments["0"][0].toUpperCase()] + " " + LAST_NAMES[arguments["1"][0].toUpperCase()];
    else return  "Your name must start with a letter from A - Z."
}

console.log(
    aliasGen("Mike", "Millington"),// "Malware Mike");
    aliasGen("Fahima", "Tash"), //"Function T-Rex");
    aliasGen("Daisy", "Petrovic"),// "Data Payload");
    aliasGen("7393424", "Anumbha"), //"Your name must start with a letter from A - Z.");
    aliasGen("Anuddanumbha", "23200")
)