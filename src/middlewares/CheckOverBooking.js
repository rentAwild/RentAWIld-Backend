/* eslint-disable camelcase */
const db = require("../../database");

const isTheCarBooked = (req, res, next) => {
  const [{ start, end, car_id }] = req.body;
  db.query(
    `SELECT * FROM books b join cars c on b.car_id = c.id  where c.id=${car_id} and (("${start}"<=b.start and b.start<="${end}") or ("${start}"<=b.end and b.end <="${end}"));`
  )
    .then((result) => {
      if (result[0].length !== 0) {
        res.status(401).send("Date not available");
      } else {
        next();
      }
    })
    .catch((error) => console.error(error));
};

module.exports = {
  isTheCarBooked,
};
