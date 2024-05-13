import express from "express";
import * as business from "./business";

const app = express();
const port = 3000;

app.get("/users/:id/vocabulary/level", async (req, res) => {
  const userId = business.getNumber(req.params.id);
  const result = await business.getUserVocabularyLevel(userId);
  res.json(result);
});

app.post("/users/word", async (req, res) => {
  const userId = business.getNumber(req.body.id);
  const word = req.body.word;
  try {
    await business.postUserWord(userId, word);
    res.json(true);
  } catch (error) {
    res.json(false);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
