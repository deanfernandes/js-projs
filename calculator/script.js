let leftOperand = '';
let rightOperand = '';
let operator = '';
const leftOperandEl = document.getElementById("left-operand");
const rightOperandEl = document.getElementById("right-operand");
const operatorEl = document.getElementById("operator");

const buttons = document.getElementsByTagName("button");
[...buttons].forEach( (button)=> {
    button.addEventListener('click', (e)=> {
        switch(e.target.innerText) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '.':
                {
                    appendNumber(e.target.innerText);
                    updateScreen();
                    break;
                }
            case '+':
            case '-':
            case 'x':
            case '/':
                {
                    setOperator(e.target.innerText);
                    updateScreen();
                    break;
                }
            case 'C':
                {
                   clearScreen();
                   break;
                }
            case '=':
                {
                    calculate();
                    updateScreen();
                }
        }
    });
});

function appendNumber(number) {
    if(operator === '') {
        if(number === '.' && (leftOperand.includes('.') || leftOperand === '')) return;
        leftOperand += number;
    }
    else {
        if(number === '.' && (rightOperand.includes('.') || rightOperand === '')) return;
        rightOperand += number;
    }
}

function updateScreen() {
    leftOperandEl.innerText = leftOperand;
    rightOperandEl.innerText = rightOperand;
    operatorEl.innerText = operator;
}

function setOperator(op) {
    if(rightOperand !== '' || leftOperand === '') {
        return;
    }

    operator = op;

    leftOperand = leftOperand;
}

function trimTrailingDot(str) {
    if(str.endsWith('.')){
        return str.slice(0, -1);
    }
    return str;
}

function clearScreen() {
    leftOperand = '';
    rightOperand = '';
    operator = '';
    leftOperandEl.innerText = '';
    rightOperandEl.innerText = '';
    operatorEl.innerText = '';
}

function calculate() {
    let equation = leftOperand + operator + rightOperand;
    equation = equation.replace(/x/i, '*');
    leftOperand = eval(equation);
    rightOperand = '';
    operator = '';
}