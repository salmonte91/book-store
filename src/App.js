import React from 'react';

const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


function App() {
  return (
    <div className="App"></div>
  );
}

export default App;

// const express = require ("express");
// const app = express();
// const mongoose = require ("mongoose");
// app.use(express.json());

// const mongoUrl = "mongodb+srv://wolfemanrock:iNrY2p9e704tcSeN@cluster0.4ynlcgy.mongodb.net/?retryWrites=true&w=majority"

// mongoose
//   .connect (mongoUrl, {
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log("Connected!")
//   })
//   .catch((e) => {console.log(e)});
 
//   app.listen(5000, () => {
//     console.log("server started")
//   });

//   app.post("/post", async (req, res) => {
//     console.log(req.body);
//     const {data} = req.body;

//     try {
//       if (data == "wolfemanrock") {
//         res.send("ok")};
//         else {
//           res.send({ status: "user not found"});
//           catch (error) {res.send ({status: "Something went wrong. Please try again"})};
//         }
//     }
//   })