const CarsRouter = require("express").Router();

const { isTheCarBooked } = require("../middlewares/Car");
const Cars = require("../controllers/Cars");

CarsRouter.get("/Cars", Cars.retrieveCars);
CarsRouter.get("/Cars/:id", Cars.retrieveCar);
CarsRouter.post("/Cars", Cars.createCar);
CarsRouter.delete("/Cars/:id", Cars.deleteCar);

CarsRouter.post("/Cars/:name/book", isTheCarBooked, Cars.bookCar);

CarsRouter.delete("/Cars/:id", Cars.deleteCar);

module.exports = CarsRouter;
