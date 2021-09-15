let data = {
    newState: true,
    isPreviousOperator: false,
    currentNumber: [],
    numbers: [],
    operators: []
};

let processWriting = (param) => {
    if (data.newState) {
        document.querySelectorAll("#result-div p")[0].innerText = "";
        data.newState = false;
    }
    if (typeof param === typeof 5) {
        data.currentNumber.push(param);
        data.isPreviousOperator = false;
        if (data.currentNumber.length === 2 && data.currentNumber[0] === 0) {
            data.currentNumber[0] = data.currentNumber[1];
            data.currentNumber.pop();
            let currentText = document.querySelectorAll("#result-div p")[0].outerText.split('');
            currentText = currentText.slice(0, currentText.length - 1);
            let exitText = currentText.join('') + param
            document.querySelectorAll("#result-div p")[0].innerText = exitText;
        } else {
            document.querySelectorAll("#result-div p")[0].innerText += param;
        }
    } else {
        data.operators.push(param);
        data.isPreviousOperator = true;
        data.numbers.push(parseInt(data.currentNumber.join("")));
        data.currentNumber = [];
        document.querySelectorAll("#result-div p")[0].innerText += param;
    }
}

let displayResult = () => {
    data.numbers.push(parseInt(data.currentNumber.join("")));
    data.currentNumber = [];
    
    for (let i = 0; i < data.operators.length; i++) {
        if (data.operators[i] === "*" || data.operators[i] === "/") {
            switch (data.operators[i]) {
                case "*":
                    data.numbers[i] *= data.numbers[i + 1];
                    break;
                case "/":
                    data.numbers[i] /= data.numbers[i + 1];
                    break;
            }
            let x = data.numbers.slice(0, i + 1);
            let y = data.numbers.slice(i + 2);
            for (let j = 0; j < y.length; j++) {
                x.push(y[j]);
            }
            data.numbers = x;

            x = data.operators.slice(0, i);
            y = data.operators.slice(i + 1);
            for (let j = 0; j < y.length; j++) {
                x.push(y[j]);
            }
            data.operators = x;
            i--;
        }
    }

    let result = data.numbers[0];
    for (let i = 0;  i < data.operators.length; i++) {
        switch(data.operators[i]) {
            case "+":
                result += data.numbers[i + 1];
                break;
            case "-":
                result -= data.numbers[i + 1];
                break;
        }
    }

    document.querySelectorAll("#result-div p")[0].innerText = result;
    data.numbers = [];
    data.operators = [];
    data.isPreviousOperator = false;
    data.newState = true;
}

let reseting = () => {
    data.numbers = [];
    data.operators = [];
    data.isPreviousOperator = false;
    data.currentNumber = [];
    document.querySelectorAll("#result-div p")[0].innerText = "";
}