function factorial(n) {

if ( n < 0) {
    return "Undefined (factorial is not defined for negative numbers)";
} else if (n === 0 || n === 1) {
    return 1;
}
else {
    let result = 1;
  }
for (let i =2; i <=n;i++) {
    result *= i;
}
return result;
}


const number =2;
const result = factorial(number);
console.log('The Factorial of ${number} is ${result}');
