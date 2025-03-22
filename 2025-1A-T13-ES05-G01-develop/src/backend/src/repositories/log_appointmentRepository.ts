// // src/repositories/LogAppointmentRepository.ts
// // Responsável por armazenar logs de ações relacionadas a atendimentos.
// // Este repositório registra eventos que ocorrem em um atendimento, como criação, atualização ou cancelamento.

// import gallaudetDb from "../config/db.js";

// export class LogAppointmentRepository {
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

//   // Método para registrar um log de atendimento
//   async createLog(log: { appointmentId: number; action: string; timestamp: string }) {
//     const result = await this.client.query(
//       'INSERT INTO appointment_logs (appointment_id, action, timestamp) VALUES ($1, $2, $3) RETURNING *',
//       [log.appointmentId, log.action, log.timestamp]
//     );
//     return result.rows[0];
//   }

//   // Método para buscar logs por atendimento
//   async findByAppointmentId(appointmentId: number) {
//     const result = await this.client.query(
//       'SELECT * FROM appointment_logs WHERE appointment_id = $1',
//       [appointmentId]
//     );
//     return result.rows;
//   }
// }
