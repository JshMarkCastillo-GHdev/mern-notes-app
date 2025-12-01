import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote); //update http://localhost:5001/api/notes/1(etc.)
router.delete("/:id", deleteNote); //delete http://localhost:5001/api/notes/1(etc.)

export default router;
