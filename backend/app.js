const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');// on récupère sequelize
const bodyParser = require('body-parser');

// recuperation de Helmet (sécurise les appli Express en définissant divers en-têtes HTTPP, protège contre les failles XSS//
const helmet = require('helmet');
const cors = require('cors');

//environnement variables//
require('dotenv').config() 



/* CROSS ORIGIN RESOURCE SHARING CORS*/
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


/* .json - méthode de l'objet bodyParser qui transforme le corps de la requête en objet JS*/
app.use(bodyParser.json());

app.use(helmet());
app.use(cors());



module.exports = app;