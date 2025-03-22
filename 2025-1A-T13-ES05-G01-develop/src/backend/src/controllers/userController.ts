  // // src/controllers/UserController.ts
  //import pool from "../config/renderClient.js";
  // // Este controlador vai receber as requisições e chamar a lógica de negócios (Business).

  // import { Request, Response } from 'express';
  // import { UserBusiness } from '../business/userBusiness.js';

  // export class UserController {
  //   private userBusiness: UserBusiness;

  //   constructor() {
  //     this.userBusiness = new UserBusiness();
  //   }

  //   // Método para retornar todos os usuários
  //   async getAllUsers(req: Request, res: Response) {
  //     try {
  //       const users = await this.userBusiness.getAllUsers();
  //       res.json(users);
  //     } catch (error) {
  //       res.status(500).json({ message: 'Erro ao obter usuários', error: error.message });
  //     }
  //   }

  //   // Método para criar um novo usuário
  //   async createUser(req: Request, res: Response) {
  //     const { name, email } = req.body;
  //     try {
  //       const newUser = await this.userBusiness.createUser({ name, email });
  //       res.status(201).json(newUser);
  //     } catch (error) {
  //       res.status(400).json({ message: error.message });
  //     }
  //   }
  // }
