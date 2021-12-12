const Router = require("express").Router;
const thingController = require("./controller.js");

const thingRouter = new Router();

//CRUD

thingRouter.get("/",thingController.getAll);
thingRouter.get("/query",thingController.getQuery);
thingRouter.get("/:id",thingController.getById);
thingRouter.delete("/:id",thingController.delete);
thingRouter.post("/:id",thingController.patch);
thingRouter.get("/getThing",thingController.getThing);
thingRouter.get("/:id",thingController.getById);
thingRouter.post("/",thingController.addCollection);


module.exports =  thingRouter;