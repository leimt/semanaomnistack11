[Em português](https://github.com/leimt/semanaomnistack11)
# La Semaine OmniStack 11.0

Ce dépôt contient le code source de la [Semaine OmniStack](https://rocketseat.com.br/week/inscricao/11.0) qui est arrivée entre les jours 23 et 29 de mars de 2020.

Le cours a été présenté par Diego Fernandes de la RocketSeat.

Le cours est trop bien et on a abordé des divers thèmes comme la construction d'un backend avec Nodejs, l'execution des tests unitaires et test d'intégration avec [Jest](https://jestjs.io/docs/en/api).

Le front-end a été crée avec Reactjs.

Et aussi une application mobile qui peut être exécutée sur iOs et Android crée avec React et [Expo](https://docs.expo.io/versions/v36.0.0/).

Chaque partie de l'application, backend, frontend et mobile, a até construit en utilisant l'IDE [Visual Studio Code](https://code.visualstudio.com/).

# Backend

Le projet backend utilise la version du Nodejs v.12.16.1. On crée le projet avec :

```
$ npx create-react-app frontend
```

Pour une grande productivité, on a utilisé un outil utilitaire qui permet recharger les project automatiquement : le [Nodemon](https://nodemon.io/), pour l'installer:

```
$ npm install nodemon -D
```

Le recherche en base de donnés est feit à travers du creater de query (query builder) [Knex.js](http://knexjs.org/) qui permet aussi créer les tables en base de donnés en utilisant 'migrations'. La base de donnés utilisé a été SQLite3.

# Frontend

Le frontend est fait en [ReactJs](https://reactjs.org/). Le ReactJs tient des bibliotèques de [icones](https://react-icons.netlify.com) et aussi le [Axios](https://github.com/axios/axios).

# Mobile

L'application mobile peut être executé en Android et en iOs. La construction du app a été fait en utilisant le framework [Expo](https://docs.expo.io/). L'Expo a aussi suport à les [ícones](https://docs.expo.io/versions/latest/guides/icons/). L'app envoie des messages par Whatsapp à travers du React Native et aussi envoi des emails à travers du [Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/). Et comme client REST utilise l'Axios aussi.
