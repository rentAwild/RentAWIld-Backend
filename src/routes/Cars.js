const CarsRouter = require("express").Router();

const Cars = require("../controllers/Cars");

CarsRouter.get("/Cars", Cars.retrieveCars);
CarsRouter.post("/Cars", Cars.createCar);
CarsRouter.get("/Cars/:id", Cars.retrieveCarById);

// * Edit Cars # ===== #
CarsRouter.patch("/Cars/:id", Cars.updateCarKilometer);
// CarsRouter.patch("/Cars/:id", Cars.changeMaintenance);

CarsRouter.post("/Cars/:id/book", isTheCarBooked, Cars.bookCar);

CarsRouter.post("/Cars", Cars.createCar);
CarsRouter.delete("/Cars/:id", Cars.deleteCar);

module.exports = CarsRouter;
