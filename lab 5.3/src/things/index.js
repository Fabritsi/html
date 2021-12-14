const Router = require("express").Router;
const thingController = require("./controller_fille_async");

const thingRouter = new Router();

//CRUD

thingRouter.get("/",thingController.getAll);
thingRouter.get("/query",thingController.getQuery);
thingRouter.get("/:id",thingController.getById);
thingRouter.delete("/:id",thingController.delete);
thingRouter.post("/",thingController.post);
thingRouter.post("/:id",thingController.patch);
thingRouter.get("/getThing",thingController.getThing);




module.exports = thingRouter;