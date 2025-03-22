// src/routes/appointmentRoutes.ts
// Responsável por configurar as rotas relacionadas aos atendimentos.
// Define os endpoints e mapeia para os métodos do controller.

import { Router } from "express";
// import { AppointmentController } from '../controllers/appointmentController.js';

const router = Router();

// const appointmentController = new AppointmentController();

// Definir os endpoints
// router.post('/appointments', appointmentController.createAppointment.bind(appointmentController)); // Criar um atendimento
// router.put('/appointments/:id', appointmentController.editAppointment.bind(appointmentController)); // Editar um atendimento

// TODO: Apagar isto, é apenas um exemplo
router.get("/", (req, res) => {
  res.send(
    "Parabéns! Você fez uma requisição get no seguinte endpoint: /api/appointment/"
  );
});

export default router;
