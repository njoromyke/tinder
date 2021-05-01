import express from "express";
import mongoose from "mongoose";
import connectDB from "./conn/DB.js";
import Cards from "./models/Cards.js";
import cors from "cors";
const app = express();
import path from "path";
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "build", "index.html"))
);
app.use(cors());
connectDB();
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.status(200).send("hello");
});

app.post("/tinder/card", async (req, res) => {
  const dbCard = req.body;
  try {
    const cards = await Cards.create(dbCard, (err, data) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(201).send(data);
    });
    res.status(201).json();
  } catch (error) {
    console.error(error);
  }
});
app.get("/tinder/card", async (req, res) => {
  const cards = await Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
