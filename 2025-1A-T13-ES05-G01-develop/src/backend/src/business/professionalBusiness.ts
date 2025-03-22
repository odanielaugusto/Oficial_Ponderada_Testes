// // src/business/ProfessionalBusiness.ts
// // Responsável pela lógica de negócios relacionada aos profissionais.
// // Essa camada processa dados recebidos do controller, valida e aplica regras de negócios antes de interagir com o repositório.

// import { ProfessionalRepository } from '../repositories/professionalRepository.js';

// export class ProfessionalBusiness {
//   private professionalRepository: ProfessionalRepository;

//   constructor() {
//     this.professionalRepository = new ProfessionalRepository();
//   }

//   // Método para retornar todos os profissionais
//   async getAllProfessionals() {
//     const professionals = await this.professionalRepository.findAll();
//     return professionals;
//   }

//   // Método para criar um novo profissional
//   async createProfessional(professionalData: { name: string, specialty: string, email: string }) {
//     const { name, specialty, email } = professionalData;

//     if (!name || !specialty || !email) {
//       throw new Error('Nome, especialidade e email são obrigatórios.');
//     }

//     // Validação de email (exemplo de regra de negócio)
//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     if (!emailPattern.test(email)) {
//       throw new Error('Email inválido.');
//     }

//     const newProfessional = await this.professionalRepository.create(professionalData);
//     return newProfessional;
//   }

//   // Método para atualizar um profissional
//   async updateProfessional(professionalId: string, professionalData: { name?: string, specialty?: string, email?: string }) {
//     const professional = await this.professionalRepository.findById(professionalId);
//     if (!professional) {
//       throw new Error('Profissional não encontrado.');
//     }

//     const updatedProfessional = await this.professionalRepository.update(professionalId, professionalData);
//     return updatedProfessional;
//   }
// }
