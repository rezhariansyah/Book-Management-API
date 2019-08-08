const bookModel = require("../models/book");
const MiscHelper = require("../helpers/helpers");
const cloudinary = require('cloudinary')

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

  addBook: async (req, res) => {
    let path = req.file.path
    let geturl = async (req) => {
      cloudinary.config({
        cloud_name: 'dewnmhir6',
        api_key: '634673581744656',
        api_secret: 'kM7HXBmASUj8LnaDvSzGvj9ACG0'
      })

      let data
      await cloudinary.uploader.upload(path, (result) => {
        const fs = require('fs')
        fs.unlinkSync(path)
        data = result.url
      })

      return data
    }

    const data = {
      title: req.body.title,
      writer: req.body.writer,
      description: req.body.description,
      id_category: req.body.id_category,
      img: await geturl()
    };
    console.log("reqbody",req.body);

    bookModel
      .addBook(data)
      .then(result => {
        MiscHelper.response(res, result, 200);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getPagination : (req, res) => {
    let limit = parseInt(req.query.limit) || 6
    let page = parseInt(req.query.page) || 1

    bookModel
      .getPagination(limit, page)
      .then(resultBook => {
        const result = resultBook;
        MiscHelper.response(res, result, 200);
      })
      .catch(error => {
        console.log(error);
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
