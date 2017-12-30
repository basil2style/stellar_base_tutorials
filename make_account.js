
//Source from https://www.stellar.org/developers/horizon/reference/tutorials/follow-received-payments.html
//Step 1
var Keypair = require("stellar-base").Keypair;

var newAccount = Keypair.random();


console.log("New key pair created!");
console.log("  Account ID: " + newAccount.publicKey());
console.log("  Seed: " + newAccount.secret());
