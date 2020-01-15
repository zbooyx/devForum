const mongoose = require('mongoose');
const config = require('config');
const db = "mongodb+srv://pawel123:pawel123@devforumbackend-zt0qk.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(db, {useNewUrlParser: true});

        console.log('MongoDB Connected...');
    } catch (e) {
        console.error(e.message);

        process.exit(1);
    }
};

module.exports = connectDB;
