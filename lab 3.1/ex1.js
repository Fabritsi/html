function weeks_(){
    var days = prompt("Введіть дні:");
    var weeks= parseInt(days)/7;
    var fullWeeks = Math.trunc(weeks);
    document.write("Кількість тижнів:"+fullWeeks);
}