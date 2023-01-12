/* eslint-disable camelcase */
const Books = require("../models/Books");

const retrieveBooks = (req, res) => {
  Books.retrieveAllBooks()
    .then(([books]) => {
      res.status(200).json(books);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving books from database");
    });
};

const createBook = (req, res) => {
  const [{ start, end, car_id, user_id }] = req.body;
  Books.createABook(start, end, car_id, user_id)
    .then((result) => {
      if (result.affectedRows === 0) {
        res.Status(400).send("Error booking car");
      } else {
        const newBook = { id: result[0].insertId, ...req.body[0] };
        res.status(201).send(newBook);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the book");
    });
};

const deleteBook = (req, res) => {
  const { id } = req.params;
  Books.removeBook(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting the book");
    });
};

module.exports = {
  retrieveBooks,
  createBook,
  deleteBook,
};
