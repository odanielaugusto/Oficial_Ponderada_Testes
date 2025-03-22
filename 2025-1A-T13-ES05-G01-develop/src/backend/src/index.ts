import express from "express";
import dotenv from "dotenv";
import gallaudetDb from "./config/db.js";

// Rotas:
import studentRoutes from "./routes/studentRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import professionalRoutes from "./routes/professionalRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// Usar as rotas configuradas
app.use("/", authRoutes); 
app.use("/api/user/", userRoutes);
app.use("/api/student/", studentRoutes);
app.use("/api/appointment/", appointmentRoutes);
app.use("/api/dashboard/", dashboardRoutes);
app.use("/api/professional/", professionalRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Testando a conexão ao iniciar a aplicação
gallaudetDb
  .connect()
  .then(() => console.log("✅ Conectado ao PostgreSQL com sucesso!"))
  .catch((err) => console.error("❌ Erro ao conectar ao banco:", err));