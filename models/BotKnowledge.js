import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Create Schema.
const botKnowledgeSchema = Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true
    },
    answer: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const BotKnowledge = model("BotKnowledge", botKnowledgeSchema);

export default BotKnowledge;
