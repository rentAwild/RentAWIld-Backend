const Cars = require("../models/Cars");

const isTheCarBooked = (req, res, next) => {
  const { start, end } = req.body;
  const { name } = req.params;
  Cars.checkBook1(name, start, end)
    .then((result) => {
      if (result[0] !== null) {
        res.status(401).send("Date not available");
      } else {
        Cars.checkBook2(name, start, end).then((secondResult) => {
          if (secondResult[0] !== null) {
            res.status(401).send("Date not available");
          } else {
            next();
          }
        });
      }
    })
    .catch((error) => console.error(error));
};

module.exports = {
  isTheCarBooked,
};
