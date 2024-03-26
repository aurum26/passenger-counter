let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let saveNumber = document.getElementById("save-Number")
let clearNumber = document.getElementById("clear-Number")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveNumber.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function remove() {
    count -= 1
    countEl.textContent = count
}

function clearTextContent() {
    saveNumber.textContent = "";
    
}