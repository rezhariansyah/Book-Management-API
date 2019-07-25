const express = require("express");
const Route = express.Router();

const BorrowController = require("../controllers/borrow");

Route
    .get("/allBorrow", BorrowController.getAllBooks)
    .post("/", BorrowController.addLoan)
    .delete("/:idBorrow", BorrowController.deleteLoan)

module.exports = Route;
