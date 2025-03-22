// // src/business/DashboardBusiness.ts
// // Responsável pela lógica de negócios relacionada ao dashboard.
// // Essa camada processa dados recebidos do controller e gera relatórios ou estatísticas necessárias.

// import { AppointmentRepository } from '../repositories/appointmentRepository.js';
// import { ProfessionalRepository } from '../repositories/professionalRepository.js';

// export class DashboardBusiness {
//   private appointmentRepository: AppointmentRepository;
//   private professionalRepository: ProfessionalRepository;

//   constructor() {
//     this.appointmentRepository = new AppointmentRepository();
//     this.professionalRepository = new ProfessionalRepository();
//   }

//   // Método para obter estatísticas gerais do dashboard
//   async getDashboardStats() {
//     const totalAppointments = await this.appointmentRepository.count();
//     const totalProfessionals = await this.professionalRepository.count();

//     return {
//       totalAppointments,
//       totalProfessionals,
//     };
//   }

//   // Método para obter todos os agendamentos do dia
//   async getTodaysAppointments() {
//     const today = new Date().toISOString().split('T')[0]; // Pega a data atual no formato YYYY-MM-DD
//     const appointments = await this.appointmentRepository.findByDate(today);
//     return appointments;
//   }

//   // Método para obter os profissionais mais requisitados
//   async getTopProfessionals() {
//     const professionals = await this.professionalRepository.findAll();
//     const professionalsWithAppointmentCount = await Promise.all(
//       professionals.map(async (professional) => {
//         const appointmentCount = await this.appointmentRepository.countByProfessional(professional.id);
//         return { ...professional, appointmentCount };
//       })
//     );

//     // Ordenar profissionais por número de agendamentos
//     professionalsWithAppointmentCount.sort((a, b) => b.appointmentCount - a.appointmentCount);
//     return professionalsWithAppointmentCount.slice(0, 5); // Retorna os 5 mais requisitados
//   }
// }
