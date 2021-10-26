let myElm3 = document.createElement("h1"); 
document.body.appendChild(myElm3);
myElm3.innerHTML = "Побудувати піраміду";

let print = document.createElement("p"); 
document.body.appendChild(print);
print.innerHTML = "Ваша піраміда: <br/><br/>"; 


var pir1 = function pyramid_1(){
    var x = prompt("Введіть кількість сходинок:")
    for (i = 1; i < x; i++) {
      let a = 1;
      let j=0;
      do{document.write(a);j++;}while(j < i)
      document.write("<br/>")
  }
}

let btn3 = document.createElement("button");
btn3.innerHTML = "Піраміда";
btn3.type = "Зберегти";
btn3.name = "formBtn";
document.body.appendChild(btn3);
btn3.addEventListener("click", pir1);
