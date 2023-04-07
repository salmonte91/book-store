const express = require ('express')
const mongoose = require('mongoose')

mongoose.connect('const mongoUrl = "mongodb+srv://wolfemanrock:iNrY2p9e704tcSeN@cluster0.4ynlcgy.mongodb.net/?retryWrites=true&w=majority"', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Post Signup
app.post('/api/signup', async (req, res) => {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    try {
      await user.create();
      res.send('User created successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating user');
    }
  });
  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });

//Post login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = new User({ email, password });
    try {
      await user.save();
      res.send('User logged in successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error logging in user');
    }
  });
  
  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });