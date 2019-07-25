const borrowModel = require("../models/borrow");
const MiscHelper = require("../helpers/helpers");

module.exports = {
  getAllBooks: (req, res) => {
    borrowModel
      .getAllBorrow()
      .then(resultBook => {
        const result = resultBook;
        MiscHelper.response(res, result, 200);
      })
      .catch(error => {
        console.log(error);
      });
  },
  addLoan: (req, res) => {
    const { ktp, id_book } = req.body;
    const data = {
      ktp,
      id_book,
      borrow_date: new Date(),
      date_returned: new Date(req.body.date_returned)
    };
    console.log(req.body);

    borrowModel
      .addLoan(data)
      .then(result => {
        MiscHelper.response(res, result, 200);
      })
      .catch(err => {
        console.log(err);
      });
  },
  deleteLoan: (req, res) => {
    let idBorrow = req.params.idBorrow;

    borrowModel
      .deleteLoan(idBorrow)
      .then(result => {
        MiscHelper.response(res, result, 200);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
