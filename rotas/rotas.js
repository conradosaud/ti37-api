const rotas = require("express").Router();

rotas.use("/filmes", require("./rotasFilmes.js") );
rotas.use("/usuarios", require("./rotasUsuarios.js") );

module.exports = rotas;