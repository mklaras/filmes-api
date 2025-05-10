# Catálogo de Filmes com GraphQL e Node.js

Este projeto consiste em uma API GraphQL para gerenciamento de filmes e um frontend simples para interagir com ela.

## Funcionalidades

- Listar todos os filmes
- Buscar filme por ID
- Adicionar novo filme
- Deletar filme existente

## Como executar

### Pré-requisitos

- Node.js (v14 ou superior)
- NPM ou Yarn

### Backend GraphQL

1. Navegue até a pasta `graphql`:
   ```bash
   cd graphql
2. Instale as dependências:
    ```bash
    npm install
3. Inicie o servidor:
    ```bash
    npm start    
O servidor GraphQL estará disponível em: http://localhost:4000

### Frontend

1. O frontend é composto por arquivos estáticos (HTML, CSS, JS).
2. Abra o arquivo frontend/index.html em um navegador web.
3. Certifique-se de que o servidor GraphQL está em execução.

## Uso

- A página carregará automaticamente a lista de filmes.
- Para adicionar um novo filme, preencha o formulário e clique em "Adicionar Filme".
- Para deletar um filme, clique no botão "Deletar" ao lado do filme desejado.

## Estrutura do Projeto

- /graphql: Contém o servidor GraphQL
    - src/schema.js: Define o schema GraphQL
    - src/resolvers.js: Implementa as operações GraphQL
    - src/db.js: "Banco de dados" em memória
    - src/server.js: Configuração do servidor Apollo
- /frontend: Interface do usuário
    - index.html: Estrutura da página
    - style.css: Estilos CSS
    - app.js: Lógica para interação com a API GraphQL

## Como executar o projeto

1. Abra um terminal na pasta `graphql` e execute:
   ```bash
   npm install
   npm start
2. Abra o arquivo frontend/index.html em um navegador web.