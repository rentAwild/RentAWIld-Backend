const CompaniesRouter = require("express").Router();

const Companies = require("../controllers/Companies");

CompaniesRouter.get("/Companies", Companies.retrieveCompanies);

module.exports = Companies;
