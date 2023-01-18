import dotenv from "dotenv";

import connectToMongoDB from "./database.js";
import productRouter from "./routes/ProductRoute.js";
import express from "express";

const port = process.env.PORT || 3000;
dotenv.config();
connectToMongoDB();

const app = express();

app.use(express.json());
app.use("/api/products", productRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
