import express from "express";
import dotenv from "dotenv";
import User from "./models/user.model.js";
// import { connect } from "mongoose";
import connectDb from "./config/connectDb.js";
import cookieParser from "cookie-parser";
dotenv.config();
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
  connectDb();
});

await User.updateMany(
  { credits: { $exists: false } },
  { $set: { credits: 100 } },
);

console.log("Credits fixed");
