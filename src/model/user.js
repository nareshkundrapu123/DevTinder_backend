const mangoose = require('mongoose');

const userSchema = new mangoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },  
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    age: {
        type: Number
    },
});

module.exports = mangoose.model("User", userSchema);