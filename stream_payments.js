var EventSource = require('eventsource');
var es = new EventSource('https://horizon-testnet.stellar.org/accounts/GDVZ5GNXNZ63O3HSY4ZQMUFB72VDWG6NBBHC2BMKWBCCO2GKLHIC2VDM/payments');

//Streaming event catcher
//Step 2
es.onmessage = function(message) {
    var result = message.data ? JSON.parse(message.data) : message;
    console.log('New payment:');
    console.log(result);
};
es.onerror = function(error) {
    console.log('An error occured!');
}