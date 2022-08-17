const rotas = require("express").Router();

rotas.use("/filmes", require("./rotasFilmes") );

module.exports = rotas;