const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.number-btn');
const operators = document.querySelectorAll('.operator-btn');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete-btn');

let firstNum = "";
let secondNum = "";
let operator = "";
let result = 0;

function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}

function operate(firstNum, secondNum, operator) {
    switch(operator) {
    case '+':
        return add(firstNum, secondNum);
    case '-':
        return subtract(firstNum, secondNum);
    case 'x':
        return multiply(firstNum, secondNum);
    case '/':
        return divide(firstNum, secondNum);
    }
}

buttons.forEach( button => {
    button.addEventListener('click', (e) => {

        document.querySelector('.display').textContent += button.textContent
         

        if(operator === "") {
      firstNum += e.target.innerText;
      console.log(firstNum) //
        } else {
            secondNum += e.target.innerText
            console.log(secondNum)
        }
    })
})


operators.forEach(operatorsBtn => {
       operatorsBtn.addEventListener('click', (e) => {

    //    document.querySelector('.display').textContent += operatorsBtn.textContent
       display.textContent += operatorsBtn.textContent
       
       if(e.target.id !== "=") {
       operator = e.target.id;
       console.log(operator)

       } else {

        result = operate(parseInt(firstNum), parseInt(secondNum), operator)
       console.log(result) 

       }
    })
})

clearBtn.addEventListener('click', () => {
    firstNum = 0;
    secondNum = 0;
    display.textContent = "";
    operator = "";
})

