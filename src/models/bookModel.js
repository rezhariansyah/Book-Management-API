const connection = require('../configs/db')

module.exports = {
    getAllBooks : () => {
        return new Promise((resolve, reject) => {
            connection.query('select * from book inner join category on book.id_category = category.id', (err, result) => {
                if(!err) {
                    resolve (result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    // SEARCH START --------------------------------
    getScienceBook : () => {
        return new Promise((resolve, reject) => {
            connection.query(`select * from book inner join category on book.id_category = category.id where category = 'science'`, (err, result) => {
                if(!err) {
                    resolve (result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    getComicBook : () => {
        return new Promise((resolve, reject) => {
            connection.query(`select * from book inner join category on book.id_category = category.id where category = 'comic'`, (err, result) => {
                if(!err) {
                    resolve (result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    getBiographyBook : () => {
        return new Promise((resolve, reject) => {
            connection.query(`select * from book inner join category on book.id_category = category.id where category = 'biography'`, (err, result) => {
                if(!err) {
                    resolve (result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    getNovelBook : () => {
        return new Promise((resolve, reject) => {
            connection.query(`select * from book inner join category on book.id_category = category.id where category = 'novel'`, (err, result) => {
                if(!err) {
                    resolve (result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    // SEARCH END --------------------------------

    getIdBook : (idBook) => {
        return new Promise((resolve, reject) => {
            sql = `select * from book inner join category on book.id_category = category.id where book.id_book = ?`
            connection.query(sql, idBook, (err, result) => {
                if(!err) {
                    resolve (result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    updateBook : (book, idBook) => {
        return new Promise((resolve, reject) => {
            let sql = `update book set ? where id_book = ?`
            connection.query(sql, [book, idBook], (err, res) => {
                if(!err) resolve(res)
                reject(new Error(err))
            })
        })
    },

    addBook : (book) => {
        return new Promise((resolve, reject) => {
            let sql = `insert into book set ?`
            connection.query(sql, book, (err, result) => {
                if(!err) {
                    // resolve(result)
                    connection.query(`select * from book inner join category on book.id_category = category.id where title = ? and writer = ?`, [book.title, book.writer], (err, value) => {
                        resolve(value)
                    })
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}