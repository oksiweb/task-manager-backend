import express from "express";
import tasks from "./routes/tasks.js";
import { connectDB } from "./db/connect.js";
import dotenv from "dotenv";
import cors from "cors";
import { notFound } from "./middleware/not-found.js";
import { errorHandler } from "./middleware/error-handler.js";

const app = express();
dotenv.config();

// middleware
app.use(express.json());
app.use(cors());
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB();
    app.listen(
      process.env.PORT,
      console.log(`Server is listening on port ${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
