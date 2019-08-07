const bookModel = require("../models/book");
const MiscHelper = require("../helpers/helpers");

module.exports = {
  getAllBooks: (req, res) => {
    bookModel
      .getAllBooks()
      .then(resultBook => {
        const result = resultBook;
        MiscHelper.response(res, result, 200);
      })
      .catch(error => {
        console.log(error);
      });
  },
  // SEARCH START --------------------------------
  searchBook: search => {},
  getBorrowedBook: () => {
    bookModel
      .getBorrowedBook()
      .then(resultBook => {
        const result = resultBook;
        MiscHelper.response(res, result, 200);
      })
      .catch(error => {
        console.log(error);
      });
  },
  getAvailableBook: () => {
    bookModel
      .getAvailableBook()
      .then(resultBook => {
        const result = resultBook;
        MiscHelper.response(res, result, 200);
      })
      .catch(error => {
        console.log(error);
      });
  },
  getScienceBook: (req, res) => {
    bookModel
      .getScienceBook()
      .then(resultBook => {
        const result = resultBook;
        MiscHelper.response(res, result, 200);
      })
      .catch(error => {
        console.log(error);
      });
  },
  
  getComicBook: (req, res) => {
    bookModel
      .getComicBook()
      .then(resultBook => {
        const result = resultBook;
        MiscHelper.response(res, result, 200);
      })
      .catch(error => {
        console.log(error);
      });
  },

  getBiographyBook: (req, res) => {
    bookModel
      .getBiographyBook()
      .then(resultBook => {
        const result = resultBook;
        MiscHelper.response(res, result, 200);
      })
      .catch(error => {
        console.log(error);
      });
  },

  getNovelBook: (req, res) => {
    bookModel
      .getNovelBook()
      .then(resultBook => {
        const result = resultBook;
        MiscHelper.response(res, result, 200);
      })
      .catch(error => {
        console.log(error);
      });
  },
  // SEARCH END --------------------------------

  getIdBook: (req, res) => {
    let idBook = req.params.idBook;

    bookModel
      .getIdBook(idBook)
      .then(result => {
        MiscHelper.response(res, result, 200);
      })
      .catch(err => {
        console.log(err);
      });
  },

  updateBook: (req, res) => {
    let idBook = req.params.idBook;

    let book = {
      title: req.body.title,
      writer: req.body.writer,
      description: req.body.description,
      img: req.body.img
    };

    bookModel
      .updateBook(book, idBook)
      .then(result => {
        MiscHelper.response(res, result, 200);
      })
      .catch(err => {
        console.log(err);
      });
  },

  addBook: (req, res) => {
    let book = {
      title: req.body.title,
      writer: req.body.writer,
      description: req.body.description,
      id_category: req.body.id_category,
      img: req.body.img
    };
    console.log(book);

    bookModel
      .addBook(book)
      .then(result => {
        MiscHelper.response(res, result, 200);
      })
      .catch(err => {
        console.log(err);
      });
  },

  deleteBook: (req, res) => {
    let idBook = req.params.idBook;

    bookModel
      .deleteBook(idBook)
      .then(result => {
        MiscHelper.response(res, result, 200);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
