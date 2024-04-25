let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count  = 0

function increment() {
    count += 1
    countEl.textContent = count //Ponemos textcontent porque innerText da fallos con formato 

}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr 
    countEl.textContent = 0
    count = 0
}
