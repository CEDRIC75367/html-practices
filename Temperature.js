let textBox = document.getElementById("textBox");
let toFah = document.getElementById("toFah");
let toCel = document.getElementById("toCel");
let result = document.getElementById("result");
let temp

document.getElementById("button").onclick = function convert(){
    if(toFah.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp +"F";

    }
    else if(toCel.checked){
        temp = Number(textBox.value);
        temp = (temp -32) *(5/9);
        result.textContent = temp +"C"
        

    }
    else{
        result.textContent= `Select a conversion type`;
    }

}