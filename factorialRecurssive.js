// function factorial(num) {
//     let facto = 1;
//     for (let i = num; i >= 1; i--) {

//         facto = facto * i;

//     }
//     return facto;

// }
// let result = factorial(10);
// console.log(result)
// factorial using recursion...
function factorial(num) {
    if (num == 0) {
        return 1;
    } else {
        return factorial(num - 1) * num;
    }
}
let result = factorial(10)
console.log(result)