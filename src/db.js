import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.MONGO_URL);

const url = process.env.MONGO_URL;
mongoose.connect(url, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;
const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
