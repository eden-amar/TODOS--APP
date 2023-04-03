const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    userName: {type: String},
    email: {type: String,},
    password: {type: String},
    created: {type: Date, default: Date.now},
    birthDate: {type: Date}
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

        // required: true,
        // unique: true,
        // // validate(value = '') {
        // //     if (value.includes('@')) {
        // //         return false;
        // //     }
        // // }