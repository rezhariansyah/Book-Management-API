const express = require("express");
const Route = express.Router();

const BorrowController = require("../controllers/borrow");
const Auth = require("../helpers/auth");


Route
    .post("/allBorrow", BorrowController.getAllBorrow)
    .post("/", BorrowController.addLoan)
    .delete("/:idBorrow", BorrowController.deleteLoan)

module.exports = Route;
