const mongoose = require('mongoose');

function handlePersonSchema(req, res) {

    PersonModel.find({}, (error, data) => {
        if (error) console.log(`error reading from the database: ${error}`);
        else res.send(data);
    });

}

function createNewPerson(req, res) {
    const { newPerson } = req.body;
    const person = new PersonModel(newPerson);
    person.save();
    res.status(201).send(person);
}

function deletePerson(req, res) {
    const id = req.params.id;
    PersonModel.findByIdAndDelete(id).then(record => {
        res.send(record);
    }).catch(error => {
        res.status(500).send(error.message)
    })
}

function updatePerson(req, res) {
    const id = req.params.id;
    const { data } = req.body;
    PersonModel.findByIdAndUpdate(id, data).then(record => {
        res.send(record);
    }).catch(error => {
        res.status(500).send(error.message)
    })
}


module.exports = { handlePersonSchema, createNewPerson, deletePerson ,updatePerson }

// 1. testing mongoose connection
mongoose.connect(`${process.env.DATABASE_URL}`);

// 2. creating a testing schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
       
    },
    age: {
        type: Number,
        
    },
    gender: {
        type: String,
      
    }
})

// 3. create a model for the schema
const PersonModel = mongoose.model('PersonModel', personSchema);

// creating a test for the schema
const test = new PersonModel({
    name: 'omar',
    age: 23,
    gender: 'male'
});

// saving the test
// test.save();
