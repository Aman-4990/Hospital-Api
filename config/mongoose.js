const mongoose = require('mongoose');

// ****** Database Connection with Mongoose ****** //
mongoose.connect('mongodb+srv://aman4990:aman4990@cluster0.zu1xg.mongodb.net/hospital_API', { useNewUrlParser: true ,useUnifiedTopology: true });
const db = mongoose.connection;

// ****** Connection Error Handling ****** //
db.on('error', console.error.bind(console, "Error connecting to the databse"));

// ****** Connection  Successful ****** //
db.once('open', function () {
    console.log("Successfully connected to the Database");
});