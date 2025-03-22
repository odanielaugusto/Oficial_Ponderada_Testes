// src/routes/userRoutes.ts
// Responsável por configurar as rotas de acesso à API.
// Define os endpoints e mapeia para os métodos do controller.

import { Router } from "express";
// import { UserController } from '../controllers/userController.js';

const router = Router();

// const userController = new UserController();

// Definir os endpoints
// router.get('/users', userController.getAllUsers.bind(userController)); // Obter todos os usuários
// router.post('/users', userController.createUser.bind(userController)); // Criar um novo usuário

// TODO: Apagar isto, é apenas um exemplo
router.get("/", (req, res) => {
  res.send(
    "Parabéns! Você fez uma requisição get no seguinte endpoint: /api/user/"
  );
});

export default router;
