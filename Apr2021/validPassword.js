function validate(password) {
    return  /^[A-Za-z0-9]{6,}$/.test(password) &&
            /[A-Z]+/           .test(password) &&
            /[a-z]+/           .test(password) &&
            /[0-9]+/           .test(password) ;
  }
  console.log(
    validate('djI38D55'),// 'djI38D55 - Expected true');
    !validate('a2.d412'),// 'a2.d412 - Expected false');
    !validate('JHD5FJ53'),// 'JHD5FJ53 - Expected false');
    !validate('!fdjn345'),// '!fdjn345 - Expected false');
    !validate('jfkdfj3j'),// 'jfkdfj3j - Expected false');
    !validate('123'),// '123 - Expected false');
    !validate('abc'),// 'abc - Expected false');
    validate('Password123'),// 'Password123 - Expected true');
  )