//Step 4

var request = require('request');

var transaction_blob = "AAAAAH6Sq76F4cHVMWvGG4AtNtFVIvayUxSgR401rPY9ej3TAAAAZABgfFgAAAABAAAAAAAAAAAAAAABAAAAAAAAAAEAAAAAA1AD70PJiN0fFO7myN9rIrKz1PvyHsNnqM+upADstB0AAAAAAAAAADuaygAAAAAAAAAAAT16PdMAAABAVh429dD0Z3ETUbLls3zMEnOiqL2Oxhwdr3mhR/Qet4ztUOiaUdGYsI1yiLwAcFaPslaxA0eL2JAd+i/WsCSzCg=="
var url = "https://horizon-testnet.stellar.org/transactions"
var details =
    {
        "tx": transaction_blob
    }

request.post(url, { form: details }, function (err, response, body) {
    if (err) {
        console.log("Error", err.message);
    }
    console.log(response);
    console.log(body);
});