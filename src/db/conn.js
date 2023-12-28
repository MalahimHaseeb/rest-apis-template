const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
    console.error("MONGO_URI is not defined in the environment variables.");
    process.exit(1); // Exit the script with an error code
}

mongoose.connect(mongoUri, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log("Connection successful");
}).catch((e) => {
    console.error("Error connecting to MongoDB:", e);
});
