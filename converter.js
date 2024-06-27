let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let weightEl=document.getElementById("weight-el")
let volumeEl= document.getElementById("volume-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meters = ${baseValue * meterToFeet} feet` 

    weightEl.textContent = `${baseValue} Kilograms = ${baseValue * kiloToPound} Pounds` 

    volumeEl.textContent= `${baseValue} Liters = ${baseValue * literToGallon} Gallons` 
})