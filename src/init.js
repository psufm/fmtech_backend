import dotenv from "dotenv";
import app from "./app";
import ip from "ip";
dotenv.config();

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`✅ Listening on: ${ip.address()}:${PORT}`);
});
