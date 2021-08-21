//first exercise
function mtpTable(firstNumber, secondNumber = 1) {
    if (secondNumber === 11) {
        return 0;
    }

    console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
    return mtpTable(firstNumber, ++secondNumber);
}

mtpTable(3);
console.log("--------------------");

//second exercise
function evenOrOdd(number) {
    if (number % 2 == 0) {
        console.log(`The number(${number}) is even`)
    } else {
        console.log(`The number(${number}) is odd`)
    }
    return 0;
}

evenOrOdd(7);
console.log("--------------------");

//Third exercise
function calculate(firstNumber, secondNumber, operator) {
    /*
    switch (operator) {
        case "+":
            console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
            return 0;
        case "-":
            console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
            return 0;
        case "*":
            console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
            return 0;
        case "/":
            console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
            return 0;
        default:
            console.log("Please, input correct operator.");
            return -1;
    }*/

    const result = new Map();
    result.set("+", firstNumber + secondNumber);
    result.set("-", firstNumber - secondNumber);
    result.set("*", firstNumber * secondNumber);
    result.set("/", firstNumber / secondNumber);
    if (result.has(operator)) {
        console.log(`${firstNumber} ${operator} ${secondNumber} = ${result.get(operator)}`);
    } else { console.log("Please, input correct operator."); }
    return 0;
}

calculate(1, 2, "+");
console.log("--------------------");

//fouth exercise
Array.prototype.mapDbl = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(arr[i], i, this);
    }
}

let arr = [1, 2, 8, 4, 7, 0];

arr.mapDbl(function(element, index, arrCopy) {
    console.log(`arr[${index}] = ${element} ::: ${arrCopy}`);
});