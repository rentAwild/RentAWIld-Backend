const Users = require("../models/Users");

const retrieveUsers = (req, res) => {
  Users.retrieveAllUsers()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving users from database");
    });
};

module.exports = {
  retrieveUsers,
};
