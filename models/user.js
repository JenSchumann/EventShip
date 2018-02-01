const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema
const userSchema = mongoose.Schema({

  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },

});


const User = mongoose.model('User', userSchema);


//export
module.exports = User;
