const Thing = require("./model_db");
const {Op} = require("sequelize");



const thingController = {
  getAll: async(req, res) => {
    try {
        res.send(await Thing.findAll());
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
  },

  getQuery: async(req, res) => {
    try {
        let queryObject = { where:{} };
        if (req.query.priceS)
            queryObject.where.priceS= { [Op.gte] : req.query.priceS};//спитати як дістати це поле в скюл
        if (req.query.name)
            queryObject.where.name = { [Op.substring]:req.query.name };
        console.log(queryObject)
        let queriedThings = await Thing.findAll(queryObject);
        res.send(queriedThings);
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
  },

  getById: async(req, res) => {
    try {
        let thing = await Thing.findByPk(parseInt(req.params.id));
        if (thing !== null) res.status(200).send(thing);
        else res.status(404).send("Not Found");
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
  },

  delete: async(req, res) => {
    try {
        let deletedThing = await Thing.findByPk(parseInt(req.params.id));
        if (deletedThing) {
            await deletedThing.destroy();
            res.send(deletedThing);
        } else res.status(404).send("Not Found");
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
  },
  post: async(req, res) => {
    try {
        let newThing = await Thing.create(req.body);
        res.send(newThing);
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
  },


  patch: async(req, res) => {
    try {
        let updatedThing = await Thing.findByPk(parseInt(req.params.id));
        if (updatedThing) {
            await updatedThing.update(req.body);
            res.send(updatedThing);
        } else res.status(404).send("Not Found");
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
  },




}

module.exports = thingController;