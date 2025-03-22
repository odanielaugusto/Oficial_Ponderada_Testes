# Oficial_Ponderada_Testes

## 📌 README - Testes Automatizados com Cypress
### Caso de Teste: Filtragem de Perfis na Página Home
### 1. Objetivo do Teste
Verificar se a funcionalidade de pesquisa de perfis na página Home está funcionando corretamente, garantindo que:

- Apenas os perfis que contêm o texto pesquisado sejam exibidos.

- Perfis que não correspondem à pesquisa não sejam exibidos.

### 2. Pré-condição
- O servidor Angular deve estar rodando em http://localhost:4200/inicio.

- O Cypress deve estar instalado no projeto (npm install cypress --save-dev).

- O usuário deve ter acesso ao código-fonte do projeto.

### 3. Procedimento de Teste
1. Acessar a página inicial do sistema.
2. Localizar o campo de pesquisa de perfis.
3. Digitar um nome válido no campo de pesquisa (exemplo: "Nome do Aluno 1").
4. Verificar se o perfil correspondente aparece na tela.
5. Confirmar que perfis que não correspondem à pesquisa não estão visíveis.

6. Resultado Esperado
- O perfil com o nome pesquisado deve ser exibido.

- Perfis que não possuem o nome pesquisado não devem ser exibidos.

Resultado Obtido
O teste foi executado com sucesso e os resultados esperados foram alcançados.

- Evidência: Os testes Cypress passaram sem erros.

6. Pós-condição
O sistema deve continuar funcionando normalmente após a execução dos testes.

7. A funcionalidade de pesquisa deve permanecer ativa.

## Automação do Teste com Cypress
O teste foi automatizado utilizando Cypress, garantindo que a pesquisa de perfis funcione corretamente.

📌 Código do Teste Automatizado
Arquivo: cypress/e2e/home.cy.ts:

```ts
describe('Testando a página Home', () => {
  beforeEach(() => {
    cy.visit('/'); // Garante que a página inicial é carregada
  });

  it('Deve filtrar perfis corretamente ao pesquisar pelo nome', () => {
    // Digita "Nome do Aluno 1" no campo de pesquisa
    cy.get('input[placeholder="Pesquisar por nome"]').type('Nome do Aluno 1');

    // Verifica se o perfil correto aparece
    cy.contains('Nome do Aluno 1').should('be.visible');

    // Garante que um perfil diferente não está sendo mostrado
    cy.contains('Nome do Aluno 2').should('not.exist');
  });
});

```

### Como Rodar os Testes?

1. Acessar a pasta de frontend e executar ```npm i ```
2. Instalar Cypress:
```npm install cypress --save-dev```
3. Iniciar servidor: ```npm start```
4. Rodar Cypress: ```npx cypress open```


