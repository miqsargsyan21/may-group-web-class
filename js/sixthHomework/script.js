function foo(number) {
    if (number < 0) {
        return foo(number * (-1));
    } else if (number < 10) {
        return number;
    }
    return (number % 10) + foo(parseInt(number / 10));
}

console.log(foo(-103078));
console.log(foo(12300));