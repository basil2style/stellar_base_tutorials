var EventSource = require('eventsource');
var es = new EventSource('https://horizon-testnet.stellar.org/accounts/GB7JFK56QXQ4DVJRNPDBXABNG3IVKIXWWJJRJICHRU22Z5R5PI65GAK3/payments');

//Streaming event catcher
es.onmessage = function(message) {
    var result = message.data ? JSON.parse(message.data) : message;
    console.log('New payment:');
    console.log(result);
};
es.onerror = function(error) {
    console.log('An error occured!');
}