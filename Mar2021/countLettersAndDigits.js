function countLettersAndDigits(input) {


    return input.replace(/[^0-9a-z]/gi,"").length;
  }
  console.log(
    countLettersAndDigits("hel2!lo"),// 6);
    countLettersAndDigits("n!!_ice!!123"),// 7);
    countLettersAndDigits("1"),// 1);
    countLettersAndDigits("?"),// 0);
    countLettersAndDigits("12345f%%%t5t&/6"),// 10);
    countLettersAndDigits("aBcDeFg090"),// 10);
    countLettersAndDigits("u_n_d_e_r__S_C_O_R_E"),// 10);
  )