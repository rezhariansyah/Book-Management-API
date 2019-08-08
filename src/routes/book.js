const express = require('express')
const Route = express.Router()
const multer = require('multer')

const BookController = require('../controllers/book')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/uploads/images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
let upload = multer({ storage: storage, limits: { fileSize: 100000000 } })


Route
  .get('/', BookController.getAllBooks)
  .get('/science', BookController.getScienceBook)
  .get('/comic', BookController.getComicBook)
  .get('/biography', BookController.getBiographyBook)
  .get('/novel', BookController.getNovelBook)
  .get('/:idBook', BookController.getIdBook)
  // .get('/borrowed', BookController.getBorrowedBook)
  // .get('/available', BookController.getAvailableBook)
  .patch('/:idBook', BookController.updateBook)
  .post('/', upload.single('img'), BookController.addBook)
  .delete('/:idBook', BookController.deleteBook)

module.exports = Route
