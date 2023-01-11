const UsersRouter = require("express").Router();

const Users = require("../controllers/Users");

UsersRouter.get("/Users", Users.retrieveUsers);

module.exports = UsersRouter;
