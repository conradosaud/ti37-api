const rotas = require("express").Router();
const caminho = ( metodo ) => require("../controlador/filmes/"+metodo);

// GET
rotas.get("/", caminho("get").BuscaTodos );
rotas.get("/busca_filmes/:titulo", caminho("get").BuscaPorTitulo );

// POST
rotas.post("/", caminho("post").Insere );

// DELETE
rotas.delete("/:id", caminho("delete").Remove );

module.exports = rotas;