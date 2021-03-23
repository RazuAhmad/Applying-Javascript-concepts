function fibonacci(n) {
    let fibo = [0, 1, 1];

    for (let i = 3; i <= n; i++) {

        fibo[i] = fibo[i - 1] + fibo[i - 2];

    }
    return fibo;

}
let result = fibonacci(12);
console.log(result)