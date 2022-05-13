const { number } = require('joi');
const mongoose = require('mongoose');
// const { RecordSchema } = require('../models/record');

// Define Schema
const medicineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    descrption: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required:true
    }
});


module.exports = mongoose.model('Medicine', medicineSchema);