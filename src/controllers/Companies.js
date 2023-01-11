const Companies = require("../models/Companies");

const retrieveCompanies = (req, res) => {
  Companies.retrieveAllCompanies()
    .then((companies) => {
      res.json(companies);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving Companies from database");
    });
};

module.exports = {
  retrieveCompanies,
};
