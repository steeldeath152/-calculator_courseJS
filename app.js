let num = 42
let firstName = 'Sergey'
const isProgrammer = true


const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = "red"
    } else {
        resultElement.style.color = "green"
    }
    resultElement.textContent = result
}

submitBtn.onclick = function () {
    if (action == '+') {
        const sum = Number(input1.Value) + Number(input2.Value)
        pritResult(sum)
    } else if (action == '-') {
        const sum = Number(input1.Value) - Number(input2.Value)
        pritResult(sum)
    }
    
}

