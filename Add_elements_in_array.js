// //To add all elements in array
// var array2 = [10, 20, 30, 40]
// var sum =0

// for (let k=0; k<array2.length; k++)
// {
//     sum = sum + array2[k]
//     console.log(sum)
// }

//Second method
const numbers = [10,20,30];
const total = numbers.reduce(sum);
function sum (a,b){
    return a+b;
}
console.log(total);
