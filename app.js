const express = require("express");
const mongoose = require("mongoose");

const app = express();
const db = mongoose.connect("mongodb://localhost/bookAPI");
const bookRouter = express.Router();
const port = process.env.PORT || 3000;
const Book = require("./models/bookModel");

bookRouter.route("/books").get((req, res) => {
  Book.find((err, books) => {
    if (err) {
      return res.send(err);
    }
    return res.json(books);
  });
});

app.use("/api", bookRouter);
app.get("/", (req, res) => {
  res.send("Welcome to my Nodemon API!");
});

app.listen(port, () => {
  console.log("Runing on port ${port}");
});
