import express from "express";
import {
  getAllBotKnowledge,
  getOneBotKnowledge,
  createBotKnowledge,
} from "../controllers/botKnowledge.js";

const router = express.Router();

router
  .get("/", getAllBotKnowledge)
  .post("/search", getOneBotKnowledge)
  .post("/create", createBotKnowledge);

export default router;
