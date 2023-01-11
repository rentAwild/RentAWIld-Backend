/* eslint-disable camelcase */
const db = require("../../database");

const retrieveAllCars = (reqQuery) => {
  const filters = [];
  let query =
    "select c.name as carName, c.image, c.maintenance, c.type, c.kilometers, c.price, u.name as companyName from cars c join users u on c.userId=u.id";
  if (reqQuery.name !== null) {
    query += "where carName = ? ";
    filters.push(reqQuery.name);
    if (reqQuery.min_price !== null) {
      query += "and c.price >= ?";
      filters.push(reqQuery.min_price);
    }
    if (reqQuery.max_price !== null) {
      query += "and c.price <= ?";
      filters.push(reqQuery.max_price);
    }
    if (reqQuery.CompanyName !== null) {
      query += "and CompanyName = ?";
      filters.push(reqQuery.CompanyName);
    }
    if (reqQuery.type !== null) {
      query += "and c.type = ?";
      filters.push(reqQuery.type);
    }
  }
  if (reqQuery.min_price !== null && reqQuery.name === null) {
    query += "where c.price >= ?";
    filters.push(reqQuery.min_price);

    if (reqQuery.max_price !== null) {
      query += "and c.price <= ?";
      filters.push(reqQuery.max_price);
    }
    if (reqQuery.CompanyName !== null) {
      query += "and CompanyName = ?";
      filters.push(reqQuery.CompanyName);
    }
    if (reqQuery.type !== null) {
      query += "and c.type = ?";
      filters.push(reqQuery.type);
    }
  }
  if (
    reqQuery.max_price !== null &&
    reqQuery.min_price === null &&
    reqQuery.name === null
  ) {
    query += "where c.price <= ?";
    filters.push(reqQuery.max_price);
    if (reqQuery.CompanyName !== null) {
      query += "and CompanyName = ?";
      filters.push(reqQuery.CompanyName);
    }
    if (reqQuery.type !== null) {
      query += "and c.type = ?";
      filters.push(reqQuery.type);
    }
  }
  if (
    reqQuery.CompanyName !== null &&
    reqQuery.max_price === null &&
    reqQuery.min_price === null &&
    reqQuery.name === null
  ) {
    query += "where CompanyName = ?";
    filters.push(reqQuery.CompanyName);
  }
  if (
    reqQuery.type !== null &&
    reqQuery.CompanyName === null &&
    reqQuery.max_price === null &&
    reqQuery.min_price === null &&
    reqQuery.name === null
  ) {
    query += "where c.type = ?";
    filters.push(reqQuery.CompanyName);
  }

  return db.query(query, filters).then((response) => response);
};
const checkBook = (name, start, end) => {
  return db
    .query(
      `SELECT * FROM books b join cars c 
      where b.start <=${start} and b.end >=${start} and c.name=${name}
      ;
      SELECT * FROM books b join cars c 
      where b.start >=${start} and b.start <=${end} and c.name=${name}
      `
    )
    .then((response) => response);
};

const retrieveACar = (id) => {
  return db
    .query("select * from cars where id=?", [id])
    .then((response) => response);
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
  db.query(`UPDATE cars SET kilometer=${kilometer} WHERE id=${id}`, [
    kilometer,
    id,
  ]).then((response) => response);
};

// ! Remove car ===== #
const removeCar = (id) => {
  db.query(`DELETE FROM cars WHERE id=${id}`, id).then((response) => response);
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
  checkBook,
  retrieveACar,
  createNewCar,
  removeCar,
  updateCar,
};
