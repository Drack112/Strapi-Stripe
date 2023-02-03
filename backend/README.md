<p align="center">
  <a href="https://strapi.io/" target="blank"><img src="https://camo.githubusercontent.com/d19ee7d0ca9d29c17995529d0181d925843e564cb97b37db6c35521bb08ac578/68747470733a2f2f696d616765732e6f70656e636f6c6c6563746976652e636f6d2f7374726170692f336563333234372f6c6f676f2f3235362e706e67" width="200" alt="Strapi Logo" /></a>
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">
</p>

<br>

<a id="-tecnologias"></a>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Strapi](https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

<a id="-projeto"></a>

## 💻 Projeto

Sistema de CMS principal do pequeno e-commerce que irá consumir através de uma API rest do próprio Strapi

<a id="-como-executar"></a>

## 🚀 Como executar

### 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente de `< Docker & RnodeJS>`

- Você tem uma máquina `< Windows / Linux / Mac >`.

- Você possui um `< Editor de código ou IDE / Gerenciador de banco de dados >`.

## ☕ Pequena ajuda

Preencha o arquivo `.env.example` com as informações cobradas e depois renomeie para `.env`.

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS="toBeModified1,toBeModified2"
ADMIN_JWT_SECRET=

DATABASE_HOST=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_PORT=
DATABASE_URL=

STRIPE_KEY=
CLIENT_URL=http://localhost:3000

```

## Configurando a apliação antes de iniciar :gear:

Primeiro, instale todas as Gems que são cobradas no package.json:

```bash
npm install // yarn install
```

### Se lembre de ter o Docker rodando :ocean:

E então, rode o comando `docker-compose up -d`.

Depois disso, execute os comandos de inicialização do Strapi:

<br>

**_Dev_**: `yarn dev`
<br>

**_Start_**: `yarn start`

Agora você pode acessar [http://localhost:1337](http://localhost:1337) do seu navegador.

<a id="licença"></a>

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE.md) para mais detalhes.

---

#### _Sinta-se livre para colaborar, toda ajuda é bem vinda ;)_
