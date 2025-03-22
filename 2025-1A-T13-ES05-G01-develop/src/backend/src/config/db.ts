import dotenv from "dotenv";
import pg from "pg";
const { Pool } = pg;

dotenv.config();

interface EnvConfig {
  DB_USER: string;
  DB_HOST: string;
  DB_NAME: string;
  DB_PASSWORD: string;
  DB_PORT: string;
  DB_SSL: string;
}

const config: EnvConfig = {
  DB_USER: process.env.DB_USER || "",
  DB_HOST: process.env.DB_HOST || "",
  DB_NAME: process.env.DB_NAME || "",
  DB_PASSWORD: process.env.DB_PASSWORD || "",
  DB_PORT: process.env.DB_PORT || "5432",
  DB_SSL: process.env.DB_SSL || "false",
};

// Criando a conexão com o banco
const gallaudetDb = new Pool({
  user: config.DB_USER,
  host: config.DB_HOST,
  database: config.DB_NAME,
  password: config.DB_PASSWORD,
  port: parseInt(config.DB_PORT, 10),
  ssl: config.DB_SSL === "true" ? { rejectUnauthorized: false } : false, // SSL ativado se DB_SSL for "true"
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 20000,
});

export default gallaudetDb;
