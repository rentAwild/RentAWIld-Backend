/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
const db = require("../../database");

const retrieveAllCars = (reqQuery) => {
  const filters = [];
  let query =
    "select c.name as carName, c.image, c.maintenance, c.type, c.kilometer, c.daily_price, u.name as CompanyName from cars c join users u on c.user_Id=u.id";
  if (Object.keys(reqQuery).length > 0) {
    if (reqQuery.name !== undefined) {
      query += " where c.name = ? ";
      filters.push(reqQuery.name);
      if (reqQuery.min_price !== undefined) {
        query += " and c.daily_price >= ?";
        filters.push(reqQuery.min_price);
      }
      if (reqQuery.max_price !== undefined) {
        query += " and c.daily_price <= ?";
        filters.push(reqQuery.max_price);
      }
      if (reqQuery.CompanyName !== undefined) {
        query += " and u.name = ?";
        filters.push(reqQuery.CompanyName);
      }
      if (reqQuery.type !== undefined) {
        query += " and c.type = ?";
        filters.push(reqQuery.type);
      }
    }
    if (reqQuery.min_price !== undefined && reqQuery.name === undefined) {
      query += " where c.daily_price >= ?";
      filters.push(reqQuery.min_price);

      if (reqQuery.max_price !== undefined) {
        query += " and c.daily_price <= ?";
        filters.push(reqQuery.max_price);
      }
      if (reqQuery.CompanyName !== undefined) {
        query += " and u.name = ?";
        filters.push(reqQuery.CompanyName);
      }
      if (reqQuery.type !== undefined) {
        query += " and c.type = ?";
        filters.push(reqQuery.type);
      }
    }
    if (
      reqQuery.max_price !== undefined &&
      reqQuery.min_price === undefined &&
      reqQuery.name === undefined
    ) {
      query += " where c.daily_price <= ?";
      filters.push(reqQuery.max_price);
      if (reqQuery.CompanyName !== undefined) {
        query += " and u.name = ?";
        filters.push(reqQuery.CompanyName);
      }
      if (reqQuery.type !== undefined) {
        query += " and c.type = ?";
        filters.push(reqQuery.type);
      }
    }
    if (
      reqQuery.CompanyName !== undefined &&
      reqQuery.max_price === undefined &&
      reqQuery.min_price === undefined &&
      reqQuery.name === undefined
    ) {
      query += " where u.name = ?";
      filters.push(reqQuery.CompanyName);
    }
    if (
      reqQuery.type !== undefined &&
      reqQuery.CompanyName === undefined &&
      reqQuery.max_price === undefined &&
      reqQuery.min_price === undefined &&
      reqQuery.name === undefined
    ) {
      query += " where c.type = ?";
      filters.push(reqQuery.type);
    }
  }
  return db.query(query, filters).then((response) => response);
};
const checkBook1 = (name, start, end) => {
  return db
    .query(
      `SELECT * FROM books b join cars c where b.start <=${start} and b.end >=${start} and c.name=${name};`
    )
    .then((response) => response);
};
const checkBook2 = (name, start, end) => {
  return db
    .query(
      `SELECT * FROM books b join cars c where b.start >=${start} and b.start <=${end} and c.name=${name};`
    )
    .then((response) => response);
};

const retrieveACar = (id) => {
  return db
    .query("select * from cars where id=?", [id])
    .then((response) => response);
};

const createNewCar = (obj) => {
  return db
    .query("INSERT INTO cars set ?", [obj])
    .then(([response]) => response);
};

// ! Update car kilometers ===== #
const updateCar = (kilometer, id) => {
  return db
    .query(`UPDATE cars SET kilometer=${kilometer} WHERE id=${id}`, [
      kilometer,
      id,
    ])
    .then((response) => response);
};

// ! Remove car ===== #
const removeCar = (id) => {
  return db
    .query(`DELETE FROM cars WHERE id=${id}`, id)
    .then((response) => response);
};

const bookACar = (start, end, car_id, user_id) => {
  return db
    .query(
      "Insert into books(start, end, car_id, user_id) Values(?, ?, ?, ?)",
      [start, end, car_id, user_id]
    )
    .then((response) => response);
};

module.exports = {
  bookACar,
  retrieveAllCars,
  checkBook1,
  checkBook2,
  retrieveACar,
  createNewCar,
  removeCar,
  updateCar,
};
