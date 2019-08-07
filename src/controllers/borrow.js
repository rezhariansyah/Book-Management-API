const borrowModel = require("../models/borrow");
const MiscHelper = require("../helpers/helpers");

module.exports = {
  getAllBorrow: (req, res) => {
    let role = req.body.role
    let id_user = req.body.id_user || ""
    console.log(req.headers)

    borrowModel
      .getAllBorrow(role, id_user)
      .then(resultBook => {
        const result = resultBook;
        MiscHelper.response(res, result, 200);
      })
      .catch(error => {
        console.log(error);
      });
  },
  addLoan: (req, res) => {
    const { id_user, id_book } = req.body;
    const data = {
      id_user,
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
