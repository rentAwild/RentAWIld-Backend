const CarsRouter = require("./Cars");
/* const CompaniesRouter = require("./Companies");*/
const UsersRouter = require("./Users");

const setUpRoutes = (server) => {
  server.use(CarsRouter);
  /*  server.use(CompaniesRouter); */
  server.use(UsersRouter);
};

module.exports = {
  setUpRoutes,
};
