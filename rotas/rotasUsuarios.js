const rotas = require("express").Router();
const caminho = ( metodo ) => require("../controlador/usuarios/"+metodo);

// // POST
rotas.post("/", caminho("post").Insere );
rotas.post("/autentica", caminho("post").Autentica );

module.exports = rotas;