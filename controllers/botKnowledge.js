import BotKnowledge from "../models/botKnowledge.js";

// Functions.
function removeChartSpetial(string) {
  // Remove accent mark.
  string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  // Remove special characters.
  string = string.replace(/[^\w\s]/g, "");
  // Lowercase.
  string = string.toLowerCase();

  return string;
}

// Get all.
const getAllBotKnowledge = async (req, res) => {
  try {
    const knowledges = await BotKnowledge.find({});
    res.json(knowledges);
  } catch (error) {
    console.log(error);
  }
}

// Get one.
const getOneBotKnowledge = async (req, res) => {
  try {
    const { question } = req.body;
    const existAnswer = await BotKnowledge.findOne({ question: removeChartSpetial(question) });

    if (existAnswer) {
      const { answer } = existAnswer;
      res.json(answer);
    }
    else {
      const error = new Error("No se encontró una respuesta para tu pregunta.");
      return res.json(error.message);
    }
  } catch (error) {
    console.log(error);
  }
}

// Create.
const createBotKnowledge = async (req, res) => {
  try {
    const newKnowledge = new BotKnowledge(req.body);
    newKnowledge.question = removeChartSpetial(newKnowledge.question);
    const knowledgeStored = await newKnowledge.save();
    res.json(knowledgeStored);
  } catch (error) {
    console.log(error);
  }
};

export { getAllBotKnowledge, createBotKnowledge, getOneBotKnowledge };
