import express from "express";
import dotenv from "dotenv"
import cors from "cors";

import connectionDB from "./config/db.js";
import routerKnowledge from "./routes/BotKnowledgeRoutes.js";

const app = express();
app.use(express.json());

// Environment Variables.
dotenv.config();

// Connection with database.
connectionDB();

// Configuration CORS.
const whitelist = [process.env.FRONTEND_URL];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Cors Errors."));
    }
  }
};
app.use(cors(corsOptions));

// Routing.
app.use("/api/knowledge", routerKnowledge);

// Port server.
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server run ${PORT}/`);
})
