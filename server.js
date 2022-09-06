'use strict'


const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const mongoose = require('mongoose');
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
  })


// const { handlePersonSchema} = require('./modules/personSchema');
// const { createNewPerson} = require('./modules/personSchema');
// const { deletePerson} = require('./modules/personSchema');
// const { updatePerson} = require('./modules/personSchema');

// app.get('/person',handlePersonSchema);
// app.post('/person',createNewPerson);
// app.delete('/person/:id',deletePerson);
// app.put('/person/:id',updatePerson );




app.post("/person", (req, res) => {
  let { name, age, gender } = req.body
  const newAge = Number(age) + 5
  console.log(newAge);
  res.status(200).send(newAge.toString());
  res.status(200).send(name);
  res.status(200).send(gender);
});


  function start(port) {
    app.listen(port, () => console.log(`Start listening Happy Codding`));
  }
  
  module.exports = {
    app: app,
    start: start
  }
  