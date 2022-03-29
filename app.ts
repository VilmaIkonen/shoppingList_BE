import express from "express";
import {connect} from "mongoose";
import dotenv from "dotenv";
import routes from "./routes";

const app = express();
dotenv.config();

const DB_CONNECTION_URL = process.env.DB_CONNECTION_URL as string;
const PORT = process.env.PORT || 3000;

// middlewares = functions that execute when specific route is hit. Add here eg. authentication or routes
// app.use("/lista", () => {
//   console.log("Middleware lista sivulla")
// })

app.use(express.json())
app.use("/", routes)

// Connect to db
async function dbConnect(): Promise<void> {
  await connect(DB_CONNECTION_URL, () => {
    console.log("mongo connected")
  })
};

dbConnect();

// Listening the server
app.listen(PORT);
