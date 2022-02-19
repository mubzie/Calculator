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

function power(firstNum, secondNum) {
    return firstNum ** secondNum;
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
    case '^':
        return power(firstNum, secondNum);
    }
}

numbers.forEach( number => {
    number.addEventListener('click', (e) => {

        previousDisplay.textContent += number.textContent
         
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
       
       previousDisplay.textContent = firstNum + operatorsBtn.textContent;     

    //    automatically assign 0 to firstNum when user press operator key first
       if(!firstNum) {
           firstNum = 0;
          let defaultNum = firstNum + operatorsBtn.textContent
          previousDisplay.textContent = defaultNum;
          console.log(firstNum)
       } 

       if(e.target.id !== "=") {
    
       currentOperator = operatorsBtn.textContent
       operator = e.target.id;
       console.log(operator)
       
       } else {
      
        // previousDisplay.textContent = `${firstNum}${currentOperator}${secondNum} ${operatorsBtn.textContent }`
        previousDisplay.textContent = `${firstNum}${currentOperator}${secondNum}`
        currentDisplay.textContent = result = operate(parseInt(firstNum), parseInt(secondNum), operator)
        
        console.log(result) 

       }
    })
})

clearBtn.addEventListener('click', () => {
    firstNum = "";
    secondNum = "";
    previousDisplay.textContent = "";
    currentDisplay.textContent = "";
    operator = "";
})

// deleteBtn.addEventListener('click', () => {
// if(!operator) {
//     firstNum = previousDisplay.textContent.slice(0, -1)
//     previousDisplay.textContent = firstNum;

// } else {
// secondNum = previousDisplay.textContent.slice(0, -1)
//         previousDisplay.textContent = secondNum

// }
    
// })

// deleteBtn.addEventListener('click', () => {
//     if(!operator) {
//         firstNum = previousDisplay.textContent.slice(0, -1)
//         previousDisplay.textContent = firstNum;
    
//     } else {
//     secondNum = previousDisplay.textContent.slice(0, -1)
//             // previousDisplay.textContent = secondNum
//     }
//        previousDisplay.textContent = previousDisplay.textContent.toString().slice(0, -1) 
//     })