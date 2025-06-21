const accountId = 12345;
let accountEmail = "rohit@gmail.com";
var accountcity = "jaipur";

//console.log(accountId);

accountEmail = "ruhi@gmail.com";
accountcity = "pur";
// ACCOUNTID=2 NOT ALLOWED
accountEmail = "hc@.com";
accuntpassward = "212121212";
accountcity = "bengaluru";

console.table([accountId, accountEmail, accountcity, accuntpassward]);
// prefer not to use var
// because of issue in block scope and functional scope
