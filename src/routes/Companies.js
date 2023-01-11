const CompaniesRouter = require("express").Router();

const Companies = require("../controllers/Companies");

CompaniesRouter.get("/Companies", Companies.retrieveCompanies);
CompaniesRouter.patch("/Companies", Companies.updateCarKilometer);
CompaniesRouter.delete("/Companies", Companies.removeCarFromTable);

module.exports = CompaniesRouter;
