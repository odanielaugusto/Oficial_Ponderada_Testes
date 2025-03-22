// // src/repositories/AppointmentRepository.ts
// // Responsável pela interação direta com o banco de dados (PostgreSQL).
// // Este repositório lida com as operações de CRUD relacionadas ao modelo "Appointment" (Atendimento).

// import gallaudetDb from "../config/db.js";

// export class AppointmentRepository {
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

//   // Método para criar um atendimento
//   async create(appointment: { userId: number; professionalId: number; date: string; notes: string }) {
//     const result = await this.client.query(
//       'INSERT INTO appointments (user_id, professional_id, date, notes) VALUES ($1, $2, $3, $4) RETURNING *',
//       [appointment.userId, appointment.professionalId, appointment.date, appointment.notes]
//     );
//     return result.rows[0];
//   }

//   // Método para editar um atendimento
//   async update(id: number, updates: { date?: string; notes?: string }) {
//     const result = await this.client.query(
//       'UPDATE appointments SET date = COALESCE($1, date), notes = COALESCE($2, notes) WHERE id = $3 RETURNING *',
//       [updates.date, updates.notes, id]
//     );
//     return result.rows[0];
//   }
// }
