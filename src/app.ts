import express from "express";
import connectDB from "./server";
import authorsRouter from "./routers/authors.routers";
import categoryRouter from "./routers/category.routers";

connectDB();

const app = express();

app.use(express.json());

app.use("/api/authors", authorsRouter);
app.use("/api/categories", categoryRouter);


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
