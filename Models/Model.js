// Imported

const mongoose = require("mongoose");

// Creating Schema

const Schema = mongoose.Schema;

// Creating Model Schema


const Register = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// Creating Model
const RegisterModel = mongoose.model('Register', Register);


// Exporting Model

module.exports =  RegisterModel ;
