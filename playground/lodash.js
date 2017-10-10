const _ = require('lodash');


var hell = _.pick({name:'harout',age:23},["name","age"]);
console.log(hell);