function validate(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,100}$/.test(password);
  }
console.log(
    validate('djI38D55'),//true
    validate('a2.d412'),//false
    validate('JHD5FJ53'),//false
    validate('fdjn345'),//false
    validate('jfkdfj3j'),//false
    validate('123'),//false
    validate('abc'),//false
    validate('Password123'),//true
)
//   Test.expect(validate('djI38D55'),//djI38D55 - Expected true');
//   Test.expect(!validate(),//a2.d412 - Expected false');
//   Test.expect(!validate('JHD5FJ53'),//JHD5FJ53 - Expected false');
//   Test.expect(!validate('!fdjn345'),//!fdjn345 - Expected false');
//   Test.expect(!validate('jfkdfj3j'),//jfkdfj3j - Expected false');
//   Test.expect(!validate('123'),//123 - Expected false');
//   Test.expect(!validate('abc'),//abc - Expected false');
//   Test.expect(validate('Password123')//Password123 - Expected true');
// 5 kyu
// Regex Password Validation
// 105825288% of 1,6738,655 of 14,132EricFreeman
// JavaScript
// TRAINNEXT KATA
// Details
// Solutions
// Forks (13)
// Discourse (237)
// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric