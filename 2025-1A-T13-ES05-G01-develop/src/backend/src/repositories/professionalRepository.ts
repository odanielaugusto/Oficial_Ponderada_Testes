// // src/repositories/ProfessionalRepository.ts
// // Responsável pela interação direta com o banco de dados (PostgreSQL).
// // Este repositório lida com as operações de CRUD relacionadas ao modelo "Professional" (Profissional).

// import gallaudetDb from "../config/db.js";

// export class ProfessionalRepository {
//   private client: Client;

//   constructor() {
//     this.client = new Client({
//       host: 'localhost',
//       user: 'postgres',
//       password: 'password',
//       database: 'your_database_name',
//     });
//   }

//   async connect() {
//     await this.client.connect();
//   }

//   async disconnect() {
//     await this.client.end();
//   }

//   // Método para criar um profissional
//   async create(professional: { name: string; specialty: string }) {
//     const result = await this.client.query(
//       'INSERT INTO professionals (name, specialty) VALUES ($1, $2) RETURNING *',
//       [professional.name, professional.specialty]
//     );
//     return result.rows[0];
//   }

//   // Método para editar um profissional
//   async update(id: number, updates: { name?: string; specialty?: string }) {
//     const result = await this.client.query(
//       'UPDATE professionals SET name = COALESCE($1, name), specialty = COALESCE($2, specialty) WHERE id = $3 RETURNING *',
//       [updates.name, updates.specialty, id]
//     );
//     return result.rows[0];
//   }
// }
