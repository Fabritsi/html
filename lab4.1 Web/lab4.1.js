// 1. Описати клас для збереження даних про об'єкт згідно із варіантом.+++
// 2. Утворити список із 3-5 об'єктів.+++
// 3. Описати клас для виводу таблиці на основі списку.+++
// 4. Доповнити клас методом додавання нового запису.+++
// 5. Доповнити клас методом вилучення запису, що відповідає певній умові.+++
// 6. На сторінці розмістити форму для додавання даних про новий об'єкт.+++
// 7. Доповнити кожен рядок таблиці кнопкою для вилучення даних про об'єкт.+++
// 8. Доповнити сторінку формою та кнопками для редагування даних про об'єкт.+++
// 9. Додати метод для підсвічування (зміни кольору фону рядків), записи яких відповідають певній умові.+++
// 10. Здійснити валідацію даних (ПІБ не може бути порожнім рядком, заробітна плата повинна бути невід'ємним числом, тощо)

// В2. Інформація  на сайті новин включає в себе: ID, заголовок новини, короткий зміст новини, 
// текст новини, дата публікації, кількість переглядів.

//Наш список із 3-х об'єктів.
let list = [
    {
        id:1,
        title:"Смерть на Закарпатті",
        describe: "Скоро всі загинуть",
        content: "Ковід всіх уб'є....",
        date: "20.03.2020",
        views: 3332
    },
    {
        id:2,
        title:"Студосінь УжНУ",
        describe: "Підготовка студентів до студосені",
        content: "Парубки та дівчата з різних факультетів знімають відео, щоб закликати абітуріентів на свій факультет.",
        date: "20.10.2021",
        views: 45432
    },
    {
        id:3,
        title:"Нова Ванга в Ужгороді",
        describe: "Календар Мая допомагає жінці яка передбачила президентство Зеленського",
        content: "Більше міліона людей записані до Ванги на прийом. Багато її відвідувачів говорять про точність передбачень босоркані. Є слухи про те що чаклунку звуть Галина!",
        date: "01.01.2012",
        views: 79900002
    }
]
//Описати клас для виводу таблиці на основі списку.
//описаний клас для збереження даних про об'єкт згідно із варіантом.
class RenderList {
    constructor(list) {
        this.list = list;
        this.DOMElement = null;
    }
    //створює новий рядок таблиці з данними
    rowTemlate(data) {  

        return `<tr id="${data.id}"><td> ${data.title} </td><td> ${data.describe} </td><td> ${data.content} </td><td> ${data.date} </td><td> ${data.views} </td>`
    }
    //генерує таблицю. Створюється заголовок кожного стовпця таблиці.
    render(parrent) {
        var j = 0; 
        let table = document.createElement("table");
        table.id = "t";
        let rows = "";
        table.innerHTML = '<tr><th> Заголовок </th><th> Короткий зміст </th><th> Інформація </th><th> Дата </th><th> Кількість переглядів </th></tr>'
        //кнопка для вилучення даних про об'єкт. (в кожному рядку)
            for (let item of this.list){
                    rows += this.rowTemlate(item)+'<td><button onclick="t1.delItem('+ item.id +')">X</button><button onclick="t1.editItem('+ item.id +')">Edit</button></td></tr>';
                    j++;
                }
                table.innerHTML += rows;
                this.DOMElement = table;
                parrent.appendChild(table);


               
                this.rowLight();
            }
            //метод додавання нового запису.
            addItem (){
                var t = document.getElementById("t");
                t.parentNode.removeChild(t);
                
                let content =  document.getElementById("content").value;
                let title = document.getElementById("title").value;
                let describe = document.getElementById("describe").value;
                let date =  document.getElementById("date").value;
                let views =document.getElementById("views").value;

                var maxIndex = parseInt(this.list.length)-1;
                var newId = this.list[maxIndex]["id"]+1;
                
                let item = {
                    id: newId,
                    title: title,
                    describe: describe,
                    content: content,
                    date: date,
                    views: views
                }
                
                this.list.push(item);
                this.render(document.body)
                     
            }
    //метод вилучення запису, що відповідає певній умові. (В нашому випадку просто кнопка вилучення)
    delItem(id){
        var t = document.getElementById("t");
        t.parentNode.removeChild(t);
        var k = id;
        var index = this.list.findIndex(function(objId) {
            return objId.id == k;
          });
        list.splice(index,1);
        this.render(document.body);
    }
    //кнопка для редагування даних про об'єкт. (Редагування робиться в тій самій формі де й записуються данні)
    editItem(id){
        var t = document.getElementById("t");
        t.parentNode.removeChild(t);
        var k = id;
        var index = this.list.findIndex(function(objId) {
            return objId.id == k;
          });
        let content =  document.getElementById("content").value;
        let title = document.getElementById("title").value;
        let describe = document.getElementById("describe").value;
        let date =  document.getElementById("date").value;
        let views =document.getElementById("views").value;

        this.list[index]["id"]=id;
        this.list[index]["content"]=content;
        this.list[index]["title"]=title;
        this.list[index]["describe"]=describe;
        this.list[index]["date"]=date;
        this.list[index]["views"]=views;

        this.render(document.body);
    }
    //метод для підсвічування (зміни кольору фону рядків), записи яких відповідають певній умові.(В нашому випадку кожен другий рядок підсвічується зеленим)
    rowLight(){

        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i]["id"]%2==0) {
                var row = document.getElementById(list[i]["id"]);
                row.style="background:green";
                //console.log(list[i]["id"]);
            }
            
        }

    }

}

let t1 = new RenderList(list);
t1.render(document.body);