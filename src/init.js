import "./db";
import "./models/Movie";
import dotenv from "dotenv";
import app from "./app";
import { IP } from "./localMiddleware";
dotenv.config();

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`✅ Listening on: ${IP}:${PORT}`);
});
