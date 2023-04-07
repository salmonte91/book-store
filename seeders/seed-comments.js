const db = require('../models')

// To use await, we need an async function.
async function seed() {
    // Get the book, Book #1
    let book = await db.Book.findOne({ name: 'Book #1' })

    // Create a fake sample comment.
    let comment = await db.Comment.create({
        author: 'Richard Readerson',
        rant: false,
        stars: 5.0,
        content: 'Amazing book, I loved it!'
    })

    // Add that comment to the book's comment array.
    book.comments.push(comment.id)

    //save the book now that it has comment
    await book.save()
    
    // Exit the program
    process.exit()
}

seed()