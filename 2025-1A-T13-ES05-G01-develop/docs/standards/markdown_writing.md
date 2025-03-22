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


## Sumário

- [1. Introdução](#1-introdução)
- [2. Hierarquia de Títulos](#2-hierarquia-de-títulos)
- [3. Padrões para Inserção de Texto](#3-padrões-para-inserção-de-texto)
- [4. Inserção de Imagens](#4-inserção-de-imagens)
- [5. Referências no Corpo do Texto](#5-referências-no-corpo-do-texto)
- [6. Exemplo Completo de Conteúdo](#6-exemplo-completo-de-conteúdo)
- [7. Referências](#7-referências)

---

## 1. Introdução
&ensp; Este documento estabelece diretrizes claras e padronizadas para a escrita de documentos em Markdown, garantindo organização, legibilidade e uniformidade na formatação. Ele abrange desde a estruturação de títulos e inserção de texto até boas práticas para referências e inclusão de imagens. Seguindo estas recomendações, espera-se que os documentos criados sejam bem estruturados e adequados para colaboração e revisão eficiente.

---

## 2. Hierarquia de Títulos

&ensp; No Markdown, os títulos seguem uma hierarquia baseada no número de `#` utilizados. A estrutura recomendada é:  
- `#` Título Principal (nível 1)  
- `##` Subtítulo (nível 2)  
- `###` Subsubtítulo (nível 3)  
- `####` Título de Seção Menor (nível 4)  

**Exemplo de aplicação correta da hierarquia:**  
```markdown
# Seção 1 - Introdução  
## Seção 1.1 - Quem é o parceiro  
### Seção 1.1.1 - O que o parceiro faz  
#### Seção 1.1.1.1 - Como é possível realizar
```

**Nota:**  
- Use cada título de forma adequada para dividir as seções do documento logicamente.  
- Evite pular níveis. Por exemplo, não use `###` logo após um `#`.  

---

## 3. Padrões para Inserção de Texto  

&ensp; Todo parágrafo deve ser claro e bem estruturado, mantendo uma linha de raciocínio contínua e coerente, contendo introdução, desenvolvimento e conclusão (mesmo que o desenvolvimento abrange todo o assunto, retome ele na conclusão). As citações ao longo do texto devem ser formatadas entre parênteses com link a uma seção de **Referências**.

**Exemplo:**  
```markdown
&ensp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. [(Fonte, 2000)](#referencias).
```

&ensp; Utilize `&ensp;` (espaço em HTML) no início de parágrafos para ajustar a indentação, caso necessário.

---

## 4. Inserção de Imagens  

&ensp; Todas as imagens devem ser centralizadas e acompanhadas de uma legenda clara e descritiva, seguida da indicação da fonte. Abaixo está um modelo para a inserção de imagens:  

```markdown
<div align="center">
  <sub>Figura X - Título Descritivo da Imagem</sub> <br>

  <img 
    src="./assets/section5/5.2_sequencies_diagrams/scheduling_appointment.png" alt="Descrição da imagem" 
    style="max-width: 600px; width: 100%; height: auto;">

  <sup>Fonte: Material produzido pelos autores (2025).</sup>
</div>
```

*A utilização de um `<br>` depois do fechamento do `<sub>` é para evitar a quebra de texto quanto exite uma imagem seguida da outra.*

**Regras:**  
- Use `<div align="center">` para centralizar a imagem e a legenda.  
- A legenda deve ser precedida por `<sub>` e finalizada por um `<sup>` indicando a fonte da imagem.    

---

## 5. Referências no Corpo do Texto  

&ensp; De acordo com este [guia](https://sddinforma.fob.usp.br/abnt-105202023/) da USP sobre a padronização de referências em trabalhos acadêmicos conforme a ABNT, as referências devem ser mencionadas no texto no seguinte formato: 

```markdown
&ensp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. [(Fonte, 2000)](#referencias).
```

### Citações com múltiplos autores  
- **Um autor:** [(Fonte, 2000)](#referencias).

  *caixa baixa e seprado por vírguka.* 
- **Até 3 autores:** [(Fonte1; Fonte2; Fonte3, 2020)](#referencias).
- **Mais de 3 autores:** [(Fonte1 et al., 2023)](#referencias) (Atenção: O autor que aparece deve ser o que possui maior cargo de formação, caso não seja informado, preencha com o primeiro nome que aparecer no artigo).
- **Múltiplas fontes:** [(Fonte1, 2021; Fonte2, 2022)](#referencias).  

---

## 6. Exemplo Completo de Conteúdo 

```markdown
# 5 História da Arte  
## 5.1. Introdução  

&ensp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. [(FONTE; 2000)](#referencias).

<div align="center">
  <sub>Figura 1 - Modelo das Cinco Forças de Porter</sub> <br>

  <img 
    src="../assets/documentation/section4/4.1.1_industry_context/porters_five_forces.png" 
    alt="Diagrama das cinco forças de Porter"
    style="max-width: 600px; width: 100%; height: auto;"
  >

  <sup>Fonte: Material produzido pelos autores (2024).</sup>
</div>

&ensp; A figura acima ilustra o modelo das cinco forças competitivas de Porter, que é amplamente utilizado para análise de indústrias. O modelo considera fatores como concorrentes, poder de barganha e barreiras de entrada [(FONTE et al., 2000)](#referencias).  

&ensp; A figura acima ilustra o modelo das cinco forças competitivas de Porter, que é amplamente utilizado para análise de indústrias. O modelo considera fatores como concorrentes, poder de barganha e barreiras de entrada [(FONTE1, 2021; FONTE2, 2015)](#referencias).  
```

---

## 7. Referências

&ensp; Exemplos de padrões de escrita de referências, conforme o [guia da USP](https://usp.br/sddarquivos/arquivos/abnt6023.pdf) e a [página da Exame](https://exame.com/tecnologia/examelab/referencias-bibliograficas-no-padrao-abnt-saiba-como-fazer/), que também trata do tema.

* ALBERTACCI, Laura. Devo me preocupar com a LGPD? Jusbrasil, 2024. Disponível em: <https://www.jusbrasil.com.br/artigos/devo-me-preocupar-com-a-lgpd/1239975999>. Acesso em: 10 ago. 2024.

  *Exemplo de site com nome do autor.* 

* IBM. O que é blockchain? 2024. Disponível em: <https://www.ibm.com/br-pt/topics/blockchain>. Acesso em: 10 ago. 2024.

  *Exemplo de site sem nome do autor.*

* ANDRADE, José Eduardo Pessoa de; ZAPORSKI, Janusz. A indústria de cloro-soda. Revista do BNDES, Rio de Janeiro, v. 1, n. 2, p. [183]-225, dez. 1994. Disponível em: <https://web.bndes.gov.br/bib/jspui/bitstream/1408/11836/2/RB%2002%20A%20Ind%c3%bastria%20de%20Cloro-Soda_P_BD.pdf>. Acesso em: 7 ago. 2024.

  *Exemplo de livro com volume, número, página.*
---