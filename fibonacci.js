let fibo = [0, 1];
let i = 2;
for (i = 2; i <= 10; i++) {
    // 0,1,1,2,3,5,8,13,21,34.....
    // fibo[2]=fibo[0]+fibo[1];
    // fibo[4]=fibo[2]+fibo[3];
    fibo[i] = fibo[i - 1] + fibo[i - 2];



}
console.log(fibo)