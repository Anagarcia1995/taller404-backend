import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import eventRouter from "./routes/eventRouter.js";
import adminRouter from "./routes/adminRouter.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/events", eventRouter);
app.use("/admin", adminRouter)

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Welcome to Taller404");
});

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error("Error MongoDB:", err));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
