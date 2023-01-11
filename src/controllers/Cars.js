/* eslint-disable camelcase */
const Cars = require("../models/Cars");

const retrieveCars = (req, res) => {
  const { name, min_price, max_price, type, companyName } = req.query;
  const reqQuery = {
    ...name,
    ...min_price,
    ...max_price,
    ...type,
    ...companyName,
  };
  Cars.retrieveAllCars(reqQuery)
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
    .then((result) => {
      if (result.affectedRows === 0) {
        res.Status(400).send("Error creating a car");
      } else {
        res.location(`/cars/${result.insertId}`).sendStatus(201);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the car");
    });
};

const deleteCar = (req, res) => {
  const { id } = req.params.id;
  Cars.removeCar(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting the car");
    });
};
const retrieveCar = (req, res) => {
  const { id } = req.params.id;
  Cars.retrieveCar(id)
    .then((car) => {
      res.json(car);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving car from database");
    });
};
const bookCar = (req, res) => {
  const { start, end } = req.body;
  const name = req.query;
  const { car_id, user_id } = req.params;
  Cars.bookACar(name, start, end, car_id, user_id)
    .then((result) => {
      if (result.affectedRows === 0) {
        res.Status(400).send("Error booking car");
      } else {
        res.send(result).Status(201);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  retrieveCars,
  retrieveCar,
  createCar,
  deleteCar,
  bookCar,
};
