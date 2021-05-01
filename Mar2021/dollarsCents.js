function formatMoney(amount){
    return "$" + amount.toFixed(2).toString();
  }

  console.log(
    formatMoney(39.99), //'$39.99', 'That\'s not formatted the way we expected.'
    formatMoney(39.99234),
    formatMoney(9.),
  )