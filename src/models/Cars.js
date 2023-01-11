/* eslint-disable camelcase */
/* eslint-disable no-restricted-globals */
const db = require("../../database");

const retrieveAllCars = () => {
  return db.query("select * from cars;").then((response) => response);
};
const createNewCar = (
  name,
  image,
  maintenance,
  companyId,
  type,
  kilometer,
  daily_price
) => {
  db.query(
    "INSERT INTO cars(name, image, maintenance, companyId, type, kilometer, daily_price) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [name, image, maintenance, companyId, type, kilometer, daily_price]
  ).then((response) => response);
};

module.exports = {
  retrieveAllCars,
  createNewCar,
};
