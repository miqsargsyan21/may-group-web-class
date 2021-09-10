class Calculator {
    #firstNumber;
    #secondNumber;

    constructor (firstNumber, secondNumber) {
        this.#firstNumber = firstNumber,
        this.#secondNumber = secondNumber;
    }

    print () {
        console.log("First number is " + this.#firstNumber + ". Second number is " + this.#secondNumber + ".");
    }

    set (firstNumber, secondNumber) {
        this.#firstNumber = firstNumber,
        this.#secondNumber = secondNumber;
    }

    add () {
        console.log(this.#firstNumber + this.#secondNumber);
        return this.#firstNumber + this.#secondNumber;
    }

    sub () {
        console.log(this.#firstNumber - this.#secondNumber);
        return this.#firstNumber - this.#secondNumber;
    }

    mul () {
        console.log(this.#firstNumber * this.#secondNumber);
        return this.#firstNumber * this.#secondNumber;
    }

    div () {
        if (this.#secondNumber) {
            console.log(this.#firstNumber / this.#secondNumber);
            return this.#firstNumber / this.#secondNumber;
        }
        console.log("A number cann't be divided by zero");
        return NaN;
    }
}

let a = new Calculator(7, 0);

a.add();
a.div();

console.log("-----------------");

a.set(21, 21);
a.mul();
a.print();