const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};
var token = jwt.sign(data, 'lol');
console.log (token);
var decoded = jwt.verify(token, 'lol');
console.log(decoded);
//
/*var message ='I am number 3';
var hash = SHA256(message).toString();
console.log(`Message: ${message}; Hash: ${hash}`);

var data ={
  id:4
};
var token = {
  data,
  hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}

var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

if (resultHash === token.hash) {
  console.log('Data not changed');
} else {
  console.log('Data changed');
}
*/