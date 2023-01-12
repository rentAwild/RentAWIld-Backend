const CarsRouter = require("express").Router();

const Cars = require("../controllers/Cars");

CarsRouter.get("/Cars", Cars.retrieveCars);
CarsRouter.post("/Cars", Cars.createCar);
CarsRouter.get("/Cars/:id", Cars.retrieveCarById);
<<<<<<< HEAD

// * Edit Cars # ===== #
CarsRouter.patch("/Cars/:id", Cars.updateCarKilometer);
// CarsRouter.patch("/Cars/:id", Cars.changeMaintenance);

CarsRouter.post("/Cars/:id/book", isTheCarBooked, Cars.bookCar);

=======
>>>>>>> b72ca0a4e61e7f4143437405f733fd97c1737862
CarsRouter.post("/Cars", Cars.createCar);
CarsRouter.delete("/Cars/:id", Cars.deleteCar);

module.exports = CarsRouter;
