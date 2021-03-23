function factorial(num) {
    let i = 1;
    let facto = 1;
    while (i <= num) {
        facto = num * i;
        i++;

    }
    return facto;
}
let result = factorial(10);
console.log(result)