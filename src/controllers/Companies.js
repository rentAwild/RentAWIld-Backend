/* eslint-disable no-restricted-syntax */
const Companies = require("../models/Companies");
const Cars = require("../models/Cars");

const retrieveCompanies = (req, res) => {
  Companies.retrieveAllCompanies()
    .then(([companies]) => {
      res.json(companies);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving Companies from database");
    });
};

const updateCarKilometer = (req, res) => {
  const { kilometer, id } = req.body;
  if (req.data !== undefined) {
    Cars.updateCar(kilometer, id).then((update) => {
      if (update.affectedRows !== 0) {
        res.status(201).send(req);
      } else {
        res.status(500).send("Invalid Kilometers Update");
      }
      console.log(req.data);
    });
  } else {
    console.error("aqui", res);
    res.status(res.error).send(res.error);
  }
};

const removeCarFromTable = async (req, res, id) => {
  if (req.data !== undefined) {
    await Cars.removeCar(id).then((update) => {
      if (update.affectedRows !== 0) {
        res.status(200).send(update);
      } else {
        res.status(400).send("Invalid Remove Update");
      }
    });
  } else {
    console.error(req.error.response.data.description);
    res
      .status(req.error.response.status)
      .send(req.error.response.data.description);
  }
};

module.exports = {
  retrieveCompanies,
  updateCarKilometer,
  removeCarFromTable,
};
