const CarsRouter = require("./Cars");
const CompaniesRouter = require("./Companies");
const UsersRouter = require("./Users");
const BooksRouter = require("./Books");

const setUpRoutes = (server) => {
  server.use(CarsRouter);
  server.use(CompaniesRouter);
  server.use(UsersRouter);
  server.use(BooksRouter);
};

module.exports = {
  setUpRoutes,
};
