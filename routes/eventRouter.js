import express from "express";
import multer from "multer";
import { protect } from "../middlewares/authMiddleware.js";
import {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} from "../controllers/eventsController.js";

const router = express.Router();

// Configuración de Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

// Rutas
router.post("/", protect, upload.single("image"), createEvent); // solo admin
router.get("/", getEvents);                                      // público
router.get("/:id", getEventById);                                 // público
router.put("/:id", protect, upload.single("image"), updateEvent); // solo admin
router.delete("/:id", protect, deleteEvent);                     // solo admin

export default router;
