const CarsRouter = require("express").Router();

const Cars = require("../controllers/Cars");

CarsRouter.get("/Cars", Cars.retrieveCars);
CarsRouter.post("/Cars", Cars.createCar);
CarsRouter.get("/Cars/:id", Cars.retrieveCarById);
CarsRouter.post("/Cars", Cars.createCar);
CarsRouter.delete("/Cars/:id", Cars.deleteCar);

module.exports = CarsRouter;
