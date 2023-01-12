/* eslint-disable no-restricted-syntax */
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
const retrieveUserByEmail = (req, res) => {
  Users.retrieveByEmail(req.query.email)
    .then((result) => res.status(200).send(result))

    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving users from database");
    });
};
const removeUserFromTable = async (req, res) => {
  const id = req.params;
  if (req.data !== undefined) {
    await Users.removeUser(id).then((update) => {
      if (update.affectedRows !== 0) {
        res.status(200).send(update);
      } else {
        res.status(400).send("Invalid Remove Update");
      }
      console.log(req.data);
    });
  } else {
    console.error(req.error.response.data.description);
    res
      .status(req.error.response.status)
      .send(req.error.response.data.description);
  }
};
module.exports = {
  retrieveUsers,
  removeUserFromTable,
  retrieveUserByEmail,
};
