const UsersRouter = require("express").Router();

const Users = require("../controllers/Users");

UsersRouter.get("/users/type", Users.retrieveUserByEmail);
UsersRouter.get("/users", Users.retrieveUsers);
UsersRouter.delete("/users/:id", Users.removeCompany);

module.exports = UsersRouter;
