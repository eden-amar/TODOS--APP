const mongoose = require('mongoose');

require('./todo');

require('./user');


const url = process.env.MONGODB_URL || 'mongodb://localhost/todos';
let connection;
async function connect() {
    try{
    connection = await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('connected to mongoDB succeeded');
    } catch {
        console.log('failed to connect to mongoDB')
        process.exit(1);
    }
}

module.exports = connect;