const db = require("../../database");

const retrieveAllCompanies = () => {
  return db
    .query("select id, name , mail from users where type='company';")
    .then((response) => response[0]);
};

module.exports = {
  retrieveAllCompanies,
};
