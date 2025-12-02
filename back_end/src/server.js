import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
// for deplmnt
const __dirname = path.resolve();

if (process.env.NODE_ENV !== "production") {
  // middleware for cross-site dev
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
// call this before running express and rate limiter in order for the front-end to respond beforehand
app.use(express.json()); // So we can read the JSON
//app.use(rateLimiter);

app.use("/api/notes", rateLimiter, notesRoutes);

// For deplmnt
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../front_end/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../front_end", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(5001, () => {
    console.log("Server Started on PORT:", PORT);
  });
});
