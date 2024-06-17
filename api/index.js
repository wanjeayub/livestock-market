import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import listingRouter from "./routes/listing.route.js";
dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/listing", listingRouter);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to database successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(4000, () => {
  console.log(`App is listening on port!`);
});
