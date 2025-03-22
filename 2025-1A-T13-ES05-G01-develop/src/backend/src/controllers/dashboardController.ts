// // src/controllers/DashboardController.ts
// // Responsável por lidar com as requisições HTTP relacionadas ao dashboard.
// // Este controlador vai lidar com a lógica de negócios relacionada à visualização de dados e relatórios.

// import { Request, Response } from 'express';
// import { DashboardBusiness } from '../business/dashboardBusiness.js';

// export class DashboardController {
//   private dashboardBusiness: DashboardBusiness;

//   constructor() {
//     this.dashboardBusiness = new DashboardBusiness();
//   }

//   // Método para obter estatísticas gerais do dashboard
//   async getDashboardStats(req: Request, res: Response) {
//     try {
//       const stats = await this.dashboardBusiness.getDashboardStats();
//       res.json(stats);
//     } catch (error) {
//       res.status(500).json({ message: 'Erro ao obter estatísticas do dashboard', error: error.message });
//     }
//   }

//   // Método para obter os agendamentos do dia
//   async getTodaysAppointments(req: Request, res: Response) {
//     try {
//       const appointments = await this.dashboardBusiness.getTodaysAppointments();
//       res.json(appointments);
//     } catch (error) {
//       res.status(500).json({ message: 'Erro ao obter agendamentos do dia', error: error.message });
//     }
//   }

//   // Método para obter os profissionais mais requisitados
//   async getTopProfessionals(req: Request, res: Response) {
//     try {
//       const topProfessionals = await this.dashboardBusiness.getTopProfessionals();
//       res.json(topProfessionals);
//     } catch (error) {
//       res.status(500).json({ message: 'Erro ao obter profissionais mais requisitados', error: error.message });
//     }
//   }
// }
