// 1. Add (1 point)
// Write a function named "add" which takes two arguments (as input variables) 
// and returns their sum.
// You may use built-in operators in order to finish this kata.
// For example, calling add(2, 4) should return a result of 6.
function Add(a, b){
    return a + b 
}
console.log ('Kaka 01 Adding point', Add(10, 23))

// 2. Multiply (2 points)
// Write a function named "multiply" which takes two arguments (as input variables)
//  and returns their product.
// You may not use built-in math operators or functions 
// (such as the * multiplication operator). Instead, you will use a FOR loop which calls your add function from the first kata.
// For example, calling multiply(6, 4) 
// should return a result of 24, which could be expressed by adding 6 to itself 4 times:
// // 6 + 6 + 6 + 6 = 24

function Multiply(x,y){
    Total = 0
    for (i = 0; i<y; i++){
   Total = Add(Total, x)}
   return Total
}
console.log('Kata 02 Multiplying:', Multiply(6,8))

//3. Power/Exponentiation (2 points)
// Write a function named "power" which takes two arguments ( x and n) and returns the the result of raising x to the nth power.
// You may not use built-in math operators or functions (such as the * multiplication operator), or the ** operator for power/exponentiation). Instead, you will re-use functions you wrote in earlier katas to write this function.
// For example, if we called power(2, 8), we should return 256 by multiplying 2 by itself 8 times:
// 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 = 256
// And to achieve the correct result for power(3, 4), we would want to multiply 3 by itself 4 times:
// 3 * 3 * 3 * 3 = 81
function Power(x, n){
     Total = 1;
    while (n > 0){
        Total = Multiply(Total, x);
        n = Add(n, -1);
    }
    return Total;
}
console.log('Kata 03 Multiplying one by one', Power(2, 8))
console.log('Kata 03 Multiplying one by one', Power(3, 4))

//4. Factorial (2 points)
// Write a function named "factorial" which takes a single argument and returns the factorial of that value.
// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will re-use functions you wrote in earlier katas to write this function.
// A factorial multiplies a given number by every number below it. For example, "5 factorial" (usually symbolized by 5! in Mathematics) would be:
// 5 * 4 * 3 * 2 * 1 = 120
function Factorial(x){
    Total = 1;
    for (let a = 1; a < Add(x, 1); a = Add(a, 1)){
        Total = Multiply(Total, a);
    }
    return Total;
}
console.log('Kata 04 Multiplies a give number by every number below it', Factorial(5))
console.log('Kata 04 Multiplies a give number by every number below it', Factorial(4))
console.log('Kata 04 Multiplies a give number by every number below it', Factorial(6))
