const mongoose = require('mongoose');

const mongooseURI = "mongodb+srv://inotebook:ayush2004@inotebook.ogkw3y9.mongodb.net/digiwebclub";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongooseURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectToMongo;