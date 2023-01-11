const UsersRouter = require("express").Router();

const Users = require("../controllers/Users");

UsersRouter.get("/users", Users.retrieveUsers);
UsersRouter.delete("/users/:id", Users.retrieveUsers);

module.exports = UsersRouter;
