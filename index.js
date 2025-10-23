import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import eventRouter from "./routes/eventRouter.js";
import adminRouter from "./routes/adminRouter.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Para poder usar __dirname con ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos de la carpeta uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rutas
app.use("/events", eventRouter);
app.use("/admin", adminRouter);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Welcome to Taller404");
});

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error("Error MongoDB:", err));

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
