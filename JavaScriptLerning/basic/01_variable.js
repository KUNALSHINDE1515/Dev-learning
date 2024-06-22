const accountId = 144488795
let accountEmail = "kunalshinde!manil.com"
var accountPassword = "12345"
accountCity = "pune"

let accountState;
// accountId = 2    // not allowed

accountEmail = "ks@ks.com"
accountPassword = "56789"
accountCity = "mumbai"


console.log(accountId);


/*
prefer not to use var beacuse of issue in block 
block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])