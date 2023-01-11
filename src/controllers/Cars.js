/* eslint-disable camelcase */
const Cars = require("../models/Cars");

const retrieveCars = (req, res) => {
  Cars.retrieveAllCars()
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving cars from database");
    });
};

const createCar = (req, res) => {
  const { name, image, maintenance, companyId, type, kilometer, daily_price } =
    req.query;
  Cars.createNewCar(
    name,
    image,
    maintenance,
    companyId,
    type,
    kilometer,
    daily_price
  )
    .then(([result]) => {
      res.location(`/cars/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the car");
    });
};

module.exports = {
  retrieveCars,
  createCar,
};
