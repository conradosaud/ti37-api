const rotas = require("express").Router();
const filmes = (req) => require(`../controlador/filmes/${req}.js`);

rotas.get("/", filmes("get").BuscaTodos);

module.exports = rotas;

