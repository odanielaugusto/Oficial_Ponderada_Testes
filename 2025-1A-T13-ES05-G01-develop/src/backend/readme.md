# API Gallaudet

Esta é uma API backend construída com **Node.js**, **TypeScript**, **Express**, **PostgreSQL** e outras bibliotecas essenciais. A API está estruturada para fornecer um backend robusto e escalável.

## Arquitetura

A arquitetura da API segue o padrão **POO (Programação Orientada a Objetos)** e é dividida em várias camadas que se comunicam entre si:

- **Controllers**: Responsáveis por receber as requisições HTTP, validar os dados e encaminhá-los para a camada de negócios.
- **Business (Serviços)**: Contêm a lógica de negócios da aplicação, interagindo com os repositórios e executando as operações necessárias.
- **Repositories**: Responsáveis pela interação direta com o banco de dados PostgreSQL.
- **Routes**: Definem as rotas da API e fazem a conexão entre os controllers e as requisições HTTP.

## Funcionalidades

- Cadastro e gerenciamento de usuários
- Agendamento de consultas
- Dashboard com dados gerenciais
- Integração com banco de dados PostgreSQL

## Bibliotecas Utilizadas

### Dependências Principais

- **express**: Framework minimalista para criar o servidor HTTP e definir as rotas da API.
- **dotenv**: Biblioteca para carregar variáveis de ambiente a partir de um arquivo `.env`.
- **pg**: Cliente para PostgreSQL, utilizado para fazer a comunicação entre a API e o banco de dados.

### Dependências de Desenvolvimento

- **@types/express**: Tipagens para o Express, necessárias para o desenvolvimento com TypeScript.
- **@types/node**: Tipagens para o Node.js, também necessárias para o desenvolvimento com TypeScript.
- **nodemon**: Ferramenta para reiniciar automaticamente o servidor sempre que houver alterações no código-fonte.
- **ts-node**: Executa arquivos TypeScript diretamente, sem a necessidade de compilar manualmente para JavaScript.
- **tsx**: Alternativa moderna para execução de arquivos TypeScript.
- **typescript**: Compilador TypeScript, utilizado para compilar o código para JavaScript.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte maneira:

```
src/
│
├── controllers/        # Camada de controllers para cada entidade/funcionalidade
│
├── business/           # Camada de lógica de negócios
│
├── repositories/       # Interação com o banco de dados
│
├── routes/             # Definição das rotas da API
│
├── utils/              # Funções auxiliares
│
├── externalServices/   # Acesso a componentes externosfeature/homepage_redesign
│
├── index.ts            # Arquivo principal que inicializa o servidor
├── tsconfig.json       # Configurações do TypeScript
└── .env                # Variáveis de ambiente
```

## Como Rodar a Aplicação

### 1. Instalar as dependências:

```bash
npm install
```

### 2. Criar o arquivo `.env`:

Crie um arquivo `.env` na raiz do seu projeto e adicione as variáveis de ambiente necessárias, como as credenciais do banco de dados.

Exemplo de `.env`:

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=seu_banco_de_dados
```

### 3. Rodar o servidor em modo de desenvolvimento:

```bash
npm run dev
```

O servidor estará rodando na porta **3000** por padrão (`http://localhost:3000`).

### 4. Compilar para produção:

```bash
npm run build
```

### 5. Rodar o servidor em produção:

```bash
npm start
```

## Considerações Finais

Este projeto foi desenvolvido para ser modular, escalável e de fácil manutenção. Caso precise adicionar novas funcionalidades, basta seguir o padrão estabelecido na estrutura de pastas.

