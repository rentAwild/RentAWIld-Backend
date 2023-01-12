/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
const db = require("../../database");

const retrieveAllCars = (reqQuery) => {
  const filters = [];
  let query =
    "select c.id, c.name as carName, c.image, c.maintenance, c.type, c.kilometer, c.daily_price, u.name as CompanyName, u.id as user_id from cars c join users u on c.user_Id=u.id";
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

const retrieveCarById = (id) => {
  return db
    .query("select * from cars where id=?", [id])
    .then((response) => response);
};

const createNewCar = (name, image, user_id, type, kilometer, daily_price) => {
  return db
    .query(
      "INSERT INTO cars (name, image, user_id, type, kilometer, daily_price) values (?,?,?,?,?,?)",
      [name, image, user_id, type, kilometer, daily_price]
    )
    .then(([response]) => response);
};

// * Update car kilometers ===== #
const updateCar = (kilometer, id) => {
  return db
    .query(`UPDATE cars SET kilometer=${kilometer} WHERE id=${id}`, [
      kilometer,
      id,
    ])
    .then((response) => response);
};

// ! Update car Maintenance ===== #
const updateCarMaintenance = (maintenance, id) => {
  return db
    .query(`UPDATE cars SET maintenance=${maintenance} WHERE id=${id}`, [
      maintenance,
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

const retrieveAllTypes = () => {
  return db
    .query("Select DISTINCT type from cars")
    .then((response) => response);
};
module.exports = {
  retrieveAllCars,
  retrieveCarById,
  createNewCar,
  removeCar,
  updateCar,
  retrieveAllTypes,
  updateCarMaintenance,
};
