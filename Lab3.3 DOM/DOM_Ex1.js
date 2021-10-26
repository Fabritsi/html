var allWeeks = function weeks_(){
    var days = prompt("Введіть дні:");
    var weeks= parseInt(days)/7;
    var fullWeeks = Math.trunc(weeks);
    document.write("Кількість тижнів:"+fullWeeks);
}
let myElm2 = document.createElement("h1"); 
document.body.appendChild(myElm2);
myElm2.innerHTML = "Розрахувати тижні"; 

let btn2 = document.createElement("button");
btn2.innerHTML = "Тижні";
btn2.type = "Зберегти";
btn2.name = "formBtn";
document.body.appendChild(btn2);
btn2.onclick = allWeeks;