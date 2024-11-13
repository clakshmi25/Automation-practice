const person = require ('./Constructor1')

const numbers = [10,20,30];
let final = numbers.map(function(value)
{
    return value*2;
}
);
console.log (final);

let Person = new person ("John", "Chris")
console.log(Person.fullname())