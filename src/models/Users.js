const db = require("../../database");

const retrieveAllUsers = () => {
  return db
    .query("select id, name , mail from users where type='user';")
    .then((response) => response);
};

const retrieveByEmail = (email) => {
  console.log(email);
  return db
    .query("select id, type from users where mail = ?", [email])
    .then((response) => [response]);
};

// ! Remove USer ===== #
const removeUser = (id) => {
  db.query(`DELETE FROM users WHERE id=${id}`, id).then((response) => response);
};

module.exports = {
  retrieveAllUsers,
  removeUser,
  retrieveByEmail,
};
