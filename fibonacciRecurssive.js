function fibonacci(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    if (n == 2) {
        return 1;
    }
    if (n == 3) {
        return 2;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }


}
let result = fibonacci(10);
console.log(result)