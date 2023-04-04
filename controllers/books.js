const router = require('express').Router()
const books = require('../models/books.js')
const db = require('../models/index.js')

// Get /books
router.get('/', (req, res) => {
    db.Book.find()
    .then((books) => {
      res.render('books/index', {books})
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

router.post('/', (req, res) => {
  if (req.body.pic === '') { req.body.pic = undefined }
  if (req.body.city === '') { req.body.city = undefined }
  if (req.body.state === '') { req.body.state = undefined }
  db.Book.create(req.body)
      .then(() => {
          res.redirect('/books')
      })
      .catch(err => {
          if (err && err.name == 'ValidationError') {
              let message = 'Validation Error: '
              for (var field in err.errors) {
                  message += `${field} was ${err.errors[field].value}. ${err.errors[field].message}\n`
              }
              res.render('books/new', { message })
          }
          else {
              res.render('error404')
          }
      })
})

// Get /books/new
router.get('/new', (req, res) => {
    res.render('books/new')
})

// SHOW
router.get('/:id', (req, res) => {
  db.Book.findById(req.params.id)
  .populate('comments')
  .then(book => {
    console.log(book.comments)
      res.render('books/show', { book, id: req.params.id })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

// PUT
router.put('/:id', (req, res) => {
  db.Book.findByIdAndUpdate(req.params.id, req.body)
  .then (updatedBook => {
    res.redirect(`/books/${req.params.id}`)
  })
  .catch (err => {
    console.log('err', err)
    res.render('error404')
  })
})

// DELETE
router.delete('/:id', (req, res) => {
  db.Book.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/books')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// edit
router.get("/:id/edit", (req, res) => {
  db.Book.findById(req.params.id)
  .then(book => {
      res.render('books/edit', { book, id: req.params.id })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
});

// Comment
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  db.Book.findById(req.params.id)
  .then(book => {
      db.Comment.create(req.body)
      .then(comment => {
          book.comments.push(comment.id)
          book.save()
          .then(() => {
              res.redirect(`/books/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})

// Delete
router.delete('/:id', (req, res) => {
  db.Book.findByIdAndDelete(req.params.id)
  .then(book => {
      res.redirect('/books')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.delete('/:id/comment/:commentId', (req, res) => {
  db.Comment.findByIdAndDelete(req.params.commentId)
  .then(() => {
    console.log('Success')
    res.redirect(`/books/${req.params.id}`)
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

module.exports = router