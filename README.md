# Valoriza

<p align="center">
  <img alt="Preview" src="./.github/preview.png">
</p>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken)
- [Dotenv](https://github.com/motdotla/dotenv)
- [TypeORM](https://typeorm.io/#/)

## 💻 Projeto

Valoriza é uma plataforma para promover o reconhecimento entre companheiros de equipe.

## 🚀 Como executar

- Clone o repositório
- Rode `npm install` para baixar as dependências
- Crie um arquivo `.env` na raiz do projeto com os seguintes valores:

```.env
BCRYPT_PASSWORD=SENHA_AQUI
MODE=dev
PORT=3000
DATABASE_URL=postgres://postgres:docker@localhost:5432/valoriza
```

- Entre no postgres e crie uma tabela com o nome `valoriza`
- Rode `npm run typeorm migration:run` para criar as tabelas do banco de dados.
- Rode o `npm run dev` para iniciar a aplicação.

Por fim, a aplicação estará disponível em `http://localhost:3000`

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
