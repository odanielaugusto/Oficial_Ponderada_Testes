// // src/business/UserBusiness.ts
// // Responsável pela lógica de negócios. Processa dados recebidos do controller e interage com o repositório.
// // Essa camada pode validar dados ou aplicar regras de negócios antes de enviar para o repositório.

// import { UserRepository } from '../repositories/userRepository.js';

// export class UserBusiness {
//   private userRepository: UserRepository;

//   constructor() {
//     this.userRepository = new UserRepository();
//   }

//   // Exemplo de método para obter todos os usuários
//   async getAllUsers() {
//     const users = await this.userRepository.findAll();
//     return users;
//   }

//   // Exemplo de método para criar um usuário
//   async createUser(userData: { name: string, email: string }) {
//     if (!userData.name || !userData.email) {
//       throw new Error('Nome e email são obrigatórios.');
//     }
//     const newUser = await this.userRepository.create(userData);
//     return newUser;
//   }
// }
