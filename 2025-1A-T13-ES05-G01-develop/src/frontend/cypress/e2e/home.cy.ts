describe('Testando a página Home', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/inicio'); // Página principal
    });
  
    it('Deve carregar a página corretamente', () => {
      cy.contains('Gallaudet').should('be.visible'); 
    });
  
    it('Deve filtrar perfis ao pesquisar pelo nome', () => {
      cy.get('input[placeholder="Pesquisar por nome"]').type('Nome do Aluno 1'); // Digita no campo de pesquisa
      cy.contains('Nome do Aluno 1').should('be.visible'); // Verifica se o resultado correto aparece
      cy.contains('Nome do Aluno 2').should('not.exist'); // Garante que não aparecem perfis errados
    });
  
    it('Deve filtrar perfis corretamente ao pesquisar pelo nome', () => {
        // Digita "Nome do Aluno 1" no campo de pesquisa
        cy.get('input[placeholder="Pesquisar por nome"]').type('Nome do Aluno 1');
    
        // Verifica se o perfil correto aparece
        cy.contains('Nome do Aluno 1').should('be.visible');
    })
  
    it('Deve mudar o tipo de usuário selecionado', () => {
      cy.get('app-filter').click(); // Abre o filtro de usuários
      cy.contains('Profissionais').click(); // Seleciona "Profissionais"
      cy.contains('Nome do Profissional 4').should('be.visible'); // Verifica se os profissionais aparecem
      cy.contains('Nome do Aluno 1').should('not.exist'); // Garante que alunos não aparecem
    });
  });
  