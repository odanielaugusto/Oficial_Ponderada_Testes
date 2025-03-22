// // src/controllers/AppointmentController.ts
// // Responsável por lidar com as requisições HTTP relacionadas aos agendamentos.
// // Este controlador vai receber as requisições e chamar a lógica de negócios para agendamentos.

// import { Request, Response } from 'express';
// import { AppointmentBusiness } from '../business/appointmentBusiness.js';

// export class AppointmentController {
//   private appointmentBusiness: AppointmentBusiness;

//   constructor() {
//     this.appointmentBusiness = new AppointmentBusiness();
//   }

//   // Método para retornar todos os agendamentos
//   async getAllAppointments(req: Request, res: Response) {
//     try {
//       const appointments = await this.appointmentBusiness.getAllAppointments();
//       res.json(appointments);
//     } catch (error) {
//       res.status(500).json({ message: 'Erro ao obter agendamentos', error: error.message });
//     }
//   }

//   // Método para criar um novo agendamento
//   async createAppointment(req: Request, res: Response) {
//     const { date, time, userId, professionalId } = req.body;
//     try {
//       const newAppointment = await this.appointmentBusiness.createAppointment({ date, time, userId, professionalId });
//       res.status(201).json(newAppointment);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   }

//   // Método para cancelar um agendamento
//   async cancelAppointment(req: Request, res: Response) {
//     const { appointmentId } = req.params;
//     try {
//       await this.appointmentBusiness.cancelAppointment(appointmentId);
//       res.status(200).json({ message: 'Agendamento cancelado com sucesso' });
//     } catch (error) {
//       res.status(500).json({ message: 'Erro ao cancelar agendamento', error: error.message });
//     }
//   }
// }
