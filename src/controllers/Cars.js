/* eslint-disable camelcase */
// const { compileQueryParser } = require("express/lib/utils");
const Cars = require("../models/Cars");

const retrieveCars = (req, res) => {
  Cars.retrieveAllCars(req.query)
    .then(([cars]) => {
      res.status(200).json(cars);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving cars from database");
    });
};
const retrieveCarById = (req, res) => {
  Cars.retrieveACar(req.params.id)
    .then(([cars]) => {
      res.status(200).json(cars);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving cars from database");
    });
};
const createCar = (req, res) => {
  const { name, image, user_id, type, kilometer, daily_price } = req.body;
  Cars.createNewCar(name, image, user_id, type, kilometer, daily_price)
    .then((result) => {
      if (result.affectedRows === 0) {
        res.Status(400).send("Error creating a car");
      } else {
        const newCar = {
          name: req.body.name,
          image: req.body,
          user_id: req.body.user_id,
          type: req.body.type,
          kilometer: req.body.kilometer,
          daily_price: req.body.daily_price,
        };
        res.status(201).send(newCar).location(`/cars/${result.insertId}`);
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
      res.status(500).send("Error editing the movie");
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
      res.status(500).send("Error saving the car");
    });
};

const retrieveCar = (req, res) => {
  const { id } = req.params.id;
  Cars.retrieveACar(id)
    .then((car) => {
      res.json(car);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving car from database");
    });
};

// * Update Car Kilometers # ===== #
const updateCarKilometer = (req, res) => {
  console.log("XEX", req.body)
  // const params = req.params.id;
  const kilometer = req.body.kilometer;
  if (req.body !== undefined && req.params !== undefined) {
    Cars.updateCar(kilometer, req.params.id).then((update) => {
      if (update.affectedRows !== 0) {
        res.status(201).send(update);
      } else {
        res.status(500).send("Invalid Kilometers Update");
      }
    });
  } else {
    res.status(res.error).send(res.error);
  }
};

const changeMaintenance = (req, res) => {
  const params = [req.body.maintenance, req.params.id];
  if (req.body !== undefined && req.params !== undefined) {
    Cars.updateCar(params[0], params[1]).then((update) => {
      if (update.affectedRows !== 0) {
        res.status(201).send(update);
      } else {
        res.status(500).send("Invalid Kilometers Update");
      }
    });
  } else {
    res.status(res.error).send(res.error);
  }
};

module.exports = {
  retrieveCars,
  retrieveCar,
  createCar,
  deleteCar,
  bookCar,
  retrieveCarById,
  updateCarKilometer,
  changeMaintenance,
};
