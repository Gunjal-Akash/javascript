const accountId = 12345
let accountEmail = "akash@google.com"
var accountPassword = "123456"
accountCity = "Jaipur"

// accountId = 2. not alloud

accountEmail = "gunjal@gmail.com"
accountPassword = "654321"
accountCity = "mumbai"

console.log(accountId);

/*
prefer not use to var
becuase of issue in block scope and functional scope 
*/

console.table([accountEmail, accountPassword, accountId, accountCity]);
