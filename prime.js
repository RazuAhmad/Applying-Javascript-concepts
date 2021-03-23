function primenumber(num) {

    for (let i = 2; i < num; i++) {

        if (num % i == 0) {
            return "This is not a prime number";

        } else {
            return "This is a prime number";


        }
        let primes = primenumber(20);


    }

    console.log(primes)