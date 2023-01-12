const db = require("../../database");

const retrieveAllUsers = () => {
  return db
    .query("select id, name , mail from users where type='user';")
    .then((response) => response);
};

const retrieveByEmail = (email) => {
  return db
    .query("select type from users where mail = ?", [email])
    .then((response) => [response]);
};

// ! Remove USer ===== #
const removeUser = (id) => {
  return db
    .query(`DELETE FROM users WHERE id=${id}`, id)
    .then((response) => response);
};

module.exports = {
  retrieveAllUsers,
  removeUser,
  retrieveByEmail,
};
