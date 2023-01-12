const db = require("../../database");

const retrieveAllCompanies = () => {
  return db
    .query("select id, name , mail from users where type='company';")
    .then((response) => response);
};

module.exports = {
  retrieveAllCompanies,
};
