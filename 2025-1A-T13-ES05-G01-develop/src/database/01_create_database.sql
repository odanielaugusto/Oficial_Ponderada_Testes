-- Criar o banco de dados
CREATE DATABASE gallaudet_db;

-- Usar o banco de dados
\c gallaudet_db;

-- Criar tabela de usuários administrativos
CREATE TABLE IF NOT EXISTS "user" (
    id SERIAL PRIMARY KEY,
    password VARCHAR(255) NOT NULL,  -- Senhas geralmente são armazenadas como hashes fixos, então VARCHAR(255) é suficiente
    email VARCHAR(255) UNIQUE NOT NULL,
    type VARCHAR(50) NOT NULL CHECK (type IN ('Gerente Unidade', 'Gerente Administrativo')),
    institution_id INT NULL
);

-- Criar tabela de registros de uso (logs)
CREATE TABLE IF NOT EXISTS log_usage (
    id SERIAL PRIMARY KEY,
    action VARCHAR(255) NOT NULL,
    action_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    details VARCHAR(500) NULL,
    appointment_id INT,
    FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE,
    FOREIGN KEY (appointment_id) REFERENCES appointment(id) ON DELETE SET NULL
);

-- Criar tabela de profissionais
CREATE TABLE IF NOT EXISTS professional (
    id SERIAL PRIMARY KEY,
    type VARCHAR(50) NOT NULL CHECK (type IN ('Cuidador', 'Agente de Inclusão Escolar', 'Psicólogo', 'Tradutor e Intérprete de Libras', 'Técnico de Enfermagem')),
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL
);

-- Criar tabela de compromissos (atendimentos)
CREATE TABLE IF NOT EXISTS appointment (
    id SERIAL PRIMARY KEY,
    professional_id INT NULL,
    student_id INT NOT NULL,
    assistive_technology_id INT NULL,
    start_date DATE NOT NULL,
    end_date DATE NULL,
    description TEXT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('Ativo', 'Finalizado', 'Cancelado', 'Pausado')),
    FOREIGN KEY (professional_id) REFERENCES professional(id) ON DELETE CASCADE,
    FOREIGN KEY (assistive_technology_id) REFERENCES assistive_technology(id) ON DELETE SET NULL,
    CHECK (
        (professional_id IS NOT NULL AND assistive_technology_id IS NULL) OR
        (professional_id IS NULL AND assistive_technology_id IS NOT NULL)
    )
);

-- Criar tabela de tecnologias assistivas
CREATE TABLE IF NOT EXISTS assistive_technology (
    id SERIAL PRIMARY KEY,
    type VARCHAR(50) NOT NULL CHECK (type IN ('Lupa', 'Leitor de Tela', 'Cadeira de Rodas')),
    description TEXT NULL
);
