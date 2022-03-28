const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must have a title for pet."],
        minLength: [2, "Name must be longer than 2 characters"],
        unique: [true, "names must be unique"]
    },
    type: {
        type: String,
        required: [true, "A Price is required."],
        minLength: [2, "Type must be longer than 2 characters"]
    },
    description: {
        type: String,
        required: [true, "Description is needed!"],
        minLength: [2, "Please elaborate"]
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    },


},
    { timestamps: true }
);

PetSchema.plugin(uniqueValidator);
const Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;