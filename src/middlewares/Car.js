const Cars = require("../models/Cars");

const isTheCarBooked = (req, res, next) => {
  const { start, end } = req.body;
  const name = req.query;
  Cars.checkBook(name, start, end)
    .then((result) => {
      if (result[0]) {
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
