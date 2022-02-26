const previousDisplay = document.querySelector('.previous-display');
const currentDisplay = document.querySelector('.current-display');
const numbers = document.querySelectorAll('.number-btn');
const operators = document.querySelectorAll('.operator-btn');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete-btn');

let firstNum = "";
let secondNum = "";
let operator = "";
let currentOperator = "";
let result;
let defaultFigure = 0;
let decimalCount = 0;

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

function power(firstNum, secondNum) {
    return firstNum ** secondNum;
}

function modulus(firstNum, secondNum) {
    return firstNum % secondNum;
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
        if(secondNum === 0)  {
           result = currentDisplay.textContent = "return ur certificate"
            return result.setAttribute('style, color: red')
        } else {
        return divide(firstNum, secondNum);
        }
    case '^':
        return power(firstNum, secondNum);
    case '%':
            return modulus(firstNum, secondNum);    
    }
}

numbers.forEach( number => {
    number.addEventListener('click', (e) => {
        
// // For  the decimal increment decimal counter
     if (number.value === ".") {
      decimalCount++;
      }

//   // For more than one decimal don't do anything. Return
      if (number.value === "." && decimalCount > 1) {
      return;
      }
        currentDisplay.textContent += number.textContent

        if(operator === "") {
      firstNum += e.target.innerText;
      console.log(firstNum) 
        } else {
            secondNum += e.target.innerText
            console.log(secondNum)
        }

    })
})

operators.forEach(operatorsBtn => {
       operatorsBtn.addEventListener('click', (e) => {
       
       previousDisplay.textContent = firstNum + operatorsBtn.textContent; 
       currentDisplay.textContent = secondNum    

    //    automatically assign 0 to firstNum when user press operator key first
       if(!firstNum) {
          firstNum = defaultFigure;
          let defaultNum = firstNum + operatorsBtn.textContent
          previousDisplay.textContent = defaultNum;
          console.log(defaultNum)
       } 
       
       decimalCount = 0;

       if(e.target.id !== "=") {

       currentOperator = operatorsBtn.textContent
       operator = e.target.id;
       console.log(operator)
       
       } else {
      
        previousDisplay.textContent = `${firstNum}${currentOperator}${secondNum} =`
        currentDisplay.textContent = result = operate(parseFloat(firstNum), parseFloat(secondNum), operator)
        console.log(result) 

        if(result) {
            firstNum = result;
            secondNum = "";
        }

       }
    })
})

clearBtn.addEventListener('click', () => {
    firstNum = "";
    secondNum = "";
    previousDisplay.textContent = "";
    currentDisplay.textContent = "";
    operator = "";
    decimalCount = 0;
})

deleteBtn.addEventListener('click', () => {
    if(operator === "") {

        currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
        firstNum = currentDisplay.textContent;

    } else {

        currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
        secondNum = currentDisplay.textContent;

    }
  
})