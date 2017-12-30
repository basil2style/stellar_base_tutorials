var StellarBase = require("stellar-base");
var sequenceNumber = "27158315163189248";
StellarBase.Network.useTestNetwork();

//Step 3
var keypair = StellarBase.Keypair.fromSecret('SCU36VV2OYTUMDSSU4EIVX4UUHY3XC7N44VL4IJ26IOG6HVNC7DY5UJO');
var account = new StellarBase.Account(keypair.publicKey(), sequenceNumber);
var asset = StellarBase.Asset.native();

var amount = "100";

//This will create a transaction blob. Inorder to submit this transaction to Stellar core, we have to use
/*
curl -H "Content-Type: application/json" -X POST -d '{"tx":"[TransactionBlob]"}' "https://horizon-testnet.stellar.org/transactions"
*/

var transaction = new StellarBase.TransactionBuilder(account)
.addOperation(StellarBase.Operation.payment({
  destination: StellarBase.Keypair.random().publicKey(),
  asset: asset,
  amount: amount
}))
//.addSigner(keypair)
.build();

transaction.sign(keypair);
console.log(transaction.toEnvelope().toXDR().toString("base64"));

