<Table>
  <tr>
    <td><a href= "https://www.cps.sp.gov.br/"><img src="../../docs/assets/logo_cps_inteli.png" alt="Centro Paula Souza" border="0"></td>
  </tr>
</table>


# Nome do Grupo: ApoiaEdu

# Gallaudet DB

## Visão Geral
Este diretório contém o script SQL para a criação do banco de dados **Gallaudet DB**, que gerencia usuários administrativos, registros de uso, profissionais, atendimentos e tecnologias assistivas. O banco de dados foi modelado seguindo boas práticas de normalização e integridade referencial.

Outros Scripts de SQL que venham a ser criados no futuro, ficarão nessa pasta `~/src/database`

## Estrutura do Banco de Dados
O banco de dados **Gallaudet DB** é composto pelas seguintes tabelas:

1. **user** - Armazena os usuários administrativos responsáveis pela gestão do sistema.
2. **log_usage** - Registra as ações realizadas pelos usuários no sistema.
3. **professional** - Contém informações sobre os profissionais envolvidos nos atendimentos.
4. **appointment** - Representa os atendimentos realizados para alunos ou para manutenção de tecnologias assistivas.
5. **assistive_technology** - Registra as tecnologias assistivas disponíveis.

## Como Executar o Script
### Pré-requisitos
- PostgreSQL instalado e configurado
- Um terminal ou ambiente de execução SQL

### Passos para execução
1. Acesse o terminal do PostgreSQL e execute o seguinte comando para criar o banco de dados:
   ```sql
   CREATE DATABASE gallaudet_db;
   ```
2. Acesse o banco de dados:
   ```sh
   psql -d gallaudet_db
   ```
3. Execute o script SQL para criar as tabelas:
   ```sh
   \i src/database/01_create_database.sql
   ```

## Estrutura das Tabelas
### Tabela `user`
Armazena os usuários administrativos.

| Coluna          | Tipo            | Descrição |
|----------------|---------------|-----------|
| id             | SERIAL PRIMARY KEY | Identificador único do usuário |
| password       | VARCHAR(255) NOT NULL | Senha criptografada do usuário |
| email         | VARCHAR(255) UNIQUE NOT NULL | Email único do usuário |
| type          | VARCHAR(50) NOT NULL | Tipo de usuário (Gerente Unidade, Gerente Administrativo) |
| institution_id | INT NULL | ID opcional da instituição associada |

### Tabela `log_usage`
Registra logs de ações realizadas no sistema.

| Coluna         | Tipo         | Descrição |
|---------------|-------------|-----------|
| id           | SERIAL PRIMARY KEY | Identificador único do log |
| action       | VARCHAR(255) NOT NULL | Ação registrada |
| action_time  | TIMESTAMP DEFAULT CURRENT_TIMESTAMP | Data e hora da ação |
| user_id      | INT NOT NULL | ID do usuário que realizou a ação |
| details      | VARCHAR(500) NULL | Detalhes adicionais da ação |
| appointment_id | INT NULL | ID opcional do atendimento relacionado |

### Tabela `professional`
Registra os profissionais que realizam atendimentos.

| Coluna         | Tipo         | Descrição |
|---------------|-------------|-----------|
| id           | SERIAL PRIMARY KEY | Identificador único do profissional |
| type        | VARCHAR(50) NOT NULL | Tipo de profissional (ex: Psicólogo, Cuidador) |
| name        | VARCHAR(255) NOT NULL | Nome do profissional |
| phone_number | VARCHAR(20) NOT NULL | Número de telefone |

### Tabela `appointment`
Registra os atendimentos prestados.

| Coluna         | Tipo         | Descrição |
|---------------|-------------|-----------|
| id           | SERIAL PRIMARY KEY | Identificador único do atendimento |
| professional_id | INT NULL | ID do profissional responsável |
| student_id   | INT NOT NULL | ID do estudante atendido |
| assistive_technology_id | INT NULL | ID opcional da tecnologia assistiva envolvida |
| start_date   | DATE NOT NULL | Data de início do atendimento |
| end_date     | DATE NULL | Data de término do atendimento (caso aplicável) |
| description  | TEXT NULL | Observações adicionais |
| status       | VARCHAR(20) NOT NULL CHECK (status IN ('Ativo', 'Finalizado', 'Cancelado', 'Pausado')) | Status do atendimento |

### Tabela `assistive_technology`
Registra tecnologias assistivas disponíveis.

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| id | SERIAL PRIMARY KEY | Identificador único da tecnologia assistiva |
| type | VARCHAR(50) NOT NULL | Tipo de tecnologia assistiva |
| description | TEXT NULL | Descrição da tecnologia assistiva |

### Dados Iniciais (Seed)
O script `02_initial_data.sql` popula o banco com dados fictícios para desenvolvimento e teste.

### Como Utilizar
1. **Criação do Banco e Tabelas:**
   É necessário que tenha o banco criádo antes de rodar os dados iniciais
2. **Inserir Dados Iniciais:**
   ```sh
   \i src/database/initial_data.sql
   ```

### Informações Importantes
- Execute a criação de tabelas antes do seed.
- Dados fictícios que podem ser personalizado de acordo com a necessidade no arquivo 02_initial_data.sql.
- Importante para testar as funcionalidades corretamente.
