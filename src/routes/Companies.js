const CompaniesRouter = require("express").Router();

const Companies = require("../controllers/Companies");

CompaniesRouter.get("/companies", Companies.retrieveCompanies);
CompaniesRouter.patch("/companies", Companies.updateCarKilometer);
CompaniesRouter.delete("/companies", Companies.removeCarFromTable);

module.exports = CompaniesRouter;
