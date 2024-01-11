let a = document.getElementById("value");
let btnDecrease=document.getElementById("decrease");

btnDecrease.addEventListener("click",dec);
let btnReset=document.getElementById("reset");
btnReset.addEventListener("click",res)


let btnIncrease=document.getElementById("increase");
btnIncrease.addEventListener("click",inc)

function dec() {
    let previousValue = a.textContent;
    let updatedValue = parseInt(previousValue) - 1;
    a.textContent = updatedValue;
    if (updatedValue > 0) {
        a.style.color = "green";
    } else if (updatedValue < 0) {
        a.style.color = "red";
    } else {
        a.style.color = "black";
    }
}

function res() {
    let updatedValue = 0;
    a.textContent = updatedValue;
    a.style.color = "black";

}

function inc() {
    let previousValue = a.textContent;
    let updatedValue = parseInt(previousValue) + 1;
    a.textContent = updatedValue;
    if (updatedValue > 0) {
        a.style.color = "green";
    } else if (updatedValue < 0) {
        a.style.color = "red";
    } else {
        a.style.color = "black";
    }

}