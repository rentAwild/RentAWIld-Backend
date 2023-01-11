const db = require("../../database");

const retrieveAllUsers = () => {
  return db
    .query("select id, name , email from users;")
    .then((response) => response);
};

// ! Remove USer ===== #
const removeUser = (id) => {
  db.query(`DELETE FROM users WHERE id=${id}`, id)
  .then((response) => response);
};

module.exports = {
  retrieveAllUsers,
  removeUser,
};
