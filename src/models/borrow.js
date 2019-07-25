const connection = require("../configs/db");

module.exports = {
  // insert Borrow
  getAllBorrow: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        "select * from borrow inner join book on borrow.id_book = book.id_book",
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  addLoan: data => {
    const status = "0";
    const book_id = data.id_book;
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO borrow SET ?", data, (err, result) => {
        connection.query(
          "UPDATE book SET status= ? WHERE id_book=?",
          [status, book_id],
          (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(new Error(err));
            }
          }
        );
      });
    });
  },
  deleteLoan: idBorrow => {
    const status = "1";
    return new Promise((resolve, reject) => {
      connection.query(
        "select * from borrow where id_borrow = ?",
        idBorrow,
        (err, result) => {
          if (!err) {
            let id_book = result[0].id_book;
            connection.query(
              "DELETE FROM borrow WHERE id_borrow = ? ",
              idBorrow,
              (err, result) => {
                if (!err) {
                  connection.query(
                    "UPDATE book SET status = ? WHERE id_book= ? ",
                    [status, id_book],
                    (err, result1) => {
                      if (!err) {
                        resolve(
                          `delete success ${idBorrow}, update status book ${id_book}`
                        );
                      } else {
                        reject(new Error(err));
                      }
                    }
                  );
                }
              }
            );
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  }
};
