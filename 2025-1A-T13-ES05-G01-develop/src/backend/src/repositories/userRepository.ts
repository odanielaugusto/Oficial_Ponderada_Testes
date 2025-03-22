// // src/repositories/UserRepository.ts
// // Responsável pela interação direta com o banco de dados (PostgreSQL).
// // Este repositório lida com as operações de CRUD relacionadas ao modelo "User".

// import gallaudetDb from "../config/db.js";

// export class UserRepository {
//   private client: Client;

//   constructor() {
//     this.client = new Client({
//       host: 'localhost', // ou onde o seu banco está
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

//   // Método para encontrar todos os usuários
//   async findAll() {
//     const result = await this.client.query('SELECT * FROM users');
//     return result.rows;
//   }

//   // Método para encontrar um usuário por ID
//   async findById(id: number) {
//     const result = await this.client.query('SELECT * FROM users WHERE id = $1', [id]);
//     return result.rows[0];
//   }

//   // Método para criar um usuário
//   async create(user: { name: string, email: string }) {
//     const result = await this.client.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [user.name, user.email]);
//     return result.rows[0];
//   }

//   // Outros métodos de CRUD (Update, Delete) podem ser adicionados aqui
// }
