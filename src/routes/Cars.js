const CarsRouter = require("express").Router();

const Cars = require("../controllers/Cars");

CarsRouter.get("/Cars", Cars.retrieveCars);
CarsRouter.post("/Cars", Cars.createCar);
CarsRouter.get("/Cars/:id", Cars.retrieveCarById);
CarsRouter.get("/types/Cars", Cars.selectType);
CarsRouter.delete("/Cars/:id", Cars.deleteCar);

// * Edit Cars # ===== #
CarsRouter.patch("/Cars/:id", Cars.updateCarKilometer);
// CarsRouter.patch("/Cars/:id", Cars.changeMaintenance);

module.exports = CarsRouter;
