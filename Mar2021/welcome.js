const LANGUAGES = {english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso',
IP_ADDRESS_INVALID: 'Welcome',
IP_ADDRESS_NOT_FOUND: 'Welcome',
IP_ADDRESS_REQUIRED: 'Welcome'
}

function greet(language) {
    return LANGUAGES[language] ? LANGUAGES[language] : "IP_ADDRESS_INVALID";
}

console.log(
    greet('english'),// 'Welcome', "Your function should have returned 'Welcome'. Try again.");
    greet('dutch'),// 'Welkom', "Your function should have returned 'Welkom'. Try again.");
    greet('IP_ADDRESS_INVALID')
)

