const BooksRouter = require("express").Router();

const Books = require("../controllers/Books");

BooksRouter.get("/books", Books.retrieveBooks);
BooksRouter.post("/books", Books.createBook);
BooksRouter.delete("/books/:id", Books.deleteBook);

module.exports = BooksRouter;
