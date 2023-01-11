const db = require("../../database");

const retrieveAllCompanies = () => {
  return db
    .query("select id, name , email from companies;")
    .then((response) => response);
};

module.exports = {
  retrieveAllCompanies,
};
