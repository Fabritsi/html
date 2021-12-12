
const express = require("express");


const PORT = 3000;

const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
  console.log("http://localhost:3000");
});



app.get('/', function(req, res) {
  
  res.send('hello');
});



let Things = [
    {
        id:"0",
        name:"vasa",
        dateS:"20.12.2021",
        dateF:"25.12.2021",
        priceS:"1000",
        priceF:"3000",
    },
    {
        id:"1",
        name:"kartina",
        dateS:"10.2.2022",
        dateF:"25.2.2022",
        priceS:"9000",
        priceF:"12000",
    },
    {
        id:"2",
        name:"pianino",
        dateS:"1.11.2023",
        dateF:"5.12.2023",
        priceS:"4500",
        priceF:"89000",
    },
]

app.get("/things", (req, res) => {//to show whole array Things
    res.send(Things);
});



//Запит торгів за вказану дату із початковою ціною що не перевищує Х.
// app.get("/things/query", (req, res) => {
//     let queriedThings = Things;
//     if (req.query.maxPriceS)
//         queriedThings = queriedThings.filter(
//             (thing) => thing.priceS <= parseFloat(req.query.maxPriceS)
//         );
//     if (req.query.date)

//         // queriedThings = queriedThings.filter((thing) =>
//         //     thing.dateS(req.query.date)
//         //); 
//         f = [];
//         for (let i = 0; i < Things.length; i++) {
//            if ( new Date(Things[i].dateS).getTime() >= Date.parse(req.query.date) && Date.parse(req.query.date) <= Date.parse(Things[i].dateF) )
//            {
//                f.push(Things[i]);
//                console.log(f);
//            }
           
//         }
//     res.send(f); 
// });

app.get("/things/request",(req,res) =>{
    let things = Things.find((thing) => parseInt(thing.priceS) <= 1000 &&  thing.dateS == "20.12.2021");//спитати про перевірку дати
    if (things !== null) res.status(200).send(things);
    else res.status(404).send("Not Found");
     
});
 
 //отримання інформації щодо одного об’єкту (за Кодом),

 app.get("/things/:id", (req, res) => {
    let thing = Things.find((thing) => thing.id == parseInt(req.params.id)  );// чому при строгій рівності у прикладі працює а у мене ні?
    if (thing !== null) res.status(200).send(thing);
    else res.status(404).send("Not Found");
  });

//видалення інформації про вказаний об’єкт.
app.delete("/things/:id", (req, res) => {
    let index =Things.findIndex((thing) => thing.id == parseInt(req.params.id));
    if (index >= 0) {
      let deletedThing = Things[index];
      Things.splice(index, 1);
      res.send(deletedThing);
    } else res.status(404).send("Not Found");
  });




//додавання одного об’єкту,

  app.post("/things", (req, res) => {
    let newThing = {
      id: Number(Date.now()),
      ...req.body,
    };
    Things.push(newThing);
    res.send(newThing);
  });



  // отримання вибірки з колекції згідно з вказаними параметрами (параметри передаються через рядок стану)
  app.post("/things/query", (req, res) => {
    
    let queriedThings = Things;

    if(req.query.name)
        queriedThings = queriedThings.filter((thingt) => thingt.name == req.query.name);

    if(req.query.priceS)
        queriedThings = queriedThings.filter((thingt) => thingt.priceS >= req.query.priceS);

    res.send(queriedThings);
    
  
    
      
  });

  //додавання колекції об’єктів,
  app.post("/abonents/collection", (req, res) => {
    /*
    BODY:
   [
       
        {
            "id":"4",
            "name":"couple",
            "dateS":"20.12.2021",
            "dateF":"25.12.2021",
            "priceS":"2000",
            "priceF":"3000",
        },
        {
           "id":"6",
            "name":"comp",
            "dateS":"20.12.2021",
            "dateF":"25.12.2021",
            "priceS":"5000",
            "priceF":"3000",
        }
        
   ]
    */
   
      for(let item of req.body){
        Things.push(item);
      }
     
      res.send(Things);
     });


  // редагування інформації  про вказаний об’єкт.
  app.patch("/things/:id", (req, res) => {
    let index =Things.findIndex((thing) => thing.id === parseInt(req.params.id));
        if (index >= 0) {
            let updatedThing =Things[index];
            for (let key in updatedThing)
                if (req.body[key]) updatedThing[key] = req.body[key];
            res.send(updatedThing);
        } else res.status(404).send("Not Found");
});