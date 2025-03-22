// // src/controllers/ProfessionalController.ts
// // Responsável por lidar com as requisições HTTP relacionadas aos profissionais.
// // Este controlador vai receber as requisições e chamar a lógica de negócios para os profissionais.

// import { Request, Response } from 'express';
// import { ProfessionalBusiness } from '../business/professionalBusiness.js';

// export class ProfessionalController {
//   private professionalBusiness: ProfessionalBusiness;

//   constructor() {
//     this.professionalBusiness = new ProfessionalBusiness();
//   }

//   // Método para retornar todos os profissionais
//   async getAllProfessionals(req: Request, res: Response) {
//     try {
//       const professionals = await this.professionalBusiness.getAllProfessionals();
//       res.json(professionals);
//     } catch (error) {
//       res.status(500).json({ message: 'Erro ao obter profissionais', error: error.message });
//     }
//   }

//   // Método para criar um novo profissional
//   async createProfessional(req: Request, res: Response) {
//     const { name, specialty, email } = req.body;
//     try {
//       const newProfessional = await this.professionalBusiness.createProfessional({ name, specialty, email });
//       res.status(201).json(newProfessional);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   }

//   // Método para atualizar um profissional
//   async updateProfessional(req: Request, res: Response) {
//     const { professionalId } = req.params;
//     const { name, specialty, email } = req.body;
//     try {
//       const updatedProfessional = await this.professionalBusiness.updateProfessional(professionalId, { name, specialty, email });
//       res.json(updatedProfessional);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   }
// }
