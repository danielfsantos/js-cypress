# JS Cypress

Projeto de automação de testes end-to-end com Cypress para validar cenários de login e cadastro em uma aplicação web.

## Visão geral

Este projeto usa Cypress para testar o fluxo principal de autenticação e cadastro em um ambiente web com base URL configurada para:

- https://front.serverest.dev

Os testes estão localizados em `cypress/e2e/` e utilizam fixtures em `cypress/fixtures/` para simular dados de cadastro e login.

## Tecnologias

- JavaScript
- Cypress
- Node.js

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- Node.js (versão LTS recomendada)
- npm

## Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd js-cypress
```

2. Instale as dependências:

```bash
npm install
```

## Estrutura do projeto

```bash
js-cypress/
├── cypress/
│   ├── e2e/
│   │   ├── cadastro.cy.js
│   │   └── login.cy.js
│   ├── fixtures/
│   │   ├── dadosCadastro.json
│   │   └── example.json
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
├── README.md
└── node_modules/
```

## Como executar os testes

### Abrir o Cypress em modo interativo

```bash
npx cypress open
```

### Executar os testes no terminal

```bash
npx cypress run
```

### Executar um arquivo específico

```bash
npx cypress run --spec cypress/e2e/login.cy.js
```

```bash
npx cypress run --spec cypress/e2e/cadastro.cy.js
```

## Casos cobertos

### Login

- Login com sucesso

### Cadastro

- Cadastro com sucesso
- Cadastro com e-mail já existente, validando a mensagem de erro

## Dados de teste

Os dados usados nos testes estão no arquivo:

- `cypress/fixtures/dadosCadastro.json`

Exemplo:

```json
{
  "email": "teste@teste.com",
  "senha": "123456",
  "nome": "Daniel Fernandes"
}
```

## Configuração do Cypress

A config principal está em `cypress.config.js` e define a URL base da aplicação:

```js
baseUrl: "https://front.serverest.dev"
```

Isso permite usar rotas como `/login` diretamente nos testes sem repetir o domínio.

## Observações

- O projeto ainda não possui scripts personalizados em `package.json`, então os testes são executados diretamente com o comando do Cypress.
- Em caso de falhas, verifique se a aplicação de destino está acessível e se o ambiente não está fora do ar.

## Próximos passos sugeridos

- Adicionar testes para logout
- Criar cenários de validação de campos obrigatórios
- Organizar cenários em suítes por funcionalidade
- Incluir scripts no `package.json` para facilitar a execução
