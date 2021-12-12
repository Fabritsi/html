const Things = require ("./model.js");

const thingController = {

    getQuery:(req,res) =>{
        
        let queriedThings = Things;

        if(req.query.name)
            queriedThings = queriedThings.filter((thingt) => thingt.name == req.query.name);

        if(req.query.priceS)
            queriedThings = queriedThings.filter((thingt) => thingt.priceS >= req.query.priceS);

        res.send(queriedThings);
    },
    getById: (req,res) => {
        let thing = Things.find((thing) => thing.id == parseInt(req.params.id)  );// чому при строгій рівності у прикладі працює а у мене ні?
        if (thing !== null) res.status(200).send(thing);
        else res.status(404).send("Not Found");
    },
    delete:(req, res) => {
        let index =Things.findIndex((thing) => thing.id == parseInt(req.params.id));
        if (index >= 0) {
          let deletedThing = Things[index];
          Things.splice(index, 1);
          res.send(deletedThing);
        } else res.status(404).send("Not Found");

    },
    post: (req, res) => {
        let newThing = {
            id: Number(Date.now()),
            ...req.body,
        };
        Things.push(newThing);
        res.send(newThing);
    },
    patch: (req, res) => {
        let index =Things.findIndex((thing) => thing.id === parseInt(req.params.id));
        if (index >= 0) {
            let updatedThing =Things[index];
            for (let key in updatedThing)
                if (req.body[key]) updatedThing[key] = req.body[key];
            res.send(updatedThing);
        } else res.status(404).send("Not Found");
    },
    
    addCollection : (req,res) => {
        for(let item of req.body){
           Things.push(item);
          }
         
          res.send(Things);

    }, 

    getThing:(req,res) =>{
        let things = Things.find((thing) => toInt(thing.priceS) < 2000 && thing.dateS == "20.12.2021");//спитати про перевірку дати
        if (things !== null) res.status(200).send(things);
        else res.status(404).send("Not Found");
    },




};
module.exports = thingController;