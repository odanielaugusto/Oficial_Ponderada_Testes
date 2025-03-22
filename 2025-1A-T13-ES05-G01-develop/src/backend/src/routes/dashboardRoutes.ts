// src/routes/dashboardRoutes.ts
// Responsável por configurar as rotas relacionadas à dashboard.
// Define os endpoints e mapeia para os métodos do controller.

import { Router } from "express";
// import { DashboardController } from '../controllers/dashboardController.js';

const router = Router();

// const dashboardController = new DashboardController();

// Definir os endpoints
// router.get('/dashboard', dashboardController.getDashboardData.bind(dashboardController)); // Obter os dados da dashboard

// TODO: Apagar isto, é apenas um exemplo
router.get("/", (req, res) => {
  res.send(
    "Parabéns! Você fez uma requisição get no seguinte endpoint: /api/dashboard/"
  );
});

export default router;
