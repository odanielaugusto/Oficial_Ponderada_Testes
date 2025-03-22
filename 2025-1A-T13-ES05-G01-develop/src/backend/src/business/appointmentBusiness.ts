// // src/business/AppointmentBusiness.ts
// // Responsável pela lógica de negócios relacionada aos agendamentos.
// // Essa camada processa dados recebidos do controller, valida e aplica regras de negócios antes de interagir com o repositório.

// import { AppointmentRepository } from '../repositories/appointmentRepository.js';

// export class AppointmentBusiness {
//   private appointmentRepository: AppointmentRepository;

//   constructor() {
//     this.appointmentRepository = new AppointmentRepository();
//   }

//   // Método para retornar todos os agendamentos
//   async getAllAppointments() {
//     const appointments = await this.appointmentRepository.findAll();
//     return appointments;
//   }

//   // Método para criar um novo agendamento
//   async createAppointment(appointmentData: { date: string, time: string, userId: string, professionalId: string }) {
//     const { date, time, userId, professionalId } = appointmentData;

//     if (!date || !time || !userId || !professionalId) {
//       throw new Error('Data, hora, usuário e profissional são obrigatórios.');
//     }

//     // Validação da data e hora (exemplo de regra de negócio)
//     const currentDate = new Date();
//     const appointmentDate = new Date(`${date} ${time}`);
//     if (appointmentDate < currentDate) {
//       throw new Error('O agendamento não pode ser feito no passado.');
//     }

//     const newAppointment = await this.appointmentRepository.create(appointmentData);
//     return newAppointment;
//   }

//   // Método para cancelar um agendamento
//   async cancelAppointment(appointmentId: string) {
//     const appointment = await this.appointmentRepository.findById(appointmentId);
//     if (!appointment) {
//       throw new Error('Agendamento não encontrado.');
//     }
//     await this.appointmentRepository.delete(appointmentId);
//   }
// }
