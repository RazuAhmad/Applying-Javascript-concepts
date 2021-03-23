function factorial(num) {
    let facto = 1;

    for (let i = 1; i <= num; i++) {

        facto = facto * i;



    }
    return facto;

}


console.log(factorial(10))