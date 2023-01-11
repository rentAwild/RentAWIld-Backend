const CarsRouter = require("express").Router();

const Cars = require("../controllers/Cars");

CarsRouter.get("/Cars", Cars.retrieveCars);
CarsRouter.post("Cars", Cars.createCar);
CarsRouter.delete("Cars", Cars.deleteCar);

module.exports = Cars;
