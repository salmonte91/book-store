const mongoose = require('mongoose')


const loginSchema = new mongoose.Schema({
    username: String,
    password: String,
  });

const User = mongoose.model('User', loginSchema);



