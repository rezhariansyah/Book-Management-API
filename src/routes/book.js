const express = require('express')
const Route = express.Router()

const BookController = require('../controllers/book')

Route
  .get('/allBooks', BookController.getAllBooks)
  .get('/science', BookController.getScienceBook)
  .get('/comic', BookController.getComicBook)
  .get('/biography', BookController.getBiographyBook)
  .get('/novel', BookController.getNovelBook)
  .get('/:idBook', BookController.getIdBook)
  .patch('/:idBook', BookController.updateBook)
  .post('/', BookController.addBook)
  .delete('/:idBook', BookController.deleteBook)

module.exports = Route