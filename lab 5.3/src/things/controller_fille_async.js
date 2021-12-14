const Things = require("./model_file_async");

const  thingController = {
    getAll: async(req, res) => {
      try {
          res.send(await Things.read());
      } catch (e) {
          console.log(e);
          res.status(500).send(e);
      }
    },
  
    getQuery: async(req, res) => {
      try {
          let queriedThings = await Things.read();
        if(req.query.name)
          queriedThings = queriedThings.filter((thing) => thing.name == req.query.name);

        if(req.query.priceS)
          queriedThings = queriedThings.filter((thing) => thing.priceS >= req.query.priceS);

          res.send(queriedThings);
      } catch (e) {
          console.log(e);
          res.status(500).send(e);
      }
    },
  
  
    getById: async(req, res) => {
      try {
        let thing = await Things.find((thing) => thing.id == parseInt(req.params.id)  );// чому при строгій рівності у прикладі працює а у мене ні?
        if (thing !== null) res.status(200).send(thing);
        
        else res.status(404).send("Not Found");
      } catch (e) {
          console.log(e);
          res.status(500).send(e);
      }
    },
  
  
    delete: async(req, res) => {
      try {
        let deletedThing= await Things.delete((thing) => thing.id === parseInt(req.params.id));
        if (deletedThing) {
            res.send(deletedThing);
        }
        else res.status(404).send("Not Found");
      }catch (e) {
          console.log(e);
          res.status(500).send(e);
      }
    },

    post: async(req, res) => {
        try {
            let newThing = await Things.create(req.body);
            res.send(newThing);
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
     },
     patch: async(req, res) => {
        try {
            let updatedThing = await Things.update((thing) => thing.id === parseInt(req.params.id), req.body);
            if (updatedThing) {
                res.send(updatedThing);
            } else res.status(404).send("Not Found");
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },

      getThing: async(req, res) => {
        try {
        let things = await Things.find((thing) => toInt(thing.priceS) < 2000 && thing.dateS == "20.12.2021");
          if (things !== null) res.status(200).send(things);
          else res.status(404).send("Not Found");
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    },
}

module.exports = thingController;