// src/routes/professionalRoutes.ts
// Responsável por configurar as rotas relacionadas aos profissionais.
// Define os endpoints e mapeia para os métodos do controller.

import { Router } from "express";
// import { ProfessionalController } from '../controllers/professionalController.js';

const router = Router();

// const professionalController = new ProfessionalController();

// Definir os endpoints
// router.post('/professionals', professionalController.createProfessional.bind(professionalController)); // Criar um profissional
// router.put('/professionals/:id', professionalController.editProfessional.bind(professionalController)); // Editar um profissional

// TODO: Apagar isto, é apenas um exemplo
router.get("/", (req, res) => {
  res.send(
    "Parabéns! Você fez uma requisição get no seguinte endpoint: /api/professional/"
  );
});

export default router;
