var request = require('request');

var url = "https://horizon-testnet.stellar.org/accounts/GDVZ5GNXNZ63O3HSY4ZQMUFB72VDWG6NBBHC2BMKWBCCO2GKLHIC2VDM/";

request.get(url, function (err, response, body) {
    if (err) {
        console.log("Error", err.message);
    }
    var json = JSON.parse(body);
    console.log("Sequence Number :" + json.sequence);
});