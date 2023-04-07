const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: { type: String, default: 'http://placekitten.com/350/350'},
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: {
      type: Number,
      min: [1673, 'Surely not that old?!'],
      max: [new Date().getFullYear(), 'This is the future!']
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
  })
  