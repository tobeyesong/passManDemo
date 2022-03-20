/** @format */

import express from "express";
const router = express.Router();
import {
  getNotes,
  getNoteById,
  deleteNote,
  createNote,
  updateNote,
} from "../controllers/notesController.js";

router.route("/").get(getNotes).post(createNote);
router.route("/:id").get(getNoteById).delete(deleteNote).put(updateNote);

export default router;
