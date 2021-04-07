decodeMorse = function(morseCode){
    const MORSE_CODE = {
        '.-': 'A',
        '-…': 'B',
        '-.-.': 'C',
        '-..': 'D',
        '.': 'E',
        '..-.': 'F',
        '--.': 'G',
        '….': 'H',
        '..': 'I',
        '.---': 'J',
        '-.-': 'K',
        '.-..': 'L',
        '--': 'M',
        '-.': 'N',
        '---': 'O',
        '.--.': 'P',
        '--.-': 'Q',
        '.-.': 'R',
        '…': 'S',
        '-': 'T',
        '..-': 'U',
        '…-': 'V',
        '.--': 'W',
        '-..-': 'X',
        '-.--': 'Y',
        '--..': 'Z',
        '-----': '0',
        '.----': '1',
        '..---': '2',
        '…--': '3',
        '….-': '4',
        '…..': '5',
        '-….': '6',
        '--…': '7',
        '---..': '8',
        '----.': '9',
      }

    return morseCode.trim().split("   ").map(word => {
        return word.split(" ").map(char => MORSE_CODE[char]).join("");
    }).join(" ");
    // const decodeLetter = letter => {
    //     return MORSE_CODE[letter];
    //   }

    //   const decodeWord = word => {
    //     return word.split(' ').map(decodeLetter).join('');
    //   }

    // //   const decodeMorse = morseCode => {
    //     return morseCode.trim().split('   ').map(decodeWord).join(' ');
    //   }
  }
  console.log(
    decodeMorse('.... . -.--   .--- ..- -.. .'), //'HEY JUDE'
  )