/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
const db = require("../../database");

const retrieveAllBooks = () => {
  return db.query("select * from books").then((response) => response);
};

const createABook = (start, end, car_id, user_id) => {
  return db
    .query(
      "Insert into books(start, end, car_id, user_id) Values(?, ?, ?, ?)",
      [start, end, car_id, user_id]
    )
    .then((response) => response);
};

const removeBook = (id) => {
  return db
    .query(`DELETE FROM cars WHERE id=${id}`)
    .then((response) => response);
};

module.exports = {
  retrieveAllBooks,
  createABook,
  removeBook,
};
