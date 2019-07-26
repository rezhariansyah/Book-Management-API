const express = require("express");
const Route = express.Router();

const BorrowController = require("../controllers/borrow");
const Auth = require("../helpers/auth");


Route
    .get("/allBorrow", BorrowController.getAllBooks)
    .post("/",Auth.authInfo,Auth.accesstoken, BorrowController.addLoan)
    .delete("/:idBorrow", BorrowController.deleteLoan)

module.exports = Route;