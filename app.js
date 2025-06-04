let num = 42
let firstName = 'Sergey'
const isProgrammer = true


const resultElement = document.getElementById('result')
const input1 = documet.getElementById('input1')
const input2 = documet.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')



submitBtn.onclick = function () {
    const sum = Number(input1.Value) + Number(input2.Value)
    resultElement.textContent = sum
}

