<div align="center">
  <a href="https://www.inteli.edu.br/">
    <img src="../assets/logo_cps_inteli.png"
         alt="Imagem contendo a logotipo do Centro Paula Souza e do Inteli"
         border="0"
         style="max-width: 600px; width: 100%; height: auto;">
  </a>
</div>

<br>

# Nome do Projeto: Gallaudet

# Nome do Grupo: ApoiaEdu

## Integrantes:

- <a href="https://www.linkedin.com/in/anna-riciopo/">Anna Giulia Marques Riciopo</a>  
- <a href="https://www.linkedin.com/in/danielaraujogonncalves/">Daniel Augusto de Araujo Gonçalves</a>  
- <a href="https://www.linkedin.com/in/joao-souza-campos/">João Victor de Souza Campos</a>  
- <a href="https://www.linkedin.com/in/lucas-brasil9/">Lucas Paiva Brasil</a>  
- <a href="https://www.linkedin.com/in/natalycunha/">Nataly de Souza Cunha</a>  
- <a href="https://www.linkedin.com/in/otavio-vasc/">Otávio de Carvalho Vasconcelos</a>  
- <a href="https://www.linkedin.com/in/thiagogomesalmeida/">Thiago Gomes de Almeida</a>

<br>

# Sumário

# Sumário

- [1. Introdução](#1-introdução)  
- [2. Padrões de Codificação](#2-padrões-de-codificação)  
  - [2.1 Naming Conventions](#21-naming-conventions)  
  - [2.2 Uso de Ferramentas para Padronização de Código](#22-uso-de-ferramentas-para-padronização-de-código)  
  - [2.3 Comentários e Documentação](#23-comentários-e-documentação)  
- [3. Padrões de Projeto](#3-padrões-de-projeto)  
  - [3.1 Design Patterns](#31-design-patterns)  
  - [3.2 Arquitetura de Software](#32-arquitetura-de-software)  
- [4. Práticas de Desenvolvimento](#4-práticas-de-desenvolvimento)  
  - [4.1 Testes Automatizados](#41-testes-automatizados)  
  - [4.2 Controle de Qualidade](#42-controle-de-qualidade)  
- [5. Ferramentas e Tecnologias](#5-ferramentas-e-tecnologias)


# 1. Introdução
&ensp; Este documento tem como objetivo estabelecer um conjunto de padrões e diretrizes para o desenvolvimento de software, garantindo a qualidade, a manutenibilidade e a consistência do código. A adesão a esses padrões melhora a legibilidade do código, facilita a colaboração entre os desenvolvedores e reduz o tempo de depuração e manutenção.

&ensp; A definição de convenções permite que o time trabalhe de maneira organizada e produtiva, minimizando ambiguidades e promovendo boas práticas. Este documento também enfatiza o uso de ferramentas automatizadas para garantir conformidade com os padrões de código.

# 2. Padrões de Codificação

## 2.1 Naming Conventions

- Variáveis e Funções: Utilize camelCase e nomes em inglês
  - Exemplos:
    - `let userName = "John";`
    - `function calculateTotal() { ... }`

- Classes e Interfaces: Utilize PascalCase e nomes em inglês
  - Exemplos:
    - `class UserProfile { ... }`
    - `interface PaymentGateway { ... }`  

- Constantes: Utilize UPPER_CASE com underscores e nomes em inglês
  - Exemplo:
    - `const MAX_USERS = 100;`

## 2.2 Uso de Ferramentas para Padronização de Código
&ensp; Embora a padronização de escrita de código seja fundamental, é altamente recomendável utilizar ferramentas automáticas para garantir a conformidade com boas práticas.

&ensp; A análise estática de código e a formatação automática, através de ferramentas como ESLint e Prettier (para JavaScript/TypeScript) ou equivalentes para outras linguagens, reduzem a necessidade de revisão manual e evitam erros comuns. Essas ferramentas podem ser configuradas para aplicar automaticamente os padrões mais atualizados do ECMAScript (ou padrões equivalentes da linguagem utilizada). Dessa forma, a revisão de código pode se concentrar em aspectos lógicos e estruturais, ao invés de formatação.

&ensp; Recomenda-se que os desenvolvedores habilitem essas ferramentas em seus editores de código para garantir um ambiente de desenvolvimento consistente e eficiente.

## 2.3 Comentários e Documentação

- Comentários de Linha: Recomenda-se que sejam escritos em inglês, mas não é obrigatório. Devem ser usados para explicar lógica complexa.
  - Exemplo: `// Calculates the total with discount`

- Comentários de Bloco: Utilize JSDoc para documentar funções e classes.
  - Exemplo:
    ```
    /**
    * Calculates the total amount of an order.
    * @param {number} price - Price per item.
    * @param {number} quantity - Quantity of items.
    * @returns {number} Total calculated.
    */
    function calculateTotal(price, quantity) {
        return price * quantity;
    }
    ```

- Documentação da API:
  - Utilizar SWAGGER para documentação de APIs a partir dos comentários do código.
  - Configurar uma rota, como `/api-docs`, para que a documentação seja acessível aos desenvolvedores e stakeholders.

# 3. Padrões de Projeto

## 3.1 Design Patterns
<!-- <TODO> -->
_Opcionalmente, o grupo pode definir um ou mais design patterns para serem adotados, como forma de exercitarem tipos de solução para problemas/situações recorrentes_
_Sugestão de leitura: https://refactoring.guru/_

## 3.2 Arquitetura de Software
<!-- <TODO> -->
- Utilize a Arquitetura de Três Camadas: Separe a lógica de negócios (Camada de Negócios), a interface do usuário (Camada de Apresentação) e o acesso aos dados (Camada de Dados).
  - Exemplo: Em uma aplicação Angular, utilize serviços para lógica de negócios, componentes para a interface e controladores para gerenciar a interação.

# 4. Práticas de Desenvolvimento

## 4.1 Testes Automatizados

- Testes Unitários: Utilize Jest para criar testes unitários
- Testes de Integração e End-to-End: Utilizar Cypress

## 4.2 Controle de Qualidade

- Revisão de Código: Todos os commits devem ser revisados por pelo menos um outro desenvolvedor.
- Sugestão: Utilizar ESLint para análise estática de código.

# 5. Ferramentas e Tecnologias

- Backend: Utilize Node.js com TypeScript.
- Frontend: Utilize Angular com TypeScript.

