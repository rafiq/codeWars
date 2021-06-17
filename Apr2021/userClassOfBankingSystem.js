class User {
    constructor(name, balance, checking_account = false) {
        this.name = name,
        this.balance = balance,
        this.checking_account = checking_account
    }

    get withdraw() {
        return `${this.name} has ${this.balance  }`
    }
}

let Jeff = User('Jeff', 70, True)
let Joe = User('Joe', 70, True)
console.log(
    Jeff.withdraw(2), //'Jeff has 68.'),
)