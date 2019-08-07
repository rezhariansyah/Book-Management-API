const express = require('express')
const Route = express.Router()

const BookController = require('../controllers/book')

Route
  .get('/', BookController.getAllBooks)
  .get('/science', BookController.getScienceBook)
  .get('/comic', BookController.getComicBook)
  .get('/biography', BookController.getBiographyBook)
  .get('/novel', BookController.getNovelBook)
  .get('/:idBook', BookController.getIdBook)
  .get('/borrowed', BookController.getBorrowedBook)
  .get('/available', BookController.getAvailableBook)
  .patch('/:idBook', BookController.updateBook)
  .post('/', BookController.addBook)
  .delete('/:idBook', BookController.deleteBook)

module.exports = Route
