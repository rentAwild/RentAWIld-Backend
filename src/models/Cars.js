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

// ! Update car kilometers ===== #
const updateCar = (kilometer, id) => {
  db.query(`UPDATE cars SET kilometer=${kilometer} WHERE id=${id}`, [kilometer, id])
  .then((response) => response);
};

// ! Remove car ===== #
const removeCar = (id) => {
  db.query(`DELETE FROM cars WHERE id=${id}`, id)
  .then((response) => response);
};

module.exports = {
  retrieveAllCars,
  createNewCar,
  updateCar,
  removeCar,
};
