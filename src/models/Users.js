const db = require("../../database");

const retrieveAllUsers = () => {
  return db
    .query("select id, name , email from users where type='user';")
    .then((response) => response);
};

module.exports = {
  retrieveAllUsers,
};
