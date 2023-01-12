const BooksRouter = require("express").Router();

const { isTheCarBooked } = require("../middlewares/CheckOverBooking");
const Books = require("../controllers/Books");

BooksRouter.get("/books", Books.retrieveBooks);
BooksRouter.post("/books", isTheCarBooked, Books.createBook);
BooksRouter.delete("/books/:id", Books.deleteBook);

module.exports = BooksRouter;
