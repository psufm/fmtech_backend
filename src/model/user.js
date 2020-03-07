import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: String,
  google_id: String, //구글의 id!!
  name: String,
  contact: {
    phone_number: Number,
    company_number: Number
  }
});

const model = mongoose.model(`userInfo`, userSchema);

export default model;
