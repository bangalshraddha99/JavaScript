const accountId=1208
let accountEmail="shra@google.com"
var accountPass="12345"
accountCity="Mumbai"
let accountState

//accountId=2 //not allowed

accountEmail="sb@sp.com"
accountPass="098765"
accountCity="Goa"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPass,accountCity,accountState])
