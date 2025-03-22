import axios, { AxiosInstance } from "axios";
import dotenv from "dotenv";

dotenv.config();


class SchoolApiService {
  private apiClient: AxiosInstance;
  private token: string;

  constructor() {
    this.token = process.env.EXTERNAL_API_TOKEN || "";
    const baseURL = process.env.EXTERNAL_API_BASE_URL || "";

    if (!this.token || !baseURL) {
      throw new Error(
        "As variáveis EXTERNAL_API_TOKEN ou EXTERNAL_API_BASE_URL não estão definidas no .env"
      );
    }

    this.apiClient = axios.create({
      baseURL: baseURL,
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: "application/json",
      },
    });
  }

  // =============================
  // 📌 Instituições
  // =============================

  // 🔹 Lista todas as instituições
  async getInstitutions() {
    try {
      const response = await this.apiClient.get("/institutions");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar instituições:", error);
      throw error;
    }
  }

  // 🔹 Obtém detalhes de uma instituição específica
  async getInstitutionById(id: number) {
    try {
      const response = await this.apiClient.get(`/institutions/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar instituição com ID ${id}:`, error);
      throw error;
    }
  }

  // 🔹 Lista os alunos de uma instituição
  async getStudentsByInstitution(id: number) {
    try {
      const response = await this.apiClient.get(`/institutions/${id}/students`);
      return response.data;
    } catch (error) {
      console.error(
        `Erro ao buscar alunos da instituição com ID ${id}:`,
        error
      );
      throw error;
    }
  }

  // =============================
  // 📌 Estudantes
  // =============================

  // 🔹 Obtém detalhes de um estudante específico
  async getStudentById(id: number) {
    try {
      const response = await this.apiClient.get(`/students/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar aluno com ID ${id}:`, error);
      throw error;
    }
  }

  // 🔹 Lista todas as matrículas de um estudante
  async getEnrollmentsByStudent(id: number) {
    try {
      const response = await this.apiClient.get(`/students/${id}/enrollments`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar matrículas do aluno com ID ${id}:`, error);
      throw error;
    }
  }

  // =============================
  // 📌 Cursos
  // =============================

  // 🔹 Lista todos os cursos
  async getCourses() {
    try {
      const response = await this.apiClient.get("/courses");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar cursos:", error);
      throw error;
    }
  }

  // 🔹 Obtém detalhes de um curso específico
  async getCourseById(id: number) {
    try {
      const response = await this.apiClient.get(`/courses/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar curso com ID ${id}:`, error);
      throw error;
    }
  }

  // 🔹 Lista os alunos matriculados em um curso
  async getStudentsByCourse(id: number) {
    try {
      const response = await this.apiClient.get(`/courses/${id}/students`);
      return response.data;
    } catch (error) {
      console.error(
        `Erro ao buscar alunos do curso com ID ${id}:`,
        error
      );
      throw error;
    }
  }
}

// Exportamos uma instância única da classe (Singleton)
export const schoolApiService = new SchoolApiService();
