// src/controllers/studentController.ts
import { Request, Response } from "express";
import { studentBusiness } from "../business/studentBusiness.js";

class StudentController {
  async getStudentsByInstitution(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const students = await studentBusiness.getStudentsByInstitution(Number(id));
      res.status(200).json(students);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: "Erro ao buscar estudantes", error: error.message });
      } else {
        res.status(500).json({ message: "Erro ao buscar estudantes", error: "Erro desconhecido" });
      }
    }
  }
}

export const studentController = new StudentController();