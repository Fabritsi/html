var a = function Inch(){
    var x = prompt("Введіть дюйми:")
    var b= parseFloat(x)*25.3995;
    document.write(b+"мм") 
}
let myElm = document.createElement("h1"); 
document.body.appendChild(myElm);
myElm.innerHTML = "Конвертер"; 

let btn = document.createElement("button");
btn.innerHTML = "Дюйми";
btn.type = "Зберегти";
btn.name = "formBtn";
document.body.appendChild(btn);
btn.onclick = a;