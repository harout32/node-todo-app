const jwt = require('jsonwebtoken');

let data = {
    id:4
};

let token = jwt.sign(data,'hellos')
console.log(jwt.verify(token,'hellos'));



// var SHA256  = require('crypto-js/sha256');

// var message = 'I am user number 3';
// var hash    = SHA256(message);

// console.log(`Message is : ${message}`);
// console.log(`hashed :  ${hash}`);

// let data = {id:43};

// let token = {
//     data:data,
//     hash: SHA256(JSON.stringify(data)+'secret key of mine').toString()
// }
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(data)).toString();
// let resultHash = SHA256(JSON.stringify(token.data)+'secret key of mine').toString();
// console.log(data === token.data);
// console.log(token.hash);
// console.log(resultHash);
// if(resultHash === token.hash) {

//     console.log('Data did not change');

// }else{
//     console.log('Data was manipulated');
// }
