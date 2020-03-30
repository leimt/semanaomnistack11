
# Semana OmniStack 11.0

Este repositório contém o código-fonte da [Semana OmniStack 11](https://rocketseat.com.br/week/inscricao/11.0) que aconteceu entre os dias 23 e 29 de março de 2020.

O curso foi apresentado pelo Diego Fernandes da RocketSeat.

O curso é muito bom e foram abordados diversos temas como a construção de um backend usando Nodejs, execução de testes unitários e testes de integração com [Jest](https://jestjs.io/docs/en/api).

O frontend foi criado com Reactjs.

E também uma aplicação mobile que pode ser executada em iOs e Android criada com React e [Expo](https://docs.expo.io/versions/v36.0.0/).

Cada parte da aplicação, backend, frontend e mobile, foi construída usando a IDE [Visual Studio Code](https://code.visualstudio.com/).

# Backend

O projeto backend usa a versão do Nodejs v.12.16.1. A criação do projeto é feita com:

```
$ npx create-react-app frontend
```

Para maior produtividade, foi usada uma ferramenta utilitária que nos permite recarregar o projeto automaticamente: o [Nodemon](https://nodemon.io/), para instalá-la:

```
$ npm install nodemon -D
```

A consulta em banco de dados é feita através do criador de consultas (query builder) [Knex.js](http://knexjs.org/) que também permite criar tabelas no banco de dados usando-se 'migrations'. O banco de dados utilizado foi o SQLite3.

# Frontend

O frontend é feito em [ReactJs](https://reactjs.org/). O ReactJs possui bibliotecas de [ícones](https://react-icons.netlify.com) e também o [Axios](https://github.com/axios/axios).

# Mobile

A aplicação mobile pode ser executada tanto no Android quanto no iOs. A construção do app foi feita utilizando-se o framework [Expo](https://docs.expo.io/). O Expo também possui suporte a [ícones](https://docs.expo.io/versions/latest/guides/icons/). A app envia mensagens pelo Whatsapp através do React Native e também envia e-mails através do [Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/). E como cliente REST também utiliza o Axios.

