// src/routes/studentRoutes.ts
import { Router } from "express";
import { studentController } from "../controllers/studentController.js";

const router = Router();

// Rota para buscar estudantes por instituição
router.get("/:id", studentController.getStudentsByInstitution);

export default router;
