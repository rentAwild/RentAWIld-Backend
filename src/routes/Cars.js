const CarsRouter = require("express").Router();

const { isTheCarBooked } = require("../middlewares/Car");
const Cars = require("../controllers/Cars");

CarsRouter.get("/Cars", Cars.retrieveCars);
CarsRouter.post("/Cars", Cars.createCar);
CarsRouter.delete("/Cars", Cars.deleteCar);
CarsRouter.get("/Cars/:id", Cars.retrieveCarById);

// * Edit Cars # ===== #
CarsRouter.patch("/Cars/:id", Cars.updateCarKilometer);
// CarsRouter.patch("/Cars/:id", Cars.changeMaintenance);

CarsRouter.post("/Cars/:id/book", isTheCarBooked, Cars.bookCar);

CarsRouter.post("/Cars", Cars.createCar);
CarsRouter.delete("/Cars/:id", Cars.deleteCar);

module.exports = CarsRouter;
