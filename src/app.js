import router from "./routes";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const { PORT, API_URL } = process.env;

const app = express();
app.use(express.json());

app.use("/api", router);

mongoose.connect(API_URL).then(() => {
  console.log("Connected to MongoDB!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
